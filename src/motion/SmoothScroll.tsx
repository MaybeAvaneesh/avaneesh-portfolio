import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";
import { gsap, prefersReducedMotion, ScrollTrigger } from "./gsap";

/**
 * Inertial scrolling with Lenis, driven by GSAP's ticker so ScrollTrigger
 * scenes stay perfectly in sync. Disabled when the user prefers reduced motion.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      lerp: 0.1,
      anchors: { offset: -80 },
      autoRaf: false,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return children;
}
