import { profile } from "../data/profile";
import { Section } from "./Section";
import styles from "./Background.module.css";

export function Background() {
  return (
    <Section id="about" eyebrow="Background" title="Education & leadership">
      <div className={styles.grid}>
        {profile.background.map((item) => (
          <article key={item.org} className={styles.box}>
            <p className={styles.meta}>
              {item.period} · {item.location}
            </p>
            <h3 className={styles.org}>{item.org}</h3>
            <p className={styles.meta}>{item.role}</p>
            <p className={styles.summary}>{item.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
