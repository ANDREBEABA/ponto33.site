import { brl, franchise } from "./site";

// Perguntas em linguagem natural + respostas curtas e factuais (padrão AEO/GEO).
// Usadas tanto no acordeão visível quanto no JSON-LD (FAQPage) — mesma fonte.
export const faqItems: { q: string; a: string }[] = [
  {
    q: "Qual é o modelo de negócio da Ponto 33?",
    a: "A Ponto 33 é uma cafeteria autônoma de autoatendimento (grab & go) operada por franqueados. O cliente escolhe, paga e retira sozinho na estação, sem equipe no balcão. O pagamento é 100% digital e o foco é café de alta qualidade com uma operação enxuta e escalável.",
  },
  {
    q: "Quanto custa uma franquia da Ponto 33?",
    a: `O investimento começa a partir de ${brl(
      franchise.investimento
    )}, incluindo a estação autônoma, a tecnologia de autoatendimento e a padronização da marca. O valor final varia conforme o ponto escolhido e a configuração da unidade. Fale com o nosso time para receber a proposta detalhada.`,
  },
  {
    q: "Qual é o faturamento médio de uma unidade Ponto 33?",
    a: `O faturamento médio é de ${brl(
      franchise.faturamentoMedio,
      true
    )} por mês. É uma média de referência: o resultado real depende do fluxo de pessoas no ponto, da localização e da operação. Pontos de grande circulação tendem a performar acima da média.`,
  },
  {
    q: "Em quanto tempo tenho o retorno do investimento?",
    a: `O retorno do investimento (ROI) acontece em até ${franchise.roiMeses} meses, considerando a operação dentro da média. O prazo varia conforme o faturamento do ponto e os custos locais. Use a calculadora de rentabilidade desta página para simular o seu cenário.`,
  },
  {
    q: "Qual é a margem de lucro da franquia?",
    a: `A margem de lucro chega a até ${franchise.margemPct}% ao mês, o que representa uma lucratividade média de ${brl(
      franchise.lucroMedio,
      true
    )} mensais. Por ser um modelo autônomo, sem equipe no balcão, o custo fixo é baixo e a operação se mantém enxuta.`,
  },
  {
    q: "Preciso contratar funcionários para operar?",
    a: "Não. A Ponto 33 é uma cafeteria autônoma de autoatendimento: o cliente escolhe, paga e retira sozinho na estação. Não há equipe no balcão. A rotina do franqueado se resume à reposição de insumos e ao acompanhamento remoto da unidade.",
  },
  {
    q: "Quanto tempo preciso dedicar ao negócio?",
    a: "Poucas horas por semana. Como a operação é automatizada e monitorada à distância, o franqueado cuida principalmente da reposição de insumos e da gestão. É um modelo ideal para quem busca renda extra ou quer investir sem abrir mão da rotina atual.",
  },
  {
    q: "Onde posso instalar uma unidade Ponto 33?",
    a: "Em locais de grande circulação: shoppings, prédios comerciais e residenciais, academias, hospitais, faculdades e estações. A estação é compacta e ocupa poucos metros quadrados, o que facilita a instalação em espaços que outras cafeterias não conseguem aproveitar.",
  },
  {
    q: "Como funciona o pagamento na estação?",
    a: "O pagamento é 100% digital e sem contato: Pix, cartão ou aproximação, direto na tela de autoatendimento. Não há dinheiro em espécie nem troco, o que torna a operação mais segura, rápida e simples de administrar.",
  },
  {
    q: "Que suporte a Ponto 33 oferece ao franqueado?",
    a: "A franqueadora cuida da instalação, da padronização visual da marca e da tecnologia de autoatendimento e monitoramento. Além disso, há acompanhamento contínuo da operação. Você recebe o modelo pronto para operar e foca no desempenho do seu ponto.",
  },
];
