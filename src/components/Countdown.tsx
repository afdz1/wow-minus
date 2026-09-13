"use client";

import { useEffect, useState } from "react";
import { LAUNCH } from "@/data/news";

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now == null) return null;
  const diff = Math.max(0, LAUNCH.getTime() - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  return (
    <div className="countdown">
      <div>
        <b>{days}</b>
        <span>Days</span>
      </div>
      <div>
        <b>{hours}</b>
        <span>Hours</span>
      </div>
      <div>
        <b>{mins}</b>
        <span>Minutes</span>
      </div>
    </div>
  );
}
