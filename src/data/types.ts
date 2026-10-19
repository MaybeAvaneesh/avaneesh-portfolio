export interface Link {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  /** Each highlight may wrap key numbers in **double asterisks** to emphasise them. */
  highlights: string[];
}

export interface DiffNode {
  label: string;
  note?: string;
  badge?: { kind: "add" | "drop" | "conflict"; text: string };
}

export interface FeaturedProject {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  tech: string[];
  link?: Link;
  visual:
    | { type: "diff"; caption: string; nodes: DiffNode[] }
    | { type: "stats"; caption: string; items: { name: string; range: string }[] };
}

export interface Project {
  category: string;
  title: string;
  description: string;
  tech: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface BackgroundItem {
  org: string;
  role: string;
  period: string;
  location: string;
  summary: string;
}

export interface Post {
  title: string;
  date: string;
  readTime: string;
  summary: string;
  href: string;
}

export interface Profile {
  name: { first: string; last: string; full: string };
  headline: string;
  headlineEmphasis: string;
  intro: string;
  location: string;
  relocation: string;
  availability: string;
  email: string;
  socials: Link[];
  stats: Stat[];
  jobs: Job[];
  featured: FeaturedProject[];
  projects: Project[];
  skills: SkillGroup[];
  background: BackgroundItem[];
  writing: { profileUrl: string; posts: Post[] };
}
