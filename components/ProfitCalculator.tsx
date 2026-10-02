"use client";

import { useState } from "react";
import { brl, franchise, waLink } from "@/lib/site";
import {
  DIAS_MES,
  calcDefaults,
  calcRates,
  locais,
} from "@/lib/calculator";

type FieldProps = {
  id: string;
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  slider?: boolean;
  onChange: (v: number) => void;
};

function Field({
  id,
  label,
  hint,
  value,
  min,
  max,
  step,
  prefix,
  suffix,
  slider,
  onChange,
}: FieldProps) {
  const clamp = (v: number) =>
    Number.isNaN(v) ? min : Math.min(max, Math.max(min, v));

  return (
    <div className="calc-field">
      <label htmlFor={id}>{label}</label>
      {hint && <p className="calc-hint">{hint}</p>}
      <div className="calc-input">
        {prefix && <span className="calc-affix">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(clamp(Number(e.target.value)))}
        />
        {suffix && <span className="calc-affix">{suffix}</span>}
      </div>
      {slider && (
        <input
          type="range"
          aria-label={label}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(clamp(Number(e.target.value)))}
        />
      )}
    </div>
  );
}

function Row({
  label,
  value,
  muted,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className={`calc-line ${muted ? "muted" : ""}`}>
      <span className="calc-line-label">{label}</span>
      <span className="calc-line-value">{value}</span>
    </div>
  );
}

export function ProfitCalculator() {
  const [local, setLocal] = useState<string>("manual");
  const [copos, setCopos] = useState<number>(calcDefaults.copos);
  const [preco, setPreco] = useState<number>(calcDefaults.preco);
  const [aluguel, setAluguel] = useState<number>(calcDefaults.aluguel);
  const [atendimento, setAtendimento] = useState<number>(
    calcDefaults.atendimento
  );

  function onSelectLocal(id: string) {
    setLocal(id);
    const preset = locais.find((l) => l.id === id);
    if (preset?.copos !== undefined) setCopos(preset.copos);
    if (preset?.aluguel !== undefined) setAluguel(preset.aluguel);
  }

  const faturamento = copos * preco * DIAS_MES;
  const cmv = faturamento * calcRates.cmv;
  const impostos = faturamento * calcRates.impostos;
  const royalty = faturamento * calcRates.royalty;
  const marketing = faturamento * calcRates.marketing;
  const bancarias = faturamento * calcRates.bancarias;

  const custos = cmv + impostos + royalty + marketing + bancarias + atendimento + aluguel;
  const lucro = faturamento - custos;
  const investimento = franchise.investimento;
  const payback = lucro > 0 ? investimento / lucro : 0;
  const paybackStr =
    lucro > 0
      ? payback.toLocaleString("pt-BR", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })
      : "—";

  const pct = (r: number) => `${(r * 100).toLocaleString("pt-BR")}%`;

  return (
    <div className="calc">
      {/* -------- inputs -------- */}
      <div className="calc-inputs">
        <h3 className="calc-col-title">Insira os dados do seu negócio</h3>

        <div className="calc-field">
          <label htmlFor="calc-local">Tipo de local</label>
          <p className="calc-hint">
            Selecione para preencher os dados automaticamente (estimativas)
          </p>
          <div className="calc-select">
            <select
              id="calc-local"
              value={local}
              onChange={(e) => onSelectLocal(e.target.value)}
            >
              {locais.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Field
          id="calc-aluguel"
          label="Valor do aluguel (por mês)"
          value={aluguel}
          min={0}
          max={10000}
          step={50}
          prefix="R$"
          onChange={setAluguel}
        />

        <Field
          id="calc-copos"
          label="Copos vendidos por dia"
          value={copos}
          min={10}
          max={200}
          step={1}
          suffix="copos"
          slider
          onChange={setCopos}
        />

        <Field
          id="calc-preco"
          label="Preço médio de venda"
          value={preco}
          min={1}
          max={50}
          step={0.5}
          prefix="R$"
          onChange={setPreco}
        />

        <Field
          id="calc-atendimento"
          label="Atendimento / reposição (mensal)"
          value={atendimento}
          min={0}
          max={10000}
          step={50}
          prefix="R$"
          onChange={setAtendimento}
        />

        <div className="calc-static">
          <span>Valor da unidade (à vista)</span>
          <strong>{brl(investimento)}</strong>
        </div>

        <p className="calc-note">
          Os valores utilizados são estimativas médias. Os resultados podem variar
          de acordo com a sua operação.
        </p>
      </div>

      {/* -------- result -------- */}
      <div className="calc-result" aria-live="polite">
        <h3 className="calc-col-title">Resultado estimado</h3>

        <div className="calc-payback">
          <span className="calc-payback-label">
            Prazo de retorno do investimento
          </span>
          <span className="calc-payback-num">{paybackStr}</span>
          <span className="calc-payback-unit">meses</span>
        </div>

        <div className="calc-breakdown">
          <Row label="Faturamento mensal estimado" value={brl(faturamento)} />
          <Row label={`CMV (${pct(calcRates.cmv)})`} value={brl(cmv)} muted />
          <Row
            label={`Impostos (${pct(calcRates.impostos)})`}
            value={brl(impostos)}
            muted
          />
          <Row
            label={`Royalty (${pct(calcRates.royalty)})`}
            value={brl(royalty)}
            muted
          />
          <Row
            label={`Taxa de Marketing (${pct(calcRates.marketing)})`}
            value={brl(marketing)}
            muted
          />
          <Row label="Taxas bancárias (~1,5%)" value={brl(bancarias)} muted />
          <Row label="Atendimento" value={brl(atendimento)} muted />
          <Row label="Aluguel" value={brl(aluguel)} muted />
          <div className="calc-line total">
            <span className="calc-line-label">Lucro líquido mensal estimado</span>
            <span className="calc-line-value">{brl(lucro)}</span>
          </div>
          <Row label="Investimento total" value={brl(investimento)} muted />
        </div>

        <a
          className="btn btn-primary"
          href={waLink(
            "Olá! Fiz uma simulação na calculadora de rentabilidade e quero falar sobre a franquia Ponto 33."
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar com nosso time →
        </a>
      </div>
    </div>
  );
}
