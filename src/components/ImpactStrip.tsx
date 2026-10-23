import { useRef } from "react";
import { profile } from "../data/profile";
import { gsap, prefersReducedMotion, useGSAP } from "../motion/gsap";
import { parseStat } from "../lib/parseStat";
import styles from "./ImpactStrip.module.css";

const format = new Intl.NumberFormat("en-US");

export function ImpactStrip() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      for (const el of gsap.utils.toArray<HTMLElement>("[data-count]")) {
        const parsed = parseStat(el.dataset.count ?? "");
        if (!parsed) continue;
        const counter = { n: 0 };
        el.textContent = `0${parsed.suffix}`;
        gsap.to(counter, {
          n: parsed.target,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = `${format.format(Math.round(counter.n))}${parsed.suffix}`;
          },
        });
      }
    },
    { scope: root },
  );

  return (
    <section ref={root} aria-label="Impact highlights" className={styles.strip}>
      <dl className={`wrap ${styles.grid}`}>
        {profile.stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <dt className={styles.label}>{s.label}</dt>
            <dd className={styles.value}>
              <span className="visually-hidden">{s.value}</span>
              <span className="gradient-text" data-count={s.value} aria-hidden="true">
                {s.value}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
