import { describe, expect, it } from "vitest";
import { parseStat } from "./parseStat";

describe("parseStat", () => {
  it.each([
    ["16,000", 16000, ""],
    ["8,000+", 8000, "+"],
    ["10+", 10, "+"],
    ["17", 17, ""],
  ])("parses %s", (value, target, suffix) => {
    expect(parseStat(value)).toEqual({ target, suffix });
  });

  it("returns null for non-numeric values", () => {
    expect(parseStat("lots")).toBeNull();
  });
});
