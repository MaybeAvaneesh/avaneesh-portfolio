import { m } from "motion/react";
import { useActiveSection } from "../hooks/useActiveSection";
import styles from "./Nav.module.css";

const LINKS = [
  { id: "work", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Stack" },
  { id: "writing", label: "Writing" },
];
const IDS = [...LINKS.map((l) => l.id), "contact"];

export function Nav() {
  const active = useActiveSection(IDS);
  return (
    <header className={styles.bar}>
      <nav aria-label="Primary" className={`wrap ${styles.inner}`}>
        <a className={styles.logo} href="#top" aria-label="Avaneesh Gujran, back to top">
          <span className={styles.mark} aria-hidden="true">
            AG
          </span>
          <span className={styles.wordmark}>Avaneesh Gujran</span>
        </a>
        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={styles.link}
                aria-current={active === l.id ? "true" : undefined}
              >
                {active === l.id && (
                  <m.span
                    layoutId="nav-pill"
                    className={styles.pill}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={styles.label}>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a className={`btn ${styles.cta}`} href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}
