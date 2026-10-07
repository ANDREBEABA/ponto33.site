import type { Metadata } from "next";
import Link from "next/link";
import {
  IconArrow,
  IconCheck,
  IconInstagram,
  IconWhatsApp,
} from "@/components/icons";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Obrigado, futuro franqueado",
  description:
    "Recebemos o seu cadastro de interesse na franquia Ponto 33. Nosso time entra em contato em breve.",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <section className="hero-franquias">
      <div className="wrap section obrigado">
        <div className="success-badge" aria-hidden="true">
          <IconCheck />
        </div>

        <span className="eyebrow">Cadastro recebido</span>
        <h1>
          Obrigado, futuro <span className="g">franqueado</span>!
        </h1>
        <p className="lead">
          Recebemos o seu cadastro. Nosso time já vai analisar o seu perfil e
          entrar em contato em breve com a apresentação completa da franquia.
        </p>

        <div className="steps obrigado-steps">
          <div className="step">
            <div className="num">01</div>
            <h3>Recebemos seu cadastro</h3>
            <p>Seus dados chegaram até a nossa equipe de expansão.</p>
          </div>
          <div className="step">
            <div className="num">02</div>
            <h3>Analisamos seu perfil</h3>
            <p>Avaliamos as informações para preparar a melhor proposta.</p>
          </div>
          <div className="step">
            <div className="num">03</div>
            <h3>Entramos em contato</h3>
            <p>Falamos com você pelo WhatsApp ou telefone informado.</p>
          </div>
        </div>

        <p className="obrigado-aviso">
          📲 Fique de olho no seu <strong>WhatsApp</strong> e{" "}
          <strong>e-mail</strong> — é por lá que vamos te chamar.
        </p>

        <div className="obrigado-cta">
          <a
            href={waLink(
              "Olá! Acabei de me cadastrar como futuro franqueado Ponto 33."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa btn-lg"
          >
            <IconWhatsApp style={{ width: 18, height: 18 }} /> Falar agora no
            WhatsApp
          </a>
          <a
            href={site.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <IconInstagram style={{ width: 18, height: 18 }} /> Seguir no
            Instagram
          </a>
          <Link href="/" className="btn btn-ghost">
            Voltar ao site <IconArrow style={{ width: 18, height: 18 }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
