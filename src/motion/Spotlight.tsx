import { useRef, type ElementType, type PointerEvent, type ReactNode } from "react";
import styles from "./Spotlight.module.css";

interface SpotlightProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}

/**
 * A surface with a soft light and border glow that follow the pointer.
 * Writes CSS variables directly, so moving the mouse never re-renders React.
 */
export function Spotlight({ as: Tag = "div", className = "", children, ...rest }: SpotlightProps) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Tag ref={ref} className={`${styles.spotlight} ${className}`} onPointerMove={onMove} {...rest}>
      {children}
    </Tag>
  );
}
