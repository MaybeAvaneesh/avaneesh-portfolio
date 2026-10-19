import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <div className="wrap">
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={headingId} className={styles.title}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
