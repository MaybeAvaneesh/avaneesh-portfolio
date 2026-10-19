import type { Profile } from "./types";

/**
 * All site content lives here. Edit this file to update the portfolio;
 * components only handle layout.
 */
export const profile: Profile = {
  name: { first: "Avaneesh", last: "Gujran", full: "Avaneesh N. Gujran" },
  headline: "Full-stack software engineer at Nike. I ship systems that replace",
  headlineEmphasis: "manual work",
  intro:
    "I work across backend services, APIs, databases and cloud infrastructure with Node.js, Django, React, PostgreSQL and AWS. I'm happiest scoping an ambiguous problem myself and taking it all the way from schema migration to release.",
  location: "Bangalore, India",
  relocation: "open to relocating worldwide",
  availability:
    "Open to full-stack and backend roles, and to relocating almost anywhere (excluding China). The fastest way to reach me is email.",
  email: "nishu.gujran@gmail.com",
  socials: [
    // TODO: replace with your LinkedIn profile URL.
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/MaybeAvaneesh" },
    { label: "Substack", href: "https://substack.com/@avaneeshgujran" },
  ],
  stats: [
    { value: "16,000", label: "hours saved org-wide in one financial year" },
    { value: "10+", label: "engineering teams reusing my CI demo pipeline" },
    { value: "17", label: "production incidents resolved at Nike" },
    { value: "8,000+", label: "students reached through Quark's training program" },
  ],
  jobs: [
    {
      company: "Nike",
      role: "Software Engineer I",
      period: "Jun 2025 – Present",
      location: "Bangalore, India",
      highlights: [
        "Owned the Assortment Versioning System end to end, from scoping and database migrations to release. It replaced the Excel-based reconciliation Merchant Operations used across a 5-level assortment hierarchy, saving **16,000 hours** org-wide in a single financial year.",
        "Built a full-stack soft-delete and restore system across 5 microservice repos and 2 migrations (Node.js, React, MySQL), with 3 REST endpoints and a conflict-resolution modal. Saves **10 hours/week** of production support.",
        "Resolved **17 production incidents**, including a 13-week board recovery via snapshot restoration and regional access failures across APLA. Wrote 3 runbooks that save on-call engineers about an hour per incident.",
        "Built a framework-agnostic pipeline that generates video demos from Cypress recordings in CI/CD. Adopted by **10+ teams**, cutting ~8 hours/sprint/team of manual docs. Presented to senior leadership.",
      ],
    },
    {
      company: "Dexwin.bet",
      role: "Backend Developer",
      period: "Jun 2024 – May 2025",
      location: "Cyprus · remote",
      highlights: [
        "Designed and shipped MERN REST APIs integrating Gemini and GPT into a production sports-prediction service, improving tip-collection accuracy by **10%**.",
        "Implemented a currency and odds-conversion system used consistently across European markets.",
        "Built a Twitter bot (MERN, Redis) with duplicate-response prevention: **+10% followers**, **+30% impressions**.",
        "Built promotion bots for Discord, Reddit and Telegram (Flask, MERN), raising posting volume **40%**.",
      ],
    },
    {
      company: "Streak Card",
      role: "Full Stack Developer Intern",
      period: "May 2023 – Aug 2023",
      location: "Bangalore, India",
      highlights: [
        "Developed an Android device-fingerprint scanner in Kotlin that detects app cloning and rooted devices, cutting fraud **10%** in beta.",
        "Automated PDF generation and CSV population (MERN, Django), cutting processing time 30% and saving **40+ hours/week**.",
      ],
    },
  ],
  featured: [
    {
      id: "assortment",
      eyebrow: "Featured · Nike",
      title: "Assortment Versioning System",
      paragraphs: [
        "Merchant Operations tracked product adds and drops by hand in spreadsheets, across every level from global down to marketplace. I built an automated diff engine that surfaces every add, drop and conflict for review and approval.",
        "I owned it solo: product scoping, migration design, implementation and release.",
      ],
      tech: ["Node.js", "React", "PostgreSQL", "AWS"],
      visual: {
        type: "diff",
        caption: "Illustrative diff across the assortment hierarchy (example numbers)",
        nodes: [
          { label: "global", note: "FA26" },
          { label: "geo · EMEA", badge: { kind: "add", text: "+142" } },
          { label: "country · UK", badge: { kind: "drop", text: "−37" } },
          { label: "marketplace", badge: { kind: "conflict", text: "3 conflicts" } },
        ],
      },
    },
    {
      id: "machiavelli",
      eyebrow: "Side project · Game",
      title: "The Machiavelli",
      paragraphs: [
        "A historical RPG set in Renaissance Italy, 1450–1550. Play one of 20 real figures, from Lorenzo de' Medici to Machiavelli himself, and survive 10 rounds of intrigue drawn from 100 scenarios.",
        "Every gain costs something. Push any stat to 90 and you're assassinated; let one fall to 10 and you're exiled. An LLM writes each round's chronicle live from your history, streamed over SSE.",
      ],
      tech: ["Next.js", "TypeScript", "Mistral AI", "Tailwind"],
      // TODO: switch to the live Vercel URL with label "Play now" once deployed.
      link: { label: "View on GitHub", href: "https://github.com/MaybeAvaneesh/The-Machiavelli" },
      visual: {
        type: "stats",
        caption: "The four stats, each deadly at both extremes",
        items: [
          { name: "Influence", range: "tyrant ↔ irrelevant" },
          { name: "Military", range: "coalition ↔ invaded" },
          { name: "Wealth", range: "poisoned ↔ bankrupt" },
          { name: "Church", range: "threat ↔ excommunicated" },
        ],
      },
    },
  ],
  projects: [
    {
      category: "CI/CD · Nike",
      title: "Automated video demos",
      description:
        "Turns Cypress test recordings into sprint demo videos during CI, so teams stop recording them by hand.",
      tech: ["Cypress", "Jenkins", "Docker"],
    },
    {
      category: "Full stack · Nike",
      title: "Soft-delete & restore",
      description:
        "Undo for accidental deletions across 5 microservices, with a conflict-resolution modal for restores.",
      tech: ["Node.js", "React", "MySQL"],
    },
    {
      category: "LLM · Dexwin",
      title: "AI sports predictions",
      description:
        "REST APIs that feed Gemini and GPT into a live prediction service, with odds conversion for European markets.",
      tech: ["MERN", "Gemini", "GPT"],
    },
  ],
  skills: [
    { name: "Languages", items: ["JavaScript", "Python", "Java", "C++", "C"] },
    { name: "Frontend", items: ["React"] },
    { name: "Backend", items: ["Node.js", "Express", "Django", "Flask", "REST APIs"] },
    { name: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
    { name: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Jenkins", "Git"] },
  ],
  background: [
    {
      org: "BITS Pilani",
      role: "B.E. Computer Science",
      period: "Nov 2021 – Aug 2025",
      location: "Pilani, Rajasthan",
      summary:
        "Coursework in distributed systems, data structures and algorithms, operating systems, OOP, deep learning and applied stochastic processes.",
    },
    {
      org: "Quark",
      role: "Director of Operations",
      period: "Aug 2023 – Aug 2024",
      location: "Goa, India",
      summary:
        "Built Goa's largest free online training program from scratch to 8,000+ students across 32 courses (70% YoY growth), and raised ₹60L+ in sponsorships from Google, Nomura, Bain and Microsoft.",
    },
  ],
  writing: {
    profileUrl: "https://substack.com/@avaneeshgujran",
    posts: [
      {
        title: "The Fight for My Soul",
        date: "2026-10-07",
        readTime: "5 min read",
        summary:
          "A year running a college music festival, the politics it took, and what choosing manoeuvring over honesty cost me. Why I now put trust and real work first.",
        href: "https://avaneeshgujran.substack.com/p/the-fight-for-my-soul",
      },
    ],
  },
};
