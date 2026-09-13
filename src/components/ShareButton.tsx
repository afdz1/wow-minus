"use client";

import { useState } from "react";

export function ShareButton({
  title,
  text,
  path,
}: {
  title: string;
  text: string;
  path: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "shared">("idle");

  async function onShare() {
    const url = `${window.location.origin}${path}`;
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({ title, text, url });
        setStatus("shared");
      } else {
        await navigator.clipboard.writeText(url);
        setStatus("copied");
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      try {
        await navigator.clipboard.writeText(url);
        setStatus("copied");
      } catch {
        return;
      }
    }
    window.setTimeout(() => setStatus("idle"), 1600);
  }

  const label = status === "copied" ? "Copied" : status === "shared" ? "Shared" : "Share";

  return (
    <button type="button" className="share-btn" onClick={onShare} aria-live="polite">
      {label}
    </button>
  );
}
