import { profile } from "../data/profile";
import { Reveal } from "../motion/Reveal";
import { Section } from "./Section";
import styles from "./Skills.module.css";

export function Skills() {
  const all = profile.skills.flatMap((g) => g.items);
  return (
    <Section id="skills" eyebrow="Stack" title="What I work with">
      {/* Decorative marquee; the grouped list below carries the content. */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.track}>
          {[...all, ...all].map((s, i) => (
            <span key={i} className={styles.tag}>
              {s}
            </span>
          ))}
        </div>
      </div>
      <dl className={styles.groups}>
        {profile.skills.map((group, i) => (
          <Reveal key={group.name} delay={i * 0.05} className={styles.row}>
            <dt className={styles.name}>{group.name}</dt>
            <dd className={styles.items}>{group.items.join(" · ")}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
