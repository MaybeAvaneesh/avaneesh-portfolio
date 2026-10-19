import type { AnchorHTMLAttributes } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Opens in a new tab safely and tells screen-reader users it does. */
export function ExternalLink({ children, ...rest }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
