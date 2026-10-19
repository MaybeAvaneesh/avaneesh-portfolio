import { profile } from "../data/profile";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import { ExternalLink } from "./ExternalLink";
import styles from "./Contact.module.css";

const COPY_LABEL = { idle: "Copy email", copied: "Copied", failed: "Press ⌘C to copy" } as const;

export function Contact() {
  const { status, copy } = useCopyToClipboard();

  const handleCopy = () => {
    void copy(profile.email);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className={styles.contact}>
      <div className="wrap">
        <p className={styles.eyebrow}>Contact</p>
        <h2 id="contact-heading" className={styles.title}>
          Let&apos;s build
          <br />
          something<span aria-hidden="true">.</span>
        </h2>
        <p className={styles.intro}>{profile.availability}</p>
        <div className={styles.mail}>
          <a className={styles.address} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <button type="button" className={styles.copy} onClick={handleCopy}>
            {COPY_LABEL[status]}
          </button>
          <span role="status" className="visually-hidden">
            {status === "copied" ? "Email address copied" : ""}
          </span>
        </div>
        <ul className={styles.links}>
          {profile.socials.map((s) => (
            <li key={s.label}>
              <ExternalLink className="btn" href={s.href}>
                {s.label} ↗
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
