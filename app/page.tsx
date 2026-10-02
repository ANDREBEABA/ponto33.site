import Image from "next/image";
import Link from "next/link";
import { Manifesto } from "@/components/Manifesto";
import {
  IconArrow,
  IconBolt,
  IconCheck,
  IconCoffee,
  IconTrendingUp,
} from "@/components/icons";
import { site, waLink } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero section wrap">
        <div className="hero-split">
          <div>
            <span className="eyebrow">Cafeteria autônoma · autoatendimento</span>
            <h1>
              Seu café,
              <br />
              no seu <span className="g">tempo</span>.
            </h1>
            <p className="lead">
              Autoatendimento de verdade, com café de alta qualidade: escolha,
              posicione o copo, pague e retire em segundos. Sem fila e sem
              espera.
            </p>
            <div className="hero-cta">
              <Link href="/franquias" className="btn btn-primary">
                Quero uma franquia <IconArrow style={{ width: 18, height: 18 }} />
              </Link>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="frame">
              <Image
                src="/img/cup.webp"
                alt="Copo Ponto 33 sobre mármore"
                fill
                priority
                sizes="(max-width: 840px) 100vw, 480px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="hero-badge">
              <span className="d" />
              <div>
                <b>Pronto em ~60s</b>
                <span>do pedido à retirada</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="n">~60s</div>
            <div className="l">Do pedido à retirada</div>
          </div>
          <div className="stat">
            <div className="n">0</div>
            <div className="l">Filas e espera</div>
          </div>
          <div className="stat">
            <div className="n">100%</div>
            <div className="l">Autoatendimento digital</div>
          </div>
        </div>
      </section>

      {/* ---------- MANIFESTO ---------- */}
      <Manifesto
        quote={
          <>
            Mais do que um café servido em segundos, somos o{" "}
            <span className="g">impulso exato</span> para a sua jornada.
          </>
        }
        sub={
          <>
            {site.name}: o café para quem tem <b>pressa</b>, o ponto de avanço
            para quem tem <b>propósito</b>.
          </>
        }
      />

      {/* ---------- COMO FUNCIONA ---------- */}
      <section className="section wrap">
        <div className="section-head center">
          <span className="eyebrow">Como funciona</span>
          <h2>É simples. É rápido. É seu.</h2>
          <p>
            Toda a experiência Ponto 33 foi desenhada para caber na correria do
            dia — da escolha ao primeiro gole.
          </p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="num">01</div>
            <h3>Escolha seu café</h3>
            <p>
              Monte o pedido direto na tela: espresso, coado, com leite ou
              gelado — do seu jeito.
            </p>
          </div>
          <div className="step">
            <div className="num">02</div>
            <h3>Pague na hora</h3>
            <p>
              Pix, aproximação ou cartão. Pagamento 100% digital, sem contato e
              sem troco.
            </p>
          </div>
          <div className="step">
            <div className="num">03</div>
            <h3>Retire e siga</h3>
            <p>
              A estação prepara na hora e avisa quando está pronto. É só pegar e
              aproveitar.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- A ESTAÇÃO ---------- */}
      <section className="section wrap">
        <div className="section-head">
          <span className="eyebrow">A estação Ponto 33</span>
          <h2>Um café completo em poucos metros quadrados.</h2>
        </div>
        <div className="feature-split">
          <div className="shot">
            <Image
              src="/img/kiosk-1.webp"
              alt="Estação autônoma Ponto 33 em shopping"
              fill
              sizes="(max-width: 820px) 100vw, 520px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="fs-body">
            <h3>Autoatendimento do começo ao fim.</h3>
            <p>
              A estação reúne máquina, pagamento e retirada em um balcão compacto
              que funciona sozinho — ideal para shoppings, prédios, academias e
              hospitais.
            </p>
            <ul className="ticks">
              <li>
                <IconCheck /> Ocupa pouco espaço e opera sem equipe no balcão
              </li>
              <li>
                <IconCheck /> Tela intuitiva: escolher, pagar e desfrutar em
                passos simples
              </li>
              <li>
                <IconCheck /> Grãos selecionados e extração consistente em cada
                xícara
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- DIFERENCIAIS ---------- */}
      <section className="section wrap">
        <div className="section-head center">
          <span className="eyebrow">Por que Ponto 33</span>
          <h2>Café bom encontra tecnologia.</h2>
        </div>
        <div className="features">
          <div className="feature">
            <div className="fi">
              <IconCoffee />
            </div>
            <div>
              <h3>Café de alta qualidade</h3>
              <p>Grãos selecionados e extração consistente em cada xícara.</p>
            </div>
          </div>
          <div className="feature">
            <div className="fi">
              <IconBolt />
            </div>
            <div>
              <h3>Rápida por natureza</h3>
              <p>Fluxo automatizado que elimina a fila e respeita o seu tempo.</p>
            </div>
          </div>
          <div className="feature">
            <div className="fi">
              <IconTrendingUp />
            </div>
            <div>
              <h3>Mercado em crescimento</h3>
              <p>O consumo de café cresce no país — um setor em plena expansão.</p>
            </div>
          </div>
          <div className="feature">
            <div className="fi">
              <IconArrow />
            </div>
            <div>
              <h3>Grab &amp; Go</h3>
              <p>Feito para quem está em movimento. Pegou, seguiu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section wrap">
        <div className="band">
          <div>
            <h2>Transforme seu espaço em um Ponto 33.</h2>
            <p>
              Modelo autônomo, enxuto e escalável, em um mercado em plena
              expansão. Descubra como ter a sua unidade.
            </p>
          </div>
          <Link href="/franquias" className="btn btn-primary">
            Conhecer franquias <IconArrow style={{ width: 18, height: 18 }} />
          </Link>
        </div>
      </section>
    </>
  );
}
