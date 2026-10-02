import Link from "next/link";
import { LogoIcon } from "./Logo";
import { nav, site, waLink, mailtoLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot">
          <div className="col" style={{ maxWidth: 260 }}>
            <div className="mark-small">
              <LogoIcon />
              <span className="wordmark" style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 700 }}>
                PONTO 33
              </span>
            </div>
            <p style={{ marginTop: 14 }}>
              Cafeteria autônoma de autoatendimento. Café de alta qualidade,
              pronto em segundos.
            </p>
          </div>

          <div className="col">
            <h4>Navegar</h4>
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="col">
            <h4>Contato</h4>
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              {site.contact.phoneDisplay}
            </a>
            <a href={mailtoLink}>{site.contact.email}</a>
            <a href={site.contact.instagramUrl} target="_blank" rel="noopener noreferrer">
              {site.contact.instagramHandle}
            </a>
          </div>
        </div>

        <div className="copy">
          <p>
            © {year} {site.name} · {site.tagline}. Todos os direitos reservados.
          </p>
          <p className="copy-holding">
            {site.name} é uma marca da {site.holding}.
          </p>
        </div>
      </div>
    </footer>
  );
}
