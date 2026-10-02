"use client";

import { useState } from "react";
import { site, waLink } from "@/lib/site";
import { IconInstagram, IconMail, IconWhatsApp } from "./icons";

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Fallback para navegadores/contextos sem clipboard API.
      const el = document.createElement("textarea");
      el.value = value;
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
      } catch {
        /* noop */
      }
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button className={`mini ${copied ? "copied" : ""}`} onClick={copy}>
      {copied ? "Copiado!" : "Copiar"}
    </button>
  );
}

const subjects = [
  { label: "Franquia", msg: "Olá! Tenho interesse em uma franquia Ponto 33." },
  { label: "Dúvida geral", msg: "Olá! Tenho uma dúvida sobre a Ponto 33." },
  {
    label: "Imprensa",
    msg: "Olá! Sou da imprensa e gostaria de falar com a Ponto 33.",
  },
  {
    label: "Parceria",
    msg: "Olá! Tenho uma proposta de parceria para a Ponto 33.",
  },
];

export function ContactClient() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="contacts">
        <div className="ccard">
          <div className="ci">
            <IconWhatsApp style={{ width: 22, height: 22 }} />
          </div>
          <div className="k">WhatsApp</div>
          <div className="v">{site.contact.phoneDisplay}</div>
          <div className="row">
            <a
              className="mini wa"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir conversa
            </a>
            <CopyButton value={site.contact.phoneDisplay} />
          </div>
        </div>

        <div className="ccard">
          <div className="ci">
            <IconMail style={{ width: 22, height: 22 }} />
          </div>
          <div className="k">E-mail</div>
          <div className="v">{site.contact.email}</div>
          <div className="row">
            <a className="mini" href={`mailto:${site.contact.email}`}>
              Enviar e-mail
            </a>
            <CopyButton value={site.contact.email} />
          </div>
        </div>

        <div className="ccard">
          <div className="ci">
            <IconInstagram style={{ width: 22, height: 22 }} />
          </div>
          <div className="k">Instagram</div>
          <div className="v">{site.contact.instagramHandle}</div>
          <div className="row">
            <a
              className="mini"
              href={site.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Seguir
            </a>
            <CopyButton value={site.contact.instagramHandle} />
          </div>
        </div>
      </div>

      <div className="chooser">
        <span className="eyebrow">Atalho pelo WhatsApp</span>
        <h2
          style={{ fontSize: "clamp(1.5rem,4vw,2rem)", marginTop: 12 }}
        >
          Qual é o assunto?
        </h2>
        <div className="chips">
          {subjects.map((s, i) => (
            <button
              key={s.label}
              className={`chip ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
        <a
          className="btn btn-wa"
          href={waLink(subjects[active].msg)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir WhatsApp com a mensagem →
        </a>
      </div>
    </>
  );
}
