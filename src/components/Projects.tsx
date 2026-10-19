import { profile } from "../data/profile";
import type { FeaturedProject as Featured } from "../data/types";
import { ExternalLink } from "./ExternalLink";
import { Section } from "./Section";
import styles from "./Projects.module.css";

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="chips" aria-label="Built with">
      {items.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Visual({ visual }: { visual: Featured["visual"] }) {
  if (visual.type === "diff") {
    return (
      <figure className={styles.figure}>
        <ol className={styles.tree}>
          {visual.nodes.map((n, depth) => (
            <li key={n.label} className={styles.node} style={{ marginLeft: depth * 18 }}>
              {n.label}
              {n.note && <span className={styles.note}>{n.note}</span>}
              {n.badge && (
                <span className={`${styles.badge} ${styles[n.badge.kind]}`}>{n.badge.text}</span>
              )}
            </li>
          ))}
        </ol>
        <figcaption className={styles.caption}>{visual.caption}</figcaption>
      </figure>
    );
  }
  return (
    <figure className={styles.figure}>
      <dl className={styles.stats}>
        {visual.items.map((s) => (
          <div key={s.name}>
            <dt>{s.name}</dt>
            <dd>{s.range}</dd>
          </div>
        ))}
      </dl>
      <figcaption className={styles.caption}>{visual.caption}</figcaption>
    </figure>
  );
}

function FeaturedProject({ project }: { project: Featured }) {
  const headingId = `project-${project.id}`;
  return (
    <article className={styles.feature} aria-labelledby={headingId}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{project.eyebrow}</p>
        <h3 id={headingId} className={styles.featureTitle}>
          {project.title}
        </h3>
        {project.paragraphs.map((p) => (
          <p key={p} className={styles.para}>
            {p}
          </p>
        ))}
        <TechList items={project.tech} />
        {project.link && (
          <div className={styles.cta}>
            <ExternalLink className="btn btn--primary" href={project.link.href}>
              {project.link.label} ↗
            </ExternalLink>
          </div>
        )}
      </div>
      <Visual visual={project.visual} />
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Things I built">
      <div className={styles.featuredList}>
        {profile.featured.map((p) => (
          <FeaturedProject key={p.id} project={p} />
        ))}
      </div>
      <ul className={styles.grid}>
        {profile.projects.map((p) => (
          <li key={p.title} className={styles.card}>
            <span className={styles.kicker}>{p.category}</span>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardText}>{p.description}</p>
            <TechList items={p.tech} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
