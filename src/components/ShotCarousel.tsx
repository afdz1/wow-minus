"use client";

import { useState } from "react";
import type { ConfirmationShot } from "@/data/confirmed";

export function ShotCarousel({
  shots,
  label,
}: {
  shots: ConfirmationShot[];
  label: string;
}) {
  const [index, setIndex] = useState(0);
  if (!shots.length) return null;

  const shot = shots[index] ?? shots[0];
  const many = shots.length > 1;

  function go(delta: number) {
    setIndex((current) => (current + delta + shots.length) % shots.length);
  }

  return (
    <figure className="article-figure shot confirm-carousel">
      <div
        className="confirm-slide"
        role={many ? "group" : undefined}
        aria-roledescription={many ? "carousel" : undefined}
        aria-label={many ? `${label} images` : undefined}
      >
        <img src={shot.src} alt={shot.alt} />
        {many ? (
          <>
            <button type="button" className="carousel-nav prev" onClick={() => go(-1)} aria-label="Previous image">
              ‹
            </button>
            <button type="button" className="carousel-nav next" onClick={() => go(1)} aria-label="Next image">
              ›
            </button>
            <div className="carousel-dots">
              {shots.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  className={i === index ? "on" : undefined}
                  aria-label={`Image ${i + 1} of ${shots.length}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <div className="carousel-count" aria-live="polite">
              {index + 1} / {shots.length}
            </div>
          </>
        ) : null}
      </div>
      {shot.credit ? (
        <figcaption>
          Screenshot:{" "}
          <a href={shot.credit.href} target="_blank" rel="noopener noreferrer">
            {shot.credit.label}
          </a>
        </figcaption>
      ) : null}
    </figure>
  );
}
