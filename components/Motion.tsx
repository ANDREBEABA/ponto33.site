"use client";

import { useEffect } from "react";

// Adiciona animações de entrada (reveal ao rolar) sem exigir classes manuais.
// Respeita prefers-reduced-motion e mantém o conteúdo visível caso o JS não rode.
const SELECTOR = [
  ".section-head",
  ".step",
  ".feature",
  ".numcard",
  ".ccard",
  ".tl",
  ".faq-item",
  ".feature-split > *",
  ".calc",
  ".band",
  ".stats",
  ".callout",
  ".manifesto .wrap > *",
].join(",");

export function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const root = document.documentElement;
    root.classList.add("js-motion");

    const els = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTOR)
    );

    // Atraso em cascata entre irmãos do mesmo container (sem usar transition-delay,
    // para não interferir nas transições de hover depois de revelado).
    const counts = new Map<Element, number>();
    const delays = new WeakMap<Element, number>();
    els.forEach((el) => {
      el.classList.add("reveal");
      const parent = el.parentElement;
      const i = parent ? counts.get(parent) ?? 0 : 0;
      if (parent) counts.set(parent, i + 1);
      delays.set(el, Math.min(i, 6) * 70);
    });

    const show = (el: Element) => {
      const d = delays.get(el) ?? 0;
      window.setTimeout(() => el.classList.add("is-visible"), d);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
