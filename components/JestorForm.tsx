"use client";

import Script from "next/script";
import { site } from "@/lib/site";

// Embed do formulário Jestor (funil de franquia).
// O div é alvo do embed.js, que injeta o formulário no cliente.
export function JestorForm() {
  return (
    <div className="jestor-wrap">
      <div className="jestor-funil" data-funil={site.jestorFunilId} />
      <Script
        src="https://www.jestor.app.br/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
