import { useRef } from "react";
import { profile } from "../data/profile";
import { gsap, prefersReducedMotion, useGSAP } from "../motion/gsap";
import { Reveal } from "../motion/Reveal";
import { Emphasis } from "./Emphasis";
import { Section } from "./Section";
import styles from "./Experience.module.css";

export function Experience() {
  const list = useRef<HTMLOListElement>(null);

  // The rail fills as you scroll through the timeline; each node lights up as it's reached.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        `.${styles.progress}`,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: list.current, start: "top 60%", end: "bottom 60%", scrub: 0.6 },
        },
      );
      for (const node of gsap.utils.toArray<HTMLElement>(`.${styles.node}`)) {
        node.classList.remove(styles.lit);
        gsap.to(node, {
          scrollTrigger: {
            trigger: node,
            start: "top 60%",
            toggleClass: { targets: node, className: styles.lit },
          },
        });
      }
    },
    { scope: list },
  );

  return (
    <Section id="work" eyebrow="Experience" title="Where I've shipped">
      <ol ref={list} className={styles.timeline}>
        <span className={styles.rail} aria-hidden="true">
          <span className={styles.progress} />
        </span>
        {profile.jobs.map((job) => (
          <li key={job.company} className={styles.job}>
            <span className={`${styles.node} ${styles.lit}`} aria-hidden="true" />
            <Reveal className={styles.row}>
              <p className={styles.when}>
                <span>{job.period}</span>
                <span>{job.location}</span>
              </p>
              <div className={styles.body}>
                <h3 className={styles.company}>
                  {job.company}
                  <span className={styles.role}>{job.role}</span>
                </h3>
                <ul className={styles.highlights}>
                  {job.highlights.map((h) => (
                    <li key={h}>
                      <Emphasis text={h} className={styles.num} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
