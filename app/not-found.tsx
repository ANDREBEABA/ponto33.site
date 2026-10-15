import Link from "next/link";
import { IconArrow, IconWhatsApp } from "@/components/icons";
import { waLink } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="hero-franquias">
      <div className="wrap section obrigado">
        <div className="nf-code" aria-hidden="true">
          4<span className="g">0</span>4
        </div>

        <span className="eyebrow">Página não encontrada</span>
        <h1>
          Esse café <span className="g">saiu da rota</span>.
        </h1>
        <p className="lead">
          A página que você procura não existe ou foi movida. Mas o caminho de
          volta é rápido — igual ao nosso café.
        </p>

        <div className="obrigado-cta">
          <Link href="/" className="btn btn-primary btn-lg">
            Voltar ao início <IconArrow style={{ width: 18, height: 18 }} />
          </Link>
          <Link href="/franquias" className="btn btn-ghost">
            Conheça as franquias
          </Link>
          <a
            href={waLink("Olá! Tudo bem? Quero falar com a Ponto 33.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <IconWhatsApp style={{ width: 18, height: 18 }} /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
