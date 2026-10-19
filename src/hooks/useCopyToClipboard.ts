import { useCallback, useEffect, useRef, useState } from "react";

export type CopyStatus = "idle" | "copied" | "failed";

/**
 * Copies text to the clipboard and reports the result for a short time.
 * Falls back to "failed" so callers can select the text instead.
 */
export function useCopyToClipboard(resetAfterMs = 1600) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text: string) => {
      clearTimeout(timer.current);
      try {
        if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
        await navigator.clipboard.writeText(text);
        setStatus("copied");
      } catch {
        setStatus("failed");
      }
      timer.current = setTimeout(() => setStatus("idle"), resetAfterMs);
    },
    [resetAfterMs],
  );

  return { status, copy };
}
