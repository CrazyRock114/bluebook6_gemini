"use client";

import React, { useState } from "react";
import MathView from "@/components/MathView";
import { Table, CheckCircle2, Sparkles, Filter, RefreshCw, Eye } from "lucide-react";

export default function ResidueMatrixVisualizer() {
  const [modulus, setModulus] = useState<number>(6);
  const [multiplier, setMultiplier] = useState<number>(5);
  const [highlightCoprime, setHighlightCoprime] = useState<boolean>(true);

  // GCD
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

  // Mod classes: [0, 1, ..., m-1]
  const classes = Array.from({ length: modulus }, (_, i) => {
    const isCoprime = gcd(i, modulus) === 1;
    // Samples: i, i + m, i + 2m, i + 3m
    const samples = [i, i + modulus, i + 2 * modulus, i + 3 * modulus];
    const transformed = (i * multiplier) % modulus;
    return {
      residue: i,
      isCoprime,
      samples,
      transformed
    };
  });

  const coprimeCount = classes.filter((c) => c.isCoprime).length; // Euler phi(m)
  const isMultiplierCoprime = gcd(multiplier, modulus) === 1;

  // Check if transformed set is still a complete residue system
  const transformedSet = new Set(classes.map((c) => c.transformed));
  const isStillComplete = transformedSet.size === modulus;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-fuchsia-600/20 text-fuchsia-400 border border-fuchsia-500/30">
            <Table className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              剩余类矩阵与完全/简化剩余系探索器 (Residue Systems)
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20 font-mono">
                第 2.2 讲核心
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              探究模 m 整数划分、欧拉函数 <MathView math={`\\varphi(m)`} /> 简化剩余系，以及乘法线性置换保完系定理
            </p>
          </div>
        </div>

        {/* Quick Moduli Presets */}
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-slate-400 font-mono text-[11px] mr-1">模数预设:</span>
          {[4, 6, 8, 10, 12].map((m) => (
            <button
              key={m}
              onClick={() => {
                setModulus(m);
                setMultiplier(m - 1);
              }}
              className={`px-2 py-1 rounded-md text-xs font-mono transition-all ${
                modulus === m
                  ? "bg-fuchsia-600 text-white font-bold"
                  : "bg-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              m={m}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-4">
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="text-slate-300 font-medium">模数 m</span>
                <span className="font-mono text-fuchsia-400 font-bold text-sm">m = {modulus}</span>
              </div>
              <input
                type="range"
                min="3"
                max="16"
                value={modulus}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setModulus(val);
                  if (multiplier >= val) setMultiplier(val - 1);
                }}
                className="w-full accent-fuchsia-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="text-slate-300 font-medium">线性变换乘数 a (检验 ax 是否为完系)</span>
                <span className="font-mono text-cyan-400 font-bold text-sm">a = {multiplier}</span>
              </div>
              <input
                type="range"
                min="1"
                max={modulus}
                value={multiplier}
                onChange={(e) => setMultiplier(Number(e.target.value))}
                className="w-full accent-cyan-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="text-[11px] font-mono mt-1 text-slate-400">
                gcd({multiplier}, {modulus}) = {gcd(multiplier, modulus)}{" "}
                {isMultiplierCoprime ? " (互质 ✓)" : " (非互质 ✗)"}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={highlightCoprime}
                  onChange={(e) => setHighlightCoprime(e.target.checked)}
                  className="rounded border-slate-700 text-fuchsia-600 focus:ring-0"
                />
                <span>高亮简化剩余系 (互质缩系)</span>
              </label>
            </div>
          </div>

          {/* Theorem Verdict Box */}
          <div className="bg-fuchsia-950/20 border border-fuchsia-900/40 p-4 rounded-xl text-xs space-y-2">
            <div className="font-bold text-fuchsia-300 flex items-center justify-between">
              <span>欧拉函数与保完系定理</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 font-mono">
                φ({modulus}) = {coprimeCount}
              </span>
            </div>

            <p className="text-slate-300 text-[11px] leading-relaxed">
              模 {modulus} 下互质的剩余类个数即欧拉函数值{" "}
              <MathView math={`\\varphi(${modulus}) = ${coprimeCount}`} />。
            </p>

            <div className="pt-2 border-t border-fuchsia-900/40 font-mono text-[11px]">
              <div className="text-white">
                变换集合 &#123;{classes.map((c) => c.transformed).join(", ")}&#125;
              </div>
              <div className={isStillComplete ? "text-emerald-400 mt-1" : "text-rose-400 mt-1"}>
                {isStillComplete
                  ? `✓ 因为 gcd(${multiplier}, ${modulus}) = 1，置换后仍然构成完全剩余系！`
                  : `✗ 坍缩！因为 gcd(${multiplier}, ${modulus}) > 1，产生重复余数，丧失完系性质！`}
              </div>
            </div>
          </div>
        </div>

        {/* Residue Class Grid */}
        <div className="lg:col-span-8 bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span>模 {modulus} 剩余类等价分割矩阵 (Z / mZ)</span>
            <span className="font-mono text-[11px] text-fuchsia-400">{modulus} 个等价类</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {classes.map((c) => {
              const isHighlight = highlightCoprime && c.isCoprime;
              return (
                <div
                  key={c.residue}
                  className={`p-3 rounded-xl border transition-all ${
                    isHighlight
                      ? "bg-fuchsia-950/40 border-fuchsia-600 shadow-lg shadow-fuchsia-950/20"
                      : "bg-slate-900/80 border-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono font-bold text-sm text-white">
                      类 [{c.residue}]
                    </span>
                    {c.isCoprime && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 font-mono">
                        缩系
                      </span>
                    )}
                  </div>

                  <div className="text-[11px] text-slate-400 font-mono space-y-0.5">
                    <div>代表元素：&#123;{c.samples.join(", ")}...&#125;</div>
                    <div className="text-cyan-400 pt-1 border-t border-slate-800">
                      {multiplier}x 映射余数: {c.transformed}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
