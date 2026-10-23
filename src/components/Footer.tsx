import { profile } from "../data/profile";
import styles from "./Footer.module.css";

// Evaluated once at load, so render stays pure.
const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <span>
          © {YEAR} {profile.name.full}
        </span>
        <span>React · GSAP · Motion</span>
      </div>
    </footer>
  );
}
