import { profile } from "../data/profile";
import { Reveal } from "../motion/Reveal";
import { Spotlight } from "../motion/Spotlight";
import { Section } from "./Section";
import styles from "./Background.module.css";

export function Background() {
  return (
    <Section id="about" eyebrow="Background" title="Education & leadership">
      <div className={styles.grid}>
        {profile.background.map((item, i) => (
          <Reveal key={item.org} delay={i * 0.08}>
            <Spotlight as="article" className={styles.box}>
              <p className={styles.meta}>
                {item.period} · {item.location}
              </p>
              <h3 className={styles.org}>{item.org}</h3>
              <p className={styles.role}>{item.role}</p>
              <p className={styles.summary}>{item.summary}</p>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
