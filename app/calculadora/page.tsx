import type { Metadata } from "next";
import { CalculatorHero } from "@/components/CalculatorHero";
import { IconArrow, IconWhatsApp } from "@/components/icons";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Simulador de Rentabilidade",
  description:
    "Simule quanto a sua franquia Ponto 33 pode lucrar por mês e em quanto tempo o investimento se paga. Cafeteria autônoma, sem equipe no balcão.",
  alternates: { canonical: "/calculadora" },
};

export default function CalculadoraPage() {
  return (
    <>
      <section className="hero-franquias">
        <div className="wrap section calc-lp-wrap">
          <div className="section-head center">
            <span className="eyebrow">Simulador de rentabilidade</span>
            <h1>
              Quanto a sua <span className="gold-grad">Ponto 33</span> pode lucrar
              por mês?
            </h1>
            <p>
              Ajuste os números da sua operação e veja, na hora, a estimativa de
              lucro e o tempo de retorno do investimento.
            </p>
          </div>

          <CalculatorHero />

          {/* ---- CTA ---- */}
          <div className="band calc-lp-band">
            <div>
              <h2>Gostou dos números?</h2>
              <p>
                Fale agora com o nosso time e receba a apresentação completa da
                franquia Ponto 33.
              </p>
            </div>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Falar no WhatsApp <IconArrow style={{ width: 18, height: 18 }} />
            </a>
          </div>

          {/* ---- faixa de confiança ---- */}
          <ul className="calc-lp-trust">
            <li>
              <IconWhatsApp style={{ width: 16, height: 16 }} /> A partir de R$
              70.000
            </li>
            <li>Sem funcionário no balcão</li>
            <li>Marketing: não cobramos</li>
            <li>Suporte contínuo</li>
          </ul>

          <p className="calc-lp-disclaimer">
            Valores meramente estimativos. Não constituem promessa de
            rentabilidade.
          </p>
        </div>
      </section>
    </>
  );
}
