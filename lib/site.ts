// Configuração central do site Ponto 33.
// Edite este arquivo para atualizar contatos, links e textos reutilizados.

export const site = {
  name: "Ponto 33",
  tagline: "Café Grab & Go",
  description:
    "Cafeteria autônoma, aberta 24 horas. Autoatendimento rápido: escolha, pague e retire em segundos — sem fila, sem espera.",
  url: "https://ponto33.site",

  contact: {
    phoneDisplay: "(11) 3230-1685",
    // WhatsApp em formato internacional (55 + DDD + número), sem símbolos.
    whatsapp: "551132301685",
    email: "andre@beabadosnegocios.com.br",
    instagramHandle: "@ponto33cafe",
    instagramUrl: "https://instagram.com/ponto33cafe",
  },

  manifesto: {
    quote:
      "Mais do que um café servido em segundos, somos o impulso exato para a sua jornada.",
    sub: "Ponto 33: o café para quem tem pressa, o ponto de avanço para quem tem propósito.",
  },
} as const;

export const nav = [
  { label: "Início", href: "/" },
  { label: "Franquias", href: "/franquias" },
  { label: "Contato", href: "/contato" },
] as const;

// Monta um link de WhatsApp com mensagem opcional pré-preenchida.
export function waLink(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const mailtoLink = `mailto:${site.contact.email}`;
