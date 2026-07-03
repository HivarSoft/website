"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/*
  Animated hero background — a slowly rotating particle graph.
  • ~120 nodes scattered in a sphere
  • Edges drawn between nodes closer than a threshold
  • The whole mesh drifts and breathes gently
  • Palette: violet / indigo to match the site brand
*/

export default function HeroThree() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ──────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene / Camera ────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 22);

    // ── Helpers ───────────────────────────────────────────────────
    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    // ── Nodes ─────────────────────────────────────────────────────
    const NODE_COUNT = 110;
    const SPREAD = 14;

    // Spread nodes within a sphere volume
    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      const r = SPREAD * Math.cbrt(Math.random()); // cbrt for uniform volume
      positions.push(
        new THREE.Vector3(
          r * Math.sin(theta) * Math.cos(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(theta)
        )
      );
    }

    // Node dots — two sizes for depth interest
    const dotGeo = new THREE.BufferGeometry();
    const dotPositions = new Float32Array(NODE_COUNT * 3);
    const dotSizes = new Float32Array(NODE_COUNT);
    positions.forEach((p, i) => {
      dotPositions[i * 3]     = p.x;
      dotPositions[i * 3 + 1] = p.y;
      dotPositions[i * 3 + 2] = p.z;
      dotSizes[i] = rand(1.5, 4.5);
    });
    dotGeo.setAttribute("position", new THREE.BufferAttribute(dotPositions, 3));
    dotGeo.setAttribute("size",     new THREE.BufferAttribute(dotSizes, 1));

    const dotMat = new THREE.PointsMaterial({
      color: 0xa78bfa,        // violet-400
      sizeAttenuation: true,
      size: 0.18,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const dots = new THREE.Points(dotGeo, dotMat);
    scene.add(dots);

    // ── Edges ─────────────────────────────────────────────────────
    const EDGE_THRESHOLD = 6.5;
    const edgeVerts: number[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dist = positions[i].distanceTo(positions[j]);
        if (dist < EDGE_THRESHOLD) {
          edgeVerts.push(
            positions[i].x, positions[i].y, positions[i].z,
            positions[j].x, positions[j].y, positions[j].z
          );
        }
      }
    }

    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(edgeVerts), 3)
    );

    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x6d28d9,        // violet-700
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
    });
    const edges = new THREE.LineSegments(edgeGeo, edgeMat);
    scene.add(edges);

    // ── Floating highlight nodes (brighter, pulsing) ──────────────
    const ACCENT_COUNT = 8;
    const accentGeo = new THREE.BufferGeometry();
    const accentPos = new Float32Array(ACCENT_COUNT * 3);
    // Pick random nodes from the set
    const accentIndices = Array.from({ length: ACCENT_COUNT }, () =>
      Math.floor(Math.random() * NODE_COUNT)
    );
    accentIndices.forEach((idx, i) => {
      accentPos[i * 3]     = positions[idx].x;
      accentPos[i * 3 + 1] = positions[idx].y;
      accentPos[i * 3 + 2] = positions[idx].z;
    });
    accentGeo.setAttribute("position", new THREE.BufferAttribute(accentPos, 3));
    const accentMat = new THREE.PointsMaterial({
      color: 0xc4b5fd,        // violet-300
      size: 0.38,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });
    const accents = new THREE.Points(accentGeo, accentMat);
    scene.add(accents);

    // ── Group everything so rotation is easy ──────────────────────
    const group = new THREE.Group();
    group.add(dots, edges, accents);
    scene.add(group);

    // ── Resize handler ────────────────────────────────────────────
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Subtle mouse parallax ─────────────────────────────────────
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Animate ───────────────────────────────────────────────────
    let animId: number;
    let t = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.004;

      // Slow auto-rotation
      group.rotation.y += 0.0012;
      group.rotation.x += 0.0004;

      // Gentle mouse parallax
      group.rotation.y += mouseX * 0.0004;
      group.rotation.x += mouseY * 0.0004;

      // Pulse accent node opacity
      accentMat.opacity = 0.6 + 0.35 * Math.sin(t * 1.8);

      // Very subtle camera breathe
      camera.position.z = 22 + Math.sin(t * 0.5) * 0.6;

      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ───────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      dotGeo.dispose();
      dotMat.dispose();
      edgeGeo.dispose();
      edgeMat.dispose();
      accentGeo.dispose();
      accentMat.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
