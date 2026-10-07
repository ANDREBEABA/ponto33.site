"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

function BrandLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-ponto33-full.png"
      alt="Ponto 33 — Café Grab & Go"
      width={2000}
      height={704}
      priority
      className={`brand-logo ${className ?? ""}`}
      style={{ width: "auto" }}
    />
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Variante landing: a página de Franquias não usa o cabeçalho de navegação.
  if (pathname === "/franquias") {
    return (
      <header className="site-header">
        <div className="wrap nav-landing">
          <span className="nav-landing-spacer" aria-hidden="true" />
          <Link href="/" className="brand" aria-label="Ponto 33 — início">
            <BrandLogo className="brand-logo-lg" />
          </Link>
          <a
            href="/franquias#quero-ser-franqueado"
            className="btn btn-primary nav-landing-cta"
          >
            Quero ser franqueado →
          </a>
        </div>
      </header>
    );
  }

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link href="/" className="brand" aria-label="Ponto 33 — início" onClick={() => setOpen(false)}>
          <BrandLogo />
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
