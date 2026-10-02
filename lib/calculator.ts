// Parâmetros da calculadora de rentabilidade da franquia.
// Edite aqui para ajustar taxas e estimativas por tipo de local.

export const DIAS_MES = 30;

// Taxas aplicadas sobre o faturamento (padrão de mercado, confirmado pela Ponto 33).
export const calcRates = {
  cmv: 0.27, // custo dos produtos vendidos
  impostos: 0.03,
  royalty: 0.08,
  marketing: 0.02,
  bancarias: 0.015, // taxas bancárias / adquirência
} as const;

export type LocalPreset = {
  id: string;
  label: string;
  copos?: number; // copos vendidos por dia (estimativa)
  aluguel?: number; // aluguel mensal estimado
};

// Presets que autopreenchem copos/dia e aluguel. Valores são estimativas médias.
export const locais: LocalPreset[] = [
  { id: "manual", label: "Inserir dados manualmente" },
  { id: "corporativo", label: "Prédio corporativo", copos: 55, aluguel: 900 },
  { id: "residencial", label: "Prédio residencial", copos: 35, aluguel: 600 },
  { id: "academia", label: "Academia", copos: 40, aluguel: 500 },
  { id: "hospital", label: "Hospital / clínica", copos: 70, aluguel: 1200 },
  { id: "faculdade", label: "Faculdade / escola", copos: 60, aluguel: 700 },
  { id: "shopping", label: "Shopping / varejo", copos: 80, aluguel: 1500 },
];

// Defaults iniciais (mesma base da referência de mercado).
export const calcDefaults = {
  copos: 40,
  preco: 8,
  aluguel: 0,
  atendimento: 0,
} as const;
