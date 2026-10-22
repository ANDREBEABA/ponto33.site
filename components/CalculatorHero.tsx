"use client";

import { useState } from "react";
import { brl, franchise, waLink } from "@/lib/site";
import {
  DIAS_MES,
  calcDefaults,
  calcRates,
  locais,
  royaltyFixo,
} from "@/lib/calculator";

function num(v: string, min: number, max: number) {
  const n = Number(v);
  if (Number.isNaN(n)) return min;
  return Math.min(max, Math.max(min, n));
}

export function CalculatorHero() {
  const [local, setLocal] = useState<string>("manual");
  const [copos, setCopos] = useState<number>(calcDefaults.copos);
  const [preco, setPreco] = useState<number>(calcDefaults.preco);
  const [aluguel, setAluguel] = useState<number>(calcDefaults.aluguel);

  function onSelectLocal(id: string) {
    setLocal(id);
    const preset = locais.find((l) => l.id === id);
    if (preset?.copos !== undefined) setCopos(preset.copos);
    if (preset?.aluguel !== undefined) setAluguel(preset.aluguel);
  }

  const faturamento = copos * preco * DIAS_MES;
  const cmv = faturamento * calcRates.cmv;
  const impostos = faturamento * calcRates.impostos;
  const bancarias = faturamento * calcRates.bancarias;
  const royalty = royaltyFixo;

  const custos = cmv + impostos + bancarias + royalty + aluguel;
  const lucro = faturamento - custos;
  const investimento = franchise.investimento;
  const payback = lucro > 0 ? investimento / lucro : 0;
  const paybackStr =
    lucro > 0
      ? `${payback.toLocaleString("pt-BR", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })} meses`
      : "—";

  const coposPct = ((copos - 10) / (200 - 10)) * 100;

  return (
    <div className="calc-lp">
      {/* -------- RESULTADO EM EVIDÊNCIA -------- */}
      <div className="calc-hero-result" aria-live="polite">
        <div className="calc-hero-cap">Lucro líquido estimado</div>
        <div className="calc-hero-big gold-grad">{brl(lucro)}</div>
        <div className="calc-hero-per">por mês</div>
        <div className="calc-chips">
          <div className="calc-chip">
            <div className="k">Retorno em</div>
            <div className="v gold">{paybackStr}</div>
          </div>
          <div className="calc-chip">
            <div className="k">Faturamento / mês</div>
            <div className="v">{brl(faturamento)}</div>
          </div>
          <div className="calc-chip">
            <div className="k">Investimento</div>
            <div className="v">{brl(investimento)}</div>
          </div>
        </div>
      </div>

      {/* -------- INPUTS -------- */}
      <div className="calc-lp-inputs">
        <h2 className="calc-col-title">Simule com os dados do seu ponto</h2>
        <p className="calc-hint">
          Comece escolhendo um tipo de local ou ajuste manualmente.
        </p>

        <div className="calc-lp-grid">
          <div className="calc-field full">
            <label htmlFor="lp-local">Tipo de local</label>
            <div className="calc-select">
              <select
                id="lp-local"
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

          <div className="calc-field">
            <label htmlFor="lp-aluguel">Valor do aluguel (por mês)</label>
            <div className="calc-input">
              <span className="calc-affix">R$</span>
              <input
                id="lp-aluguel"
                type="number"
                inputMode="numeric"
                min={0}
                max={10000}
                step={50}
                value={aluguel}
                onChange={(e) => setAluguel(num(e.target.value, 0, 10000))}
              />
            </div>
          </div>

          <div className="calc-field">
            <label htmlFor="lp-preco">Preço médio de venda</label>
            <div className="calc-input">
              <span className="calc-affix">R$</span>
              <input
                id="lp-preco"
                type="number"
                inputMode="numeric"
                min={1}
                max={50}
                step={0.01}
                value={preco}
                onChange={(e) => setPreco(num(e.target.value, 1, 50))}
              />
            </div>
          </div>

          <div className="calc-field full">
            <label htmlFor="lp-copos">
              Copos vendidos por dia — <span className="g">{copos}</span>
            </label>
            <div className="calc-input">
              <input
                id="lp-copos"
                type="number"
                inputMode="numeric"
                min={10}
                max={200}
                step={1}
                value={copos}
                onChange={(e) => setCopos(num(e.target.value, 10, 200))}
              />
              <span className="calc-affix">copos</span>
            </div>
            <input
              type="range"
              aria-label="Copos vendidos por dia"
              min={10}
              max={200}
              step={1}
              value={copos}
              onChange={(e) => setCopos(num(e.target.value, 10, 200))}
              style={{ ["--fill" as string]: `${coposPct}%` }}
              className="calc-range"
            />
          </div>
        </div>

        <p className="calc-note">
          Valores estimados com base nas médias da rede. Os resultados reais
          variam conforme o ponto e o fluxo de pessoas.
        </p>
      </div>

      {/* -------- DETALHES -------- */}
      <details className="calc-lp-details">
        <summary>Ver detalhes do cálculo</summary>
        <div className="calc-breakdown">
          <div className="calc-line">
            <span className="calc-line-label">Faturamento mensal estimado</span>
            <span className="calc-line-value">{brl(faturamento)}</span>
          </div>
          <div className="calc-line muted">
            <span className="calc-line-label">CMV (27%)</span>
            <span className="calc-line-value">{brl(cmv)}</span>
          </div>
          <div className="calc-line muted">
            <span className="calc-line-label">Impostos (3%)</span>
            <span className="calc-line-value">{brl(impostos)}</span>
          </div>
          <div className="calc-line muted">
            <span className="calc-line-label">Royalty (fixo)</span>
            <span className="calc-line-value">{brl(royalty)}</span>
          </div>
          <div className="calc-line muted">
            <span className="calc-line-label">Taxa de Marketing</span>
            <span className="calc-line-value g">Não cobramos</span>
          </div>
          <div className="calc-line muted">
            <span className="calc-line-label">Taxas bancárias (~1,5%)</span>
            <span className="calc-line-value">{brl(bancarias)}</span>
          </div>
          <div className="calc-line muted">
            <span className="calc-line-label">Aluguel</span>
            <span className="calc-line-value">{brl(aluguel)}</span>
          </div>
          <div className="calc-line total">
            <span className="calc-line-label">Lucro líquido mensal estimado</span>
            <span className="calc-line-value">{brl(lucro)}</span>
          </div>
          <div className="calc-line muted">
            <span className="calc-line-label">Investimento total</span>
            <span className="calc-line-value">{brl(investimento)}</span>
          </div>
        </div>
      </details>

      <div className="calc-lp-cta">
        <a
          className="btn btn-wa btn-lg"
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar com nosso time no WhatsApp →
        </a>
      </div>
    </div>
  );
}
