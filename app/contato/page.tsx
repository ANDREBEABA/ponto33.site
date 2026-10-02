import type { Metadata } from "next";
import { ContactClient } from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Ponto 33 por WhatsApp, e-mail ou Instagram. Dúvidas, parcerias, imprensa ou interesse em franquia.",
};

export default function ContatoPage() {
  return (
    <>
      <section className="hero section wrap">
        <span className="eyebrow">Fale com a gente</span>
        <h1>
          Vamos <span className="g">conversar</span>.
        </h1>
        <p className="lead" style={{ marginTop: 22 }}>
          Dúvidas, parcerias, imprensa ou interesse em franquia — escolha o canal
          que preferir. A gente responde rápido.
        </p>
      </section>

      <section className="wrap" style={{ paddingBottom: "clamp(54px,8vw,100px)" }}>
        <ContactClient />
      </section>
    </>
  );
}
