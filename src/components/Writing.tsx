import { profile } from "../data/profile";
import { Reveal } from "../motion/Reveal";
import { Spotlight } from "../motion/Spotlight";
import { ExternalLink } from "./ExternalLink";
import { Section } from "./Section";
import styles from "./Writing.module.css";

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function Writing() {
  const { posts, profileUrl } = profile.writing;
  return (
    <Section id="writing" eyebrow="Writing" title="Essays on Substack">
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.href}>
            <Reveal>
              <Spotlight className={styles.card}>
                <ExternalLink className={styles.post} href={post.href}>
                  <span className={styles.meta}>
                    <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
                    <span aria-hidden="true">·</span>
                    {post.readTime}
                  </span>
                  <span className={styles.title}>{post.title}</span>
                  <span className={styles.summary}>{post.summary}</span>
                  <span className={styles.cta}>
                    Read the essay <span className="arrow">↗</span>
                  </span>
                </ExternalLink>
              </Spotlight>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className={styles.more}>
        <ExternalLink href={profileUrl}>
          More on Substack <span className="arrow">↗</span>
        </ExternalLink>
      </p>
    </Section>
  );
}
