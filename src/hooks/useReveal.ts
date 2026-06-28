"use client";
import { useEffect, useRef } from "react";

export function useReveal(rootMargin = "-80px") {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger children with reveal class
            const children = entry.target.querySelectorAll<HTMLElement>(
              ".reveal, .reveal-left, .reveal-right"
            );
            children.forEach((child) => child.classList.add("revealed"));
            // Also reveal the container itself if it has the class
            if (
              entry.target.classList.contains("reveal") ||
              entry.target.classList.contains("reveal-left") ||
              entry.target.classList.contains("reveal-right")
            ) {
              entry.target.classList.add("revealed");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return ref;
}
