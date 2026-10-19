import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Emphasis } from "./Emphasis";

describe("Emphasis", () => {
  it("wraps **marked** segments in <strong> and keeps the rest as text", () => {
    const { container } = render(<Emphasis text="saved **16,000 hours** in **one** year" />);
    const strong = container.querySelectorAll("strong");
    expect([...strong].map((s) => s.textContent)).toEqual(["16,000 hours", "one"]);
    expect(container.textContent).toBe("saved 16,000 hours in one year");
  });

  it("never renders HTML from the text", () => {
    const { container } = render(<Emphasis text="<img src=x onerror=alert(1)>" />);
    expect(container.querySelector("img")).toBeNull();
  });
});
