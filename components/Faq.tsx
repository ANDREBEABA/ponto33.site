import { faqItems } from "@/lib/faq";

// Seção de FAQ acessível (details/summary) + dados estruturados FAQPage (JSON-LD)
// gerados a partir do MESMO array — otimizado para GEO/AEO.
export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="section wrap" id="faq">
      <div className="section-head center">
        <span className="eyebrow">Perguntas frequentes</span>
        <h2>Tudo o que você precisa saber antes de investir.</h2>
      </div>

      <div className="faq">
        {faqItems.map((item, i) => (
          <details className="faq-item" key={i}>
            <summary>
              <h3>{item.q}</h3>
              <span className="faq-icon" aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>

      {/* Dados estruturados para buscadores e motores de resposta (AEO/GEO). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
