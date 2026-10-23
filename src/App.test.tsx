import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import App from "./App";
import { profile } from "./data/profile";

describe("App", () => {
  it("renders the name as the only h1", () => {
    render(<App />);
    const h1s = screen.getAllByRole("heading", { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent(`${profile.name.first} ${profile.name.last}`);
  });

  it("has a landmark section for every nav link", () => {
    const { container } = render(<App />);
    const nav = screen.getByRole("navigation", { name: "Primary" });
    for (const link of within(nav).getAllByRole("link")) {
      const href = link.getAttribute("href")!;
      expect(container.querySelector(href), `missing target for ${href}`).not.toBeNull();
    }
  });

  it("opens every external link safely in a new tab", () => {
    render(<App />);
    const external = screen
      .getAllByRole("link")
      .filter((a) => a.getAttribute("href")?.startsWith("http"));
    expect(external.length).toBeGreaterThan(0);
    for (const a of external) {
      expect(a).toHaveAttribute("target", "_blank");
      expect(a.getAttribute("rel")).toContain("noopener");
    }
  });

  it("links the featured Substack essay", () => {
    render(<App />);
    const post = profile.writing.posts[0];
    expect(screen.getByRole("link", { name: new RegExp(post.title) })).toHaveAttribute(
      "href",
      post.href,
    );
  });

  it("copies the email address", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true });
    render(<App />);
    await userEvent.click(screen.getByRole("button", { name: "Copy email" }));
    expect(writeText).toHaveBeenCalledWith(profile.email);
    expect(await screen.findByRole("button", { name: "Copied" })).toBeInTheDocument();
  });

  it("falls back gracefully when the clipboard is unavailable", async () => {
    Object.defineProperty(navigator, "clipboard", { value: undefined, configurable: true });
    render(<App />);
    await userEvent.click(screen.getByRole("button", { name: "Copy email" }));
    expect(await screen.findByRole("button", { name: /Press/ })).toBeInTheDocument();
  });
});
