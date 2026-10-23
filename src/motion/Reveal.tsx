import { m, useReducedMotion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

/**
 * Fades and lifts its children into place the first time they scroll into view.
 * With "reduce motion" on, content renders in place immediately: never hidden.
 */
export function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <m.div {...rest}>{children}</m.div>;
  }
  return (
    <m.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </m.div>
  );
}
