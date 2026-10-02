import { IconChevron } from "./icons";

type ManifestoProps = {
  quote: React.ReactNode;
  sub: React.ReactNode;
};

// Faixa de manifesto da marca (fundo com brilho dourado + ícone »»).
export function Manifesto({ quote, sub }: ManifestoProps) {
  return (
    <section className="manifesto section">
      <div className="wrap">
        <span className="chev" aria-hidden="true">
          <IconChevron />
          <IconChevron />
        </span>
        <p className="quote">{quote}</p>
        <p className="sub">{sub}</p>
      </div>
    </section>
  );
}
