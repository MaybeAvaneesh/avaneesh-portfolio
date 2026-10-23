import { useRef, type PointerEvent } from "react";
import { profile } from "../data/profile";
import { gsap, prefersReducedMotion, SplitText, useGSAP } from "../motion/gsap";
import { Magnetic } from "../motion/Magnetic";
import styles from "./Hero.module.css";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const { name, headline, headlineEmphasis, intro, location, relocation } = profile;

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const split = SplitText.create(`.${styles.name}`, {
        type: "chars,lines",
        mask: "lines",
        aria: "auto",
      });
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .from(split.chars, { yPercent: 110, duration: 1.2, stagger: 0.03 })
        .from(
          `.${styles.fade}`,
          { autoAlpha: 0, y: 18, filter: "blur(8px)", duration: 1, stagger: 0.08 },
          "-=0.9",
        )
        .from(`.${styles.glow}`, { autoAlpha: 0, scale: 0.8, duration: 2 }, 0);
    },
    { scope: root },
  );

  // Background light follows the pointer; CSS variables only, no re-render.
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = root.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--py", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div ref={root} className={styles.hero} id="top" onPointerMove={onPointerMove}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.grid} />
        <div className={styles.glow} />
      </div>

      <div className={`wrap ${styles.content}`}>
        <p className={`${styles.status} ${styles.fade}`}>
          <span className={styles.dot} aria-hidden="true" />
          Open to new roles · {relocation}
        </p>

        <h1 className={styles.name}>
          {name.first} {name.last}
        </h1>

        <p className={`${styles.tagline} ${styles.fade}`}>
          {headline} <em>{headlineEmphasis}</em> with software.
        </p>
        <p className={`${styles.intro} ${styles.fade}`}>{intro}</p>

        <div className={`${styles.cta} ${styles.fade}`}>
          <Magnetic>
            <a className="btn btn--primary" href="#work">
              See my work <span className="arrow">↓</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn" href="#contact">
              Get in touch
            </a>
          </Magnetic>
        </div>

        <p className={`${styles.meta} ${styles.fade}`}>
          <span>{location}</span>
          <span aria-hidden="true">/</span>
          <span>Software Engineer I, Nike</span>
          <span aria-hidden="true">/</span>
          <span>BITS Pilani ’25</span>
        </p>
      </div>
    </div>
  );
}
