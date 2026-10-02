import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Manifesto } from "@/components/Manifesto";
import { ProfitCalculator } from "@/components/ProfitCalculator";
import { Faq } from "@/components/Faq";
import {
  IconArrow,
  IconBuilding,
  IconCheck,
  IconClock,
  IconMoney,
  IconScreen,
} from "@/components/icons";
import { brl, franchise, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Franquias",
  description:
    "Seja um franqueado Ponto 33: modelo de cafeteria autônoma, sem equipe no balcão, com baixo custo fixo e faturando 24 horas.",
};

const msgFranquia =
  "Olá! Tenho interesse em uma franquia Ponto 33.";
const msgApresentacao =
  "Olá! Quero a apresentação da franquia Ponto 33.";

export default function FranquiasPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero section wrap">
        <div className="hero-split">
          <div>
            <span className="eyebrow">Franquias Ponto 33</span>
            <h1>
              Seja dono de um café que{" "}
              <span className="gold-grad">trabalha sozinho</span>.
            </h1>
            <p className="lead">
              Uma operação de cafeteria sem as dores de sempre: sem equipe no
              balcão, com baixo custo fixo e faturando 24 horas — inclusive
              enquanto você dorme.
            </p>
            <div className="hero-cta">
              <a
                href={waLink(msgFranquia)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Quero ser franqueado <IconArrow style={{ width: 18, height: 18 }} />
              </a>
              <Link href="/contato" className="btn btn-ghost">
                Receber apresentação
              </Link>
            </div>
            <div className="impact">
              <div>
                <div className="n">24/7</div>
                <div className="l">faturando sem parar</div>
              </div>
              <div>
                <div className="n">0</div>
                <div className="l">funcionário no balcão</div>
              </div>
              <div>
                <div className="n">∞</div>
                <div className="l">potencial de expansão</div>
              </div>
            </div>
          </div>

          <div className="hero-photo">
            <div className="badge-float b1">
              <IconClock /> Opera 24 horas
            </div>
            <div className="badge-float b2">
              <IconCheck /> Baixo custo fixo
            </div>
            <div className="frame">
              <Image
                src="/img/kiosk-2.webp"
                alt="Estação Ponto 33 em corredor de shopping"
                fill
                priority
                sizes="(max-width: 840px) 100vw, 480px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MANIFESTO ---------- */}
      <Manifesto
        quote={
          <>
            Um ponto de café. Um <span className="g">ponto de avanço</span> para
            o seu negócio.
          </>
        }
        sub="Marca pronta, tecnologia pronta e um modelo enxuto feito para escalar."
      />

      {/* ---------- POR QUE INVESTIR ---------- */}
      <section className="section wrap">
        <div className="section-head center">
          <span className="eyebrow">Por que investir</span>
          <h2>Um modelo pensado para dar certo.</h2>
        </div>
        <div className="features">
          <div className="feature">
            <div className="fi">
              <IconMoney />
            </div>
            <div>
              <h3>Baixo custo operacional</h3>
              <p>
                Operação autônoma reduz despesas com pessoal e simplifica a
                gestão.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="fi">
              <IconClock />
            </div>
            <div>
              <h3>Fatura 24 horas</h3>
              <p>
                A unidade trabalha dia e noite, inclusive fora do horário
                comercial.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="fi">
              <IconScreen />
            </div>
            <div>
              <h3>Marca e tecnologia prontas</h3>
              <p>
                Você recebe a plataforma, o padrão visual e o suporte para
                operar.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="fi">
              <IconBuilding />
            </div>
            <div>
              <h3>Cabe em qualquer ponto</h3>
              <p>
                Prédios, academias, hospitais, faculdades, lojas — ocupa pouco
                espaço.
              </p>
            </div>
          </div>
        </div>

        {/* O modelo por dentro */}
        <div className="feature-split" style={{ marginTop: 56 }}>
          <div className="shot">
            <Image
              src="/img/kiosk-1.webp"
              alt="Estação autônoma Ponto 33 em operação"
              fill
              sizes="(max-width: 820px) 100vw, 520px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="fs-body">
            <span className="eyebrow">O modelo por dentro</span>
            <h3 style={{ marginTop: 12 }}>Tudo pronto para você só operar.</h3>
            <p>
              Da máquina ao app de pagamento, a estação chega configurada e com a
              cara da marca. Você foca no ponto; a gente cuida da tecnologia.
            </p>
            <ul className="ticks">
              <li>
                <IconCheck /> Instalação e padronização visual completas
              </li>
              <li>
                <IconCheck /> Pagamentos 100% digitais e integrados
              </li>
              <li>
                <IconCheck /> Suporte e acompanhamento contínuos
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- CALLOUT ---------- */}
      <section className="section wrap">
        <div className="callout">
          <div className="big">33%</div>
          <div>
            <h3>Menos operação, mais resultado.</h3>
            <p>
              Sem fila, sem caixa e sem equipe no balcão: o modelo autônomo foi
              desenhado para reduzir custo fixo e manter a unidade rentável o dia
              inteiro.{" "}
              <span style={{ color: "var(--gold)" }}>
                (percentual ilustrativo — a definir)
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- EM NÚMEROS ---------- */}
      <section className="section wrap">
        <div className="section-head center">
          <span className="eyebrow">Em números</span>
          <h2>O negócio, de forma transparente.</h2>
          <p>
            Valores médios de referência da operação. O resultado real varia
            conforme o ponto e o fluxo de pessoas.
          </p>
        </div>
        <div className="nums five">
          <div className="numcard">
            <div className="big">A partir de {brl(franchise.investimento)}</div>
            <div className="lbl">Investimento inicial</div>
          </div>
          <div className="numcard">
            <div className="big">{brl(franchise.faturamentoMedio, true)}</div>
            <div className="lbl">Faturamento médio / mês</div>
          </div>
          <div className="numcard">
            <div className="big">{brl(franchise.lucroMedio, true)}</div>
            <div className="lbl">Lucratividade média / mês</div>
          </div>
          <div className="numcard">
            <div className="big">Até {franchise.roiMeses} meses</div>
            <div className="lbl">Retorno do investimento (ROI)</div>
          </div>
          <div className="numcard">
            <div className="big">Até {franchise.margemPct}%</div>
            <div className="lbl">Margem de lucro / mês</div>
          </div>
        </div>
      </section>

      {/* ---------- CALCULADORA DE RENTABILIDADE ---------- */}
      <section className="section wrap">
        <div className="section-head center">
          <span className="eyebrow">Calculadora</span>
          <h2>Simule a sua rentabilidade.</h2>
          <p>
            Ajuste os valores e veja a estimativa de lucro mensal, lucro anual e
            tempo de retorno do investimento.
          </p>
        </div>
        <ProfitCalculator />
      </section>

      {/* ---------- COMO COMEÇAR ---------- */}
      <section className="section wrap">
        <div className="section-head center">
          <span className="eyebrow">Como começar</span>
          <h2>Da conversa à inauguração.</h2>
        </div>
        <div className="timeline">
          <div className="tl">
            <div className="dot">01</div>
            <div className="c">
              <h3>Contato</h3>
              <p>Você fala com a gente e conta sobre o ponto que tem em mente.</p>
            </div>
          </div>
          <div className="tl">
            <div className="dot">02</div>
            <div className="c">
              <h3>Análise do ponto</h3>
              <p>Avaliamos juntos a viabilidade e o potencial do local.</p>
            </div>
          </div>
          <div className="tl">
            <div className="dot">03</div>
            <div className="c">
              <h3>Instalação</h3>
              <p>Cuidamos da montagem, do padrão da marca e da tecnologia.</p>
            </div>
          </div>
          <div className="tl">
            <div className="dot">04</div>
            <div className="c">
              <h3>Operação</h3>
              <p>Sua unidade começa a faturar, com suporte contínuo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ (GEO/AEO) ---------- */}
      <Faq />

      {/* ---------- CTA ---------- */}
      <section className="section wrap">
        <div className="band">
          <div>
            <h2>Pronto para dar o próximo passo?</h2>
            <p>
              Converse agora com nosso time e receba a apresentação completa da
              franquia.
            </p>
          </div>
          <a
            href={waLink(msgApresentacao)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Falar no WhatsApp <IconArrow style={{ width: 18, height: 18 }} />
          </a>
        </div>
      </section>
    </>
  );
}
