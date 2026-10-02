"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoIcon } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link href="/" className="brand" aria-label="Ponto 33 — início" onClick={() => setOpen(false)}>
          <LogoIcon />
          <span>
            <span className="wordmark">PONTO 33</span>
            <span className="tag">{site.tagline}</span>
          </span>
        </Link>

        <nav className={`menu ${open ? "open" : ""}`}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`tab ${pathname === item.href ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/franquias" className="btn btn-primary" onClick={() => setOpen(false)}>
            Seja franqueado
          </Link>
        </nav>

        <button
          className="burger"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
