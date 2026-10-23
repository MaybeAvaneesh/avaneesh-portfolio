import { useRef } from "react";
import { profile } from "../data/profile";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import { gsap, prefersReducedMotion, SplitText, useGSAP } from "../motion/gsap";
import { Magnetic } from "../motion/Magnetic";
import { ExternalLink } from "./ExternalLink";
import styles from "./Contact.module.css";

const COPY_LABEL = { idle: "Copy", copied: "Copied", failed: "Press ⌘C" } as const;

export function Contact() {
  const root = useRef<HTMLElement>(null);
  const { status, copy } = useCopyToClipboard();

  // Words brighten one by one as the heading scrolls into view.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const split = SplitText.create(`.${styles.title}`, { type: "words", aria: "auto" });
      gsap.fromTo(
        split.words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: `.${styles.title}`,
            start: "top 85%",
            end: "top 35%",
            scrub: true,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} id="contact" aria-labelledby="contact-heading" className={styles.contact}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="wrap">
        <p className={styles.eyebrow}>Contact</p>
        <h2 id="contact-heading" className={styles.title}>
          Let&apos;s build something that removes busywork.
        </h2>
        <p className={styles.intro}>{profile.availability}</p>

        <div className={styles.mailRow}>
          <a className={styles.address} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <button
            type="button"
            className={styles.copy}
            onClick={() => void copy(profile.email)}
            aria-label={status === "idle" ? "Copy email" : COPY_LABEL[status]}
          >
            {COPY_LABEL[status]}
          </button>
          <span role="status" className="visually-hidden">
            {status === "copied" ? "Email address copied" : ""}
          </span>
        </div>

        <ul className={styles.links}>
          {profile.socials.map((s) => (
            <li key={s.label}>
              <Magnetic>
                <ExternalLink className="btn" href={s.href}>
                  {s.label} <span className="arrow">↗</span>
                </ExternalLink>
              </Magnetic>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
