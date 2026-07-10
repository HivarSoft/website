"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/*
  Animated hero background — a slowly rotating particle graph.
  • Round particle nodes
  • Violet themed
  • Mouse parallax
  • Floating accent particles
*/

export default function HeroThree() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Create circular texture for round particles
    const createCircleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;

      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      ctx.beginPath();
      ctx.arc(32, 32, 28, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const circleTexture = createCircleTexture();

    // ─────────────────────────────────────────────────────────────
    // Renderer
    // ─────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ─────────────────────────────────────────────────────────────
    // Scene / Camera
    // ─────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );

    camera.position.set(0, 0, 22);

    // ─────────────────────────────────────────────────────────────
    // Helpers
    // ─────────────────────────────────────────────────────────────
    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    // ─────────────────────────────────────────────────────────────
    // Nodes
    // ─────────────────────────────────────────────────────────────
    const NODE_COUNT = 150;
    const SPREAD = 20;

    const positions: THREE.Vector3[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      const r = SPREAD * Math.cbrt(Math.random());

      positions.push(
        new THREE.Vector3(
          r * Math.sin(theta) * Math.cos(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(theta)
        )
      );
    }

    const dotGeo = new THREE.BufferGeometry();
    const dotPositions = new Float32Array(NODE_COUNT * 3);

    positions.forEach((p, i) => {
      dotPositions[i * 3] = p.x;
      dotPositions[i * 3 + 1] = p.y;
      dotPositions[i * 3 + 2] = p.z;
    });

    dotGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(dotPositions, 3)
    );

    const dotMat = new THREE.PointsMaterial({
      color: 0xa78bfa,
      size: 0.18,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      map: circleTexture ?? undefined,
      alphaTest: 0.1,
      blending: THREE.AdditiveBlending,
    });

    const dots = new THREE.Points(dotGeo, dotMat);

    // ─────────────────────────────────────────────────────────────
    // Edges
    // ─────────────────────────────────────────────────────────────
    const EDGE_THRESHOLD = 6.5;
    const edgeVerts: number[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dist = positions[i].distanceTo(positions[j]);

        if (dist < EDGE_THRESHOLD) {
          edgeVerts.push(
            positions[i].x,
            positions[i].y,
            positions[i].z,
            positions[j].x,
            positions[j].y,
            positions[j].z
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
      color: 0x6d28d9,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
    });

    const edges = new THREE.LineSegments(edgeGeo, edgeMat);

    // ─────────────────────────────────────────────────────────────
    // Accent Nodes
    // ─────────────────────────────────────────────────────────────
    const ACCENT_COUNT = 8;

    const accentGeo = new THREE.BufferGeometry();
    const accentPos = new Float32Array(ACCENT_COUNT * 3);

    const accentIndices = Array.from(
      { length: ACCENT_COUNT },
      () => Math.floor(Math.random() * NODE_COUNT)
    );

    accentIndices.forEach((idx, i) => {
      accentPos[i * 3] = positions[idx].x;
      accentPos[i * 3 + 1] = positions[idx].y;
      accentPos[i * 3 + 2] = positions[idx].z;
    });

    accentGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(accentPos, 3)
    );

    const accentMat = new THREE.PointsMaterial({
      color: 0xc4b5fd,
      size: 0.38,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      map: circleTexture ?? undefined,
      alphaTest: 0.1,
      blending: THREE.AdditiveBlending,
    });

    const accents = new THREE.Points(accentGeo, accentMat);

    // ─────────────────────────────────────────────────────────────
    // Group
    // ─────────────────────────────────────────────────────────────
    const group = new THREE.Group();

    group.add(dots);
    group.add(edges);
    group.add(accents);

    scene.add(group);

    // ─────────────────────────────────────────────────────────────
    // Resize
    // ─────────────────────────────────────────────────────────────
    const onResize = () => {
      if (!mount) return;

      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", onResize);

    // ─────────────────────────────────────────────────────────────
    // Mouse Parallax
    // ─────────────────────────────────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", onMouseMove);

    // ─────────────────────────────────────────────────────────────
    // Animation
    // ─────────────────────────────────────────────────────────────
    let animationFrameId: number;
    let t = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      t += 0.004;

      group.rotation.y += 0.0012;
      group.rotation.x += 0.0004;

      group.rotation.y += mouseX * 0.0004;
      group.rotation.x += mouseY * 0.0004;

      accentMat.opacity = 0.6 + 0.35 * Math.sin(t * 1.8);

      camera.position.z = 22 + Math.sin(t * 0.5) * 0.6;

      renderer.render(scene, camera);
    };

    animate();

    // ─────────────────────────────────────────────────────────────
    // Cleanup
    // ─────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);

      renderer.dispose();

      dotGeo.dispose();
      dotMat.dispose();

      edgeGeo.dispose();
      edgeMat.dispose();

      accentGeo.dispose();
      accentMat.dispose();

      circleTexture?.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}