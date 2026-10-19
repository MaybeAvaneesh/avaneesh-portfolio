import styles from "./Nav.module.css";

const LINKS = [
  { href: "#work", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "stack" },
  { href: "#writing", label: "writing" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  return (
    <header className={styles.bar}>
      <nav aria-label="Primary" className={`wrap ${styles.inner}`}>
        <a className={styles.logo} href="#top">
          avaneesh<span aria-hidden="true">.</span>dev
        </a>
        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
