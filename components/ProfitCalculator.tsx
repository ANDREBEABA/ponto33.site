"use client";

import { useState } from "react";
import { brl, franchise, waLink } from "@/lib/site";

type FieldProps = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (v: number) => void;
};

function Field({
  id,
  label,
  value,
  min,
  max,
  step,
  prefix,
  suffix,
  onChange,
}: FieldProps) {
  function clamp(v: number) {
    if (Number.isNaN(v)) return min;
    return Math.min(max, Math.max(min, v));
  }
  return (
    <div className="calc-field">
      <label htmlFor={id}>{label}</label>
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
      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(clamp(Number(e.target.value)))}
      />
    </div>
  );
}

export function ProfitCalculator() {
  const [faturamento, setFaturamento] = useState<number>(
    franchise.faturamentoMedio
  );
  const [margem, setMargem] = useState<number>(franchise.margemPct);
  const [investimento, setInvestimento] = useState<number>(
    franchise.investimento
  );

  const lucroMensal = Math.round((faturamento * margem) / 100);
  const lucroAnual = lucroMensal * 12;
  const payback = lucroMensal > 0 ? Math.ceil(investimento / lucroMensal) : 0;

  return (
    <div className="calc">
      <div className="calc-inputs">
        <Field
          id="calc-faturamento"
          label="Faturamento mensal estimado"
          value={faturamento}
          min={2000}
          max={40000}
          step={100}
          prefix="R$"
          onChange={setFaturamento}
        />
        <Field
          id="calc-margem"
          label="Margem de lucro líquida"
          value={margem}
          min={10}
          max={60}
          step={1}
          suffix="%"
          onChange={setMargem}
        />
        <Field
          id="calc-investimento"
          label="Investimento inicial"
          value={investimento}
          min={40000}
          max={150000}
          step={1000}
          prefix="R$"
          onChange={setInvestimento}
        />
      </div>

      <div className="calc-result" aria-live="polite">
        <div className="calc-result-row">
          <span className="calc-result-label">Lucro mensal estimado</span>
          <span className="calc-result-value">{brl(lucroMensal)}</span>
        </div>
        <div className="calc-result-row">
          <span className="calc-result-label">Lucro anual estimado</span>
          <span className="calc-result-value">{brl(lucroAnual)}</span>
        </div>
        <div className="calc-result-row highlight">
          <span className="calc-result-label">Retorno do investimento</span>
          <span className="calc-result-value">
            {payback > 0 ? `${payback} meses` : "—"}
          </span>
        </div>
        <p className="calc-note">
          Estimativas ilustrativas. Os resultados reais variam conforme o ponto,
          o fluxo de pessoas e os custos da operação.
        </p>
        <a
          className="btn btn-primary"
          href={waLink(
            "Olá! Fiz uma simulação na calculadora e quero falar sobre a franquia Ponto 33."
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Simular com nosso time →
        </a>
      </div>
    </div>
  );
}
