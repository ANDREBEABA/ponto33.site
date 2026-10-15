"use client";

import { useEffect, useState } from "react";
import { IconWhatsApp } from "@/components/icons";
import { waLink } from "@/lib/site";

const MENSAGEM =
  "Quero receber a apresentação da Franquia Ponto 33 Café - Grab & Go";
const SEGUNDOS = 7;

export function RedirectCountdown() {
  const [secs, setSecs] = useState(SEGUNDOS);
  const url = waLink(MENSAGEM);

  useEffect(() => {
    if (secs <= 0) {
      window.location.href = url;
      return;
    }
    const timer = setTimeout(() => setSecs((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secs, url]);

  return (
    <div className="redirect-note" role="status" aria-live="polite">
      <p>
        Você será direcionado para o <strong>WhatsApp</strong> em{" "}
        <span className="g">{secs}s</span> para receber a apresentação.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-wa btn-lg"
      >
        <IconWhatsApp style={{ width: 18, height: 18 }} /> Falar agora no WhatsApp
      </a>
    </div>
  );
}
