"use client";

import React, { useState } from "react";
import MathView from "@/components/MathView";
import { Zap, Play, RotateCcw, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function FermatLittleTheoremVisualizer() {
  const [prime, setPrime] = useState<number>(7);
  const [base, setBase] = useState<number>(3);

  // Compute powers a^1, a^2, ..., a^(p-1) mod p
  const powers = [];
  let curr = 1;
  for (let k = 1; k <= prime - 1; k++) {
    curr = (curr * base) % prime;
    powers.push({
      power: k,
      val: Math.pow(base, k),
      modVal: curr
    });
  }

  // Find order (smallest k such that a^k = 1 mod p)
  const order = powers.findIndex((p) => p.modVal === 1) + 1;
  const isFermatVerified = powers[powers.length - 1]?.modVal === 1;

  const primePresets = [
    { p: 5, a: 2 },
    { p: 7, a: 3 },
    { p: 11, a: 2 },
    { p: 13, a: 3 }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-rose-600/20 text-rose-400 border border-rose-500/30">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              费马小定理周期算子与幂次循环仪 (Fermat Operator)
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-mono">
                第 2.3 讲核心
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              验证质数模下余数终极守恒：若 <MathView math={`p \\nmid a`} />，则 <MathView math={`a^{p-1} \\equiv 1 \\pmod p`} />
            </p>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-slate-400 font-mono text-[11px] mr-1">预设检验:</span>
          {primePresets.map((pr) => (
            <button
              key={`${pr.p}-${pr.a}`}
              onClick={() => {
                setPrime(pr.p);
                setBase(pr.a);
              }}
              className={`px-2 py-1 rounded-md text-xs font-mono transition-all ${
                prime === pr.p && base === pr.a
                  ? "bg-rose-600 text-white font-bold"
                  : "bg-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              p={pr.p}, a={pr.a}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-4">
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="text-slate-300 font-medium">质数模 p (Prime Modulus)</span>
                <span className="font-mono text-rose-400 font-bold text-sm">p = {prime}</span>
              </div>
              <div className="flex gap-2">
                {[3, 5, 7, 11, 13, 17].map((pVal) => (
                  <button
                    key={pVal}
                    onClick={() => {
                      setPrime(pVal);
                      if (base >= pVal) setBase(2);
                    }}
                    className={`flex-1 py-1 rounded text-xs font-mono border transition-all ${
                      prime === pVal
                        ? "bg-rose-600/30 border-rose-500 text-rose-300 font-bold"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {pVal}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="text-slate-300 font-medium">底数 a (与 p 互质)</span>
                <span className="font-mono text-amber-400 font-bold text-sm">a = {base}</span>
              </div>
              <input
                type="range"
                min="2"
                max={prime - 1}
                value={base}
                onChange={(e) => setBase(Number(e.target.value))}
                className="w-full accent-amber-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>2</span>
                <span>p - 1 ({prime - 1})</span>
              </div>
            </div>
          </div>

          {/* Theorem Conclusion Card */}
          <div className="bg-rose-950/20 border border-rose-900/40 p-4 rounded-xl text-xs space-y-2">
            <div className="font-bold text-rose-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                费马小定理闭环结论
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">
                {isFermatVerified ? "严格成立 ✓" : "计算中"}
              </span>
            </div>

            <div className="font-mono text-sm text-white bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 text-center">
              <MathView math={`${base}^{${prime - 1}} \\equiv 1 \\pmod{${prime}}`} />
            </div>

            <div className="text-[11px] text-slate-300 space-y-1 font-mono pt-1 border-t border-rose-900/40">
              <div>最小正周期（阶 d）：d = {order}（必然整除 p-1 = {prime - 1}）</div>
              <div className="text-slate-400">
                余数循环节长度：{order} 步形成首尾相连的有向闭环！
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Trajectory Grid */}
        <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span>幂次计算演变序列 (Powers mod p)</span>
            <span className="font-mono text-[11px] text-rose-400">{prime - 1} 步演进</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {powers.map((item) => {
              const isFinal = item.power === prime - 1;
              const isOne = item.modVal === 1;
              return (
                <div
                  key={item.power}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    isFinal
                      ? "bg-emerald-950/40 border-emerald-700 shadow-lg shadow-emerald-950/20"
                      : isOne
                      ? "bg-amber-950/40 border-amber-800"
                      : "bg-slate-900/80 border-slate-800"
                  }`}
                >
                  <div className="text-[11px] text-slate-400 font-mono">
                    {base}<sup>{item.power}</sup>
                  </div>
                  <div className="text-base font-extrabold font-mono mt-1 flex items-center justify-center gap-1">
                    <span className={isOne ? "text-amber-300" : "text-white"}>
                      ≡ {item.modVal}
                    </span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      (mod {prime})
                    </span>
                  </div>
                  {isFinal && (
                    <div className="mt-1 text-[10px] text-emerald-400 font-semibold flex items-center justify-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" /> 终点归 1
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
