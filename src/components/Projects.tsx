import { m, useReducedMotion } from "motion/react";
import { profile } from "../data/profile";
import type { FeaturedProject as Featured } from "../data/types";
import { Magnetic } from "../motion/Magnetic";
import { Reveal } from "../motion/Reveal";
import { Spotlight } from "../motion/Spotlight";
import { ExternalLink } from "./ExternalLink";
import { Section } from "./Section";
import styles from "./Projects.module.css";

const ease = [0.16, 1, 0.3, 1] as const;

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
  const reduce = useReducedMotion();
  const initial = reduce ? false : "hidden";
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, x: -12 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
  };

  if (visual.type === "diff") {
    return (
      <figure className={styles.figure}>
        <m.ol
          className={styles.tree}
          variants={container}
          initial={initial}
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
        >
          {visual.nodes.map((n, depth) => (
            <m.li
              key={n.label}
              variants={item}
              className={styles.node}
              style={{ marginLeft: depth * 20 }}
            >
              <span className={styles.branch} aria-hidden="true" />
              {n.label}
              {n.note && <span className={styles.note}>{n.note}</span>}
              {n.badge && (
                <span className={`${styles.badge} ${styles[n.badge.kind]}`}>{n.badge.text}</span>
              )}
            </m.li>
          ))}
        </m.ol>
        <figcaption className={styles.caption}>{visual.caption}</figcaption>
      </figure>
    );
  }
  return (
    <figure className={styles.figure}>
      <m.dl
        className={styles.stats}
        variants={container}
        initial={initial}
        whileInView="show"
        viewport={{ once: true, margin: "-15%" }}
      >
        {visual.items.map((s) => (
          <m.div key={s.name} variants={item} className={styles.statTile}>
            <dt>{s.name}</dt>
            <dd>
              <span className={styles.meter} aria-hidden="true">
                <span />
              </span>
              {s.range}
            </dd>
          </m.div>
        ))}
      </m.dl>
      <figcaption className={styles.caption}>{visual.caption}</figcaption>
    </figure>
  );
}

function FeaturedProject({ project }: { project: Featured }) {
  const headingId = `project-${project.id}`;
  return (
    <Reveal>
      <Spotlight as="article" className={styles.feature} aria-labelledby={headingId}>
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
              <Magnetic>
                <ExternalLink className="btn" href={project.link.href}>
                  {project.link.label} <span className="arrow">↗</span>
                </ExternalLink>
              </Magnetic>
            </div>
          )}
        </div>
        <Visual visual={project.visual} />
      </Spotlight>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Things I built"
      lede="Production systems at Nike and Dexwin, plus a game I built for fun."
    >
      <div className={styles.featuredList}>
        {profile.featured.map((p) => (
          <FeaturedProject key={p.id} project={p} />
        ))}
      </div>
      <ul className={styles.grid}>
        {profile.projects.map((p, i) => (
          <li key={p.title}>
            <Reveal delay={i * 0.08} className={styles.cardWrap}>
              <Spotlight className={styles.card}>
                <span className={styles.kicker}>{p.category}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardText}>{p.description}</p>
                <TechList items={p.tech} />
              </Spotlight>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
