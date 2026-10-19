import { profile } from "../data/profile";
import styles from "./Hero.module.css";

export function Hero() {
  const { name, headline, headlineEmphasis, intro, location, relocation } = profile;
  return (
    <div className={styles.hero} id="top">
      <div className="wrap">
        <p className={styles.prompt} aria-hidden="true">
          ~ $ whoami <b>--role</b> <span className={styles.cursor} />
        </p>
        <h1 className={styles.name}>
          {name.first}
          <br />
          <span className={styles.last}>{name.last}</span>
        </h1>
        <p className={styles.tagline}>
          {headline} <em>{headlineEmphasis}</em> with software.
        </p>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.cta}>
          <a className="btn btn--primary" href="#work">
            See my work
          </a>
          <a className="btn" href="#contact">
            Get in touch
          </a>
        </div>
        <p className={styles.location}>
          <span className={styles.dot} aria-hidden="true" />
          {location} · {relocation}
        </p>
      </div>
    </div>
  );
}
