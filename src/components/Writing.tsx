import { profile } from "../data/profile";
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
    <Section id="writing" eyebrow="Writing" title="On Substack">
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.href}>
            <ExternalLink className={styles.post} href={post.href}>
              <span className={styles.meta}>
                Essay · <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time> ·{" "}
                {post.readTime}
              </span>
              <span className={styles.title}>{post.title}</span>
              <span className={styles.summary}>{post.summary}</span>
              <span className={styles.cta}>Read the essay ↗</span>
            </ExternalLink>
          </li>
        ))}
      </ul>
      <p className={styles.more}>
        <ExternalLink href={profileUrl}>More on my Substack →</ExternalLink>
      </p>
    </Section>
  );
}
