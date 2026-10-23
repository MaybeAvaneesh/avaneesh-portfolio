import type { ReactNode } from "react";
import { Reveal } from "../motion/Reveal";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, lede, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <div className="wrap">
        <Reveal className={styles.head}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          {lede && <p className={styles.lede}>{lede}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
