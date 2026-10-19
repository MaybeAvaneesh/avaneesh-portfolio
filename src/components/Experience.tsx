import { profile } from "../data/profile";
import { Emphasis } from "./Emphasis";
import { Section } from "./Section";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <Section id="work" eyebrow="Experience" title="Where I've shipped">
      <ol className={styles.timeline}>
        {profile.jobs.map((job) => (
          <li key={job.company} className={styles.job}>
            <p className={styles.when}>
              <strong>{job.period}</strong>
              {job.location}
            </p>
            <div className={styles.body}>
              <h3 className={styles.company}>
                {job.company} <small>{job.role}</small>
              </h3>
              <ul className={styles.highlights}>
                {job.highlights.map((h) => (
                  <li key={h}>
                    <Emphasis text={h} className={styles.num} />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
