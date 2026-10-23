/** Splits "16,000" / "8,000+" / "10+" into a number and the text after it. */
export function parseStat(value: string) {
  const match = value.match(/^([\d,.]+)(.*)$/);
  if (!match) return null;
  return { target: Number(match[1].replace(/,/g, "")), suffix: match[2] };
}
