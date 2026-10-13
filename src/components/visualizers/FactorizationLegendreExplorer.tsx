"use client";

import React, { useState, useMemo } from "react";
import { Trees, Calculator, PieChart, Sparkles } from "lucide-react";
import MathView from "@/components/MathView";

export default function FactorizationLegendreExplorer() {
  const [numN, setNumN] = useState<number>(360);
  const [legendreN, setLegendreN] = useState<number>(100);
  const [legendreP, setLegendreP] = useState<number>(5);
  const [activeTab, setActiveTab] = useState<"factor" | "legendre">("factor");

  // Prime factorization of numN
  const { primeFactors, divisors, tau, sigma, formulaLatex } = useMemo(() => {
    let temp = Math.max(2, Math.abs(numN));
    const factors: { prime: number; exp: number }[] = [];

    for (let p = 2; p * p <= temp; p++) {
      if (temp % p === 0) {
        let count = 0;
        while (temp % p === 0) {
          count++;
          temp = Math.floor(temp / p);
        }
        factors.push({ prime: p, exp: count });
      }
    }
    if (temp > 1) {
      factors.push({ prime: temp, exp: 1 });
    }

    // Generate all divisors
    let allDivs = [1];
    for (const f of factors) {
      const nextDivs: number[] = [];
      let pPower = 1;
      for (let i = 0; i <= f.exp; i++) {
        for (const d of allDivs) {
          nextDivs.push(d * pPower);
        }
        pPower *= f.prime;
      }
      allDivs = nextDivs;
    }
    allDivs.sort((a, b) => a - b);

    // Tau: number of divisors
    const countTau = factors.reduce((acc, f) => acc * (f.exp + 1), 1);
    // Sigma: sum of divisors
    const sumSigma = allDivs.reduce((a, b) => a + b, 0);

    // LaTeX formula for factorization
    const latexStr = factors.map((f) => (f.exp === 1 ? `${f.prime}` : `${f.prime}^{${f.exp}}`)).join(" \\times ");

    return {
      primeFactors: factors,
      divisors: allDivs,
      tau: countTau,
      sigma: sumSigma,
      formulaLatex: latexStr || `${numN}`,
    };
  }, [numN]);

  // Legendre formula calculation
  const legendreSteps = useMemo(() => {
    const steps: { k: number; power: number; quotient: number }[] = [];
    let power = legendreP;
    let k = 1;
    let total = 0;

    while (power <= legendreN) {
      const q = Math.floor(legendreN / power);
      total += q;
      steps.push({ k, power, quotient: q });
      power *= legendreP;
      k++;
    }

    return { steps, total };
  }, [legendreN, legendreP]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl text-slate-100">
      {/* Title */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30">
              组件 4 · 算术基本定理
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white">
              质因数分解树、约数仪表盘与勒让德阶梯
            </h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            探究定理 7~10：唯一分解式、因数个数函数 <MathView math="d(n)" /> 与阶乘幂次 <MathView math="v_p(n!)" />
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab("factor")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === "factor"
                ? "bg-purple-600 text-white shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Trees className="w-3.5 h-3.5" />
            质因数分解与约数
          </button>
          <button
            onClick={() => setActiveTab("legendre")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === "legendre"
                ? "bg-purple-600 text-white shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            勒让德阶乘阶梯
          </button>
        </div>
      </div>

      {activeTab === "factor" ? (
        <>
          {/* Inputs & Quick Presets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-slate-950/60 p-5 rounded-xl border border-slate-800">
            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1">
                待分解正整数 <MathView math="n" /> :
              </label>
              <input
                type="number"
                min="2"
                max="100000"
                value={numN}
                onChange={(e) => setNumN(Math.max(2, parseInt(e.target.value) || 2))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-purple-500 text-sm"
              />
            </div>

            <div className="flex flex-col justify-end">
              <span className="text-xs text-slate-500 mb-1.5">竞赛高频经典数:</span>
              <div className="flex flex-wrap gap-2">
                {[180, 360, 2024, 2520].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setNumN(preset)}
                    className="px-2.5 py-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700 transition-colors"
                  >
                    n = {preset}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Canonical Factorization Banner */}
          <div className="p-4 bg-purple-950/30 border border-purple-500/40 rounded-xl mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs text-purple-300 font-semibold uppercase tracking-wider block">
                标准素因数分解式 (Canonical Prime Factorization)
              </span>
              <div className="text-xl font-mono font-bold text-white mt-1">
                {numN} = <MathView math={formulaLatex} />
              </div>
            </div>

            <div className="flex gap-2">
              {primeFactors.map((f) => (
                <div
                  key={f.prime}
                  className="px-3 py-1.5 bg-slate-900 border border-purple-500/50 rounded-lg text-center"
                >
                  <div className="text-xs font-bold text-purple-300 font-mono">
                    素因子 {f.prime}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    指数 <MathView math={`a = ${f.exp}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divisor Dashboard Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block">
                正因数个数 <MathView math="d(n) = \prod (a_i + 1)" /> :
              </span>
              <span className="text-2xl font-mono font-bold text-emerald-400 mt-1 block">
                {tau} 个因数
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                公式: {primeFactors.map((f) => `(${f.exp}+1)`).join(" × ")} = {tau}
              </span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block">
                正因数之和 <MathView math="\sigma(n)" /> :
              </span>
              <span className="text-2xl font-mono font-bold text-blue-400 mt-1 block">
                {sigma}
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                几何级数展开乘积
              </span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block">
                所有正因数之积 <MathView math="\prod d_i = n^{d(n)/2}" /> :
              </span>
              <span className="text-lg font-mono font-bold text-purple-300 mt-1 block truncate">
                {numN}^{tau / 2}
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                对称配对乘积定理
              </span>
            </div>
          </div>

          {/* Divisor Grid */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-300 uppercase">
                所有正因数列阵 ({tau} 个因数，首尾成对相乘等于 {numN}) :
              </span>
            </div>
            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2 bg-slate-900/60 rounded-lg">
              {divisors.map((d, idx) => (
                <span
                  key={d}
                  className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded text-xs font-mono font-semibold text-slate-200"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Legendre Formula View */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/60 p-5 rounded-xl border border-slate-800">
            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1">
                阶乘基数 <MathView math="n!" /> :
              </label>
              <input
                type="number"
                min="5"
                max="1000"
                value={legendreN}
                onChange={(e) => setLegendreN(Math.max(2, parseInt(e.target.value) || 2))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-purple-500 text-sm"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">
                如：100 代表考查 100!
              </span>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1">
                目标素数 <MathView math="p" /> :
              </label>
              <select
                value={legendreP}
                onChange={(e) => setLegendreP(parseInt(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-purple-500 text-sm"
              >
                {[2, 3, 5, 7, 11, 13, 17].map((p) => (
                  <option key={p} value={p}>
                    素数 p = {p}
                  </option>
                ))}
              </select>
              <span className="text-[11px] text-slate-500 mt-1 block">
                若选 p=5，可直接算出末尾连续 0 的个数！
              </span>
            </div>
          </div>

          {/* Legendre Step Table */}
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
            <span className="text-xs font-semibold text-slate-300 block mb-3">
              勒让德分层计数阶梯：<MathView math={`v_{${legendreP}}(${legendreN}!) = \\sum \\lfloor ${legendreN} / ${legendreP}^k \\rfloor`} />
            </span>

            <div className="space-y-2 font-mono text-xs">
              {legendreSteps.steps.map((s) => (
                <div
                  key={s.k}
                  className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800"
                >
                  <span className="text-purple-300 font-bold">
                    第 {s.k} 层 (<MathView math={`p^{${s.k}} = ${s.power}`} /> 的倍数):
                  </span>
                  <span className="text-slate-300">
                    ⌊ {legendreN} ÷ {s.power} ⌋ ={" "}
                    <strong className="text-emerald-400 text-sm">{s.quotient}</strong> 个
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-purple-950/40 border border-purple-500/40 rounded-xl flex items-center justify-between text-xs">
              <div>
                <span className="text-purple-300 font-bold text-sm">
                  累加最高幂次结果：
                </span>
                <span className="font-mono text-base font-bold text-white ml-2">
                  <MathView math={`v_{${legendreP}}(${legendreN}!) = ${legendreSteps.total}`} />
                </span>
              </div>
              {legendreP === 5 && (
                <span className="text-amber-400 font-semibold">
                  🚀 结论：{legendreN}! 的末尾共有 {legendreSteps.total} 个连续的 0！
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
