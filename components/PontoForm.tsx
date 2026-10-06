"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";
import { locais } from "@/lib/calculator";

const perfis = [
  { label: "Tenho um espaço", value: "Dono/responsável pelo espaço" },
  { label: "Estou indicando um ponto", value: "Indicação de ponto" },
];

const fluxos = [
  "Baixo — até 500/dia",
  "Médio — 500 a 2.000/dia",
  "Alto — mais de 2.000/dia",
];

// Tipos de local reutilizados da calculadora (sem a opção "manual").
const tipos = locais.filter((l) => l.id !== "manual").map((l) => l.label);

export function PontoForm() {
  const [perfil, setPerfil] = useState(perfis[0].value);
  const [nome, setNome] = useState("");
  const [zap, setZap] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("");
  const [cidade, setCidade] = useState("");
  const [fluxo, setFluxo] = useState("");
  const [detalhes, setDetalhes] = useState("");
  const [erro, setErro] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !zap.trim() || !tipo || !cidade.trim()) {
      setErro("Preencha nome, WhatsApp, tipo de local e cidade.");
      return;
    }
    setErro("");
    const linhas = [
      "Olá! Quero oferecer/indicar um ponto para a Ponto 33.",
      "",
      `• Perfil: ${perfil}`,
      `• Nome: ${nome.trim()}`,
      `• WhatsApp: ${zap.trim()}`,
      email.trim() ? `• E-mail: ${email.trim()}` : null,
      `• Tipo de local: ${tipo}`,
      `• Cidade/UF: ${cidade.trim()}`,
      fluxo ? `• Fluxo: ${fluxo}` : null,
      detalhes.trim() ? `• Detalhes: ${detalhes.trim()}` : null,
    ].filter(Boolean) as string[];
    window.open(waLink(linhas.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="form" onSubmit={enviar} noValidate>
      <div className="form-field">
        <label>
          Você é <span className="req">*</span>
        </label>
        <div className="pills">
          {perfis.map((p) => (
            <button
              key={p.value}
              type="button"
              className={`pill ${perfil === p.value ? "active" : ""}`}
              onClick={() => setPerfil(p.value)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="form-grid2">
        <div className="form-field">
          <label htmlFor="pf-nome">
            Nome <span className="req">*</span>
          </label>
          <input
            id="pf-nome"
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="pf-zap">
            WhatsApp / telefone <span className="req">*</span>
          </label>
          <input
            id="pf-zap"
            type="tel"
            inputMode="tel"
            placeholder="(11) 90000-0000"
            value={zap}
            onChange={(e) => setZap(e.target.value)}
          />
        </div>
      </div>

      <div className="form-grid2">
        <div className="form-field">
          <label htmlFor="pf-email">E-mail</label>
          <input
            id="pf-email"
            type="email"
            placeholder="voce@email.com (opcional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="pf-tipo">
            Tipo de local <span className="req">*</span>
          </label>
          <select
            id="pf-tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="">Selecione…</option>
            {tipos.map((t) => (
              <option key={t}>{t}</option>
            ))}
            <option>Outro</option>
          </select>
        </div>
      </div>

      <div className="form-grid2">
        <div className="form-field">
          <label htmlFor="pf-cidade">
            Cidade / UF <span className="req">*</span>
          </label>
          <input
            id="pf-cidade"
            type="text"
            placeholder="São Paulo / SP"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="pf-fluxo">Fluxo de pessoas por dia</label>
          <select
            id="pf-fluxo"
            value={fluxo}
            onChange={(e) => setFluxo(e.target.value)}
          >
            <option value="">Não sei estimar</option>
            {fluxos.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="pf-detalhes">Detalhes do ponto</label>
        <textarea
          id="pf-detalhes"
          placeholder="Onde fica, espaço disponível, horário de funcionamento do local… (opcional)"
          value={detalhes}
          onChange={(e) => setDetalhes(e.target.value)}
        />
      </div>

      <div className="form-foot">
        {erro && (
          <p className="form-err" role="alert">
            {erro}
          </p>
        )}
        <button type="submit" className="btn btn-wa btn-lg form-submit">
          Enviar pelo WhatsApp →
        </button>
        <p className="form-note">
          Seus dados vão direto para o nosso WhatsApp. Não compartilhamos com
          terceiros.
        </p>
      </div>
    </form>
  );
}
