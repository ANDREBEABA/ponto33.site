import type { Metadata } from "next";
import Image from "next/image";
import { PontoForm } from "@/components/PontoForm";
import {
  IconArrow,
  IconBolt,
  IconCoffee,
  IconMoney,
  IconUsers,
} from "@/components/icons";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ofereça um ponto",
  description:
    "Tem um espaço? Ofereça ou indique um ponto para instalar uma cafeteria autônoma Ponto 33. Sem operação para você — nós cuidamos de tudo.",
};

export default function OferecaUmPontoPage() {
  return (
    <div className="page-light">
      {/* ---------- HERO ---------- */}
      <section className="hero section wrap">
        <div className="hero-split">
          <div>
            <span className="eyebrow">Ofereça um ponto</span>
            <h1>
              Tem um espaço? Leve uma <span className="g">Ponto 33</span> para
              ele.
            </h1>
            <p className="lead">
              Transforme um cantinho do seu prédio, academia, hospital ou
              faculdade em uma cafeteria autônoma. Você indica o ponto, a gente
              avalia e cuida de tudo — sem operação para você.
            </p>
            <div className="hero-cta">
              <a href="#form" className="btn btn-primary">
                Oferecer meu ponto <IconArrow style={{ width: 18, height: 18 }} />
              </a>
              <a
                href={waLink("Olá! Tenho um ponto para a Ponto 33.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="frame" style={{ aspectRatio: "4 / 3" }}>
              <Image
                src="/img/kiosk-3.webp"
                alt="Quiosque autônomo Ponto 33 em shopping"
                fill
                priority
                sizes="(max-width: 840px) 100vw, 520px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- POR QUE OFERECER ---------- */}
      <section className="section wrap">
        <div className="section-head center">
          <span className="eyebrow">Por que oferecer</span>
          <h2>Um café no seu espaço, trabalhando a seu favor.</h2>
        </div>
        <div className="features">
          <div className="feature">
            <div className="fi">
              <IconMoney />
            </div>
            <div>
              <h3>Nova fonte de renda</h3>
              <p>Rentabilize um espaço ocioso com uma parceria simples.</p>
            </div>
          </div>
          <div className="feature">
            <div className="fi">
              <IconUsers />
            </div>
            <div>
              <h3>Sem operação pra você</h3>
              <p>Modelo autônomo: nada de equipe, estoque ou gestão do seu lado.</p>
            </div>
          </div>
          <div className="feature">
            <div className="fi">
              <IconBolt />
            </div>
            <div>
              <h3>Instalação simples</h3>
              <p>A estação é compacta e chega pronta para operar.</p>
            </div>
          </div>
          <div className="feature">
            <div className="fi">
              <IconCoffee />
            </div>
            <div>
              <h3>Comodidade no local</h3>
              <p>Café de alta qualidade à disposição de quem circula no espaço.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- COMO FUNCIONA ---------- */}
      <section className="section wrap">
        <div className="section-head center">
          <span className="eyebrow">Como funciona</span>
          <h2>Do seu ponto à xícara, em 3 passos.</h2>
        </div>
        <div className="steps">
          <div className="step">
            <div className="num">01</div>
            <h3>Você indica o ponto</h3>
            <p>Preencha o formulário com os dados do local. Leva menos de 2 minutos.</p>
          </div>
          <div className="step">
            <div className="num">02</div>
            <h3>A gente avalia</h3>
            <p>Analisamos a viabilidade e o potencial do ponto e retornamos para você.</p>
          </div>
          <div className="step">
            <div className="num">03</div>
            <h3>Instalamos</h3>
            <p>Fechada a parceria, cuidamos da instalação e da operação da unidade.</p>
          </div>
        </div>
      </section>

      {/* ---------- INDIQUE E GANHE ---------- */}
      <section className="section wrap">
        <div className="band">
          <div>
            <span className="band-eyebrow">Indique e ganhe</span>
            <h2>Indique um ponto e ganhe até R$ 500.</h2>
            <p>
              Indicou um local que virou uma unidade Ponto 33? Você recebe um
              prêmio de <strong>até R$ 500,00</strong> — pago após a formalização
              com o ponto indicado.
            </p>
          </div>
          <a href="#form" className="btn btn-primary">
            Indicar um ponto <IconArrow style={{ width: 18, height: 18 }} />
          </a>
        </div>
      </section>

      {/* ---------- FORMULÁRIO ---------- */}
      <section className="section wrap" id="form">
        <div className="section-head center">
          <span className="eyebrow">Cadastre seu ponto</span>
          <h2>Conte pra gente sobre o local.</h2>
          <p>
            Ao enviar, abrimos o WhatsApp com os dados já preenchidos para você
            confirmar.
          </p>
        </div>
        <div className="form-wrap">
          <PontoForm />
        </div>
      </section>
    </div>
  );
}
