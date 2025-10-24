"use client";
import confetti from "canvas-confetti";

export function burst() {
  confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
}

export function twinBurst() {
  const defaults = { spread: 60, ticks: 120, startVelocity: 25, origin: { y: 0.7 } };
  confetti({ ...defaults, particleCount: 60, angle: 55, origin: { x: 0 } });
  confetti({ ...defaults, particleCount: 60, angle: 125, origin: { x: 1 } });
}
