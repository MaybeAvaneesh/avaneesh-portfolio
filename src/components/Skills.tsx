import { profile } from "../data/profile";
import { Section } from "./Section";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Stack" title="What I work with">
      <div className={styles.grid}>
        {profile.skills.map((group) => (
          <div key={group.name} className={styles.group}>
            <h3 className={styles.name}>{group.name}</h3>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
