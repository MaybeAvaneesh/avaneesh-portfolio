import { profile } from "../data/profile";
import styles from "./ImpactStrip.module.css";

export function ImpactStrip() {
  return (
    <section aria-label="Impact highlights" className={styles.strip}>
      <dl className={`wrap ${styles.grid}`}>
        {profile.stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <dt className={styles.label}>{s.label}</dt>
            <dd className={styles.value}>{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
