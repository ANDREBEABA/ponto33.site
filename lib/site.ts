// Configuração central do site Ponto 33.
// Edite este arquivo para atualizar contatos, links e textos reutilizados.

export const site = {
  name: "Ponto 33",
  tagline: "Café Grab & Go",
  holding: "Holding BEABA dos NEGÓCIOS",
  description:
    "Cafeteria autônoma de autoatendimento com café de alta qualidade. Escolha, pague e retire em segundos — sem fila e sem espera.",
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

// Números oficiais da franquia (fonte única — usados nos stats, calculadora e FAQ).
export const franchise = {
  investimento: 70000, // a partir de
  faturamentoMedio: 10349, // por mês
  lucroMedio: 3881, // por mês
  roiMeses: 16, // retorno em até
  margemPct: 37, // margem de lucro até
} as const;

// Formata um valor em Reais (pt-BR). Ex.: brl(70000) => "R$ 70.000".
export function brl(value: number, withCents = false): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: withCents ? 2 : 0,
    maximumFractionDigits: withCents ? 2 : 0,
  }).format(value);
}

export const nav = [
  { label: "Início", href: "/" },
  { label: "Franquias", href: "/franquias" },
  { label: "Ofereça um ponto", href: "/ofereca-um-ponto" },
  { label: "Contato", href: "/contato" },
] as const;

// Monta um link de WhatsApp com mensagem opcional pré-preenchida.
export function waLink(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const mailtoLink = `mailto:${site.contact.email}`;
