"use client";

import React, { useState } from "react";
import MathView from "@/components/MathView";
import { Fingerprint, CheckCircle2, XCircle, Search, HelpCircle, ShieldAlert, Sparkles } from "lucide-react";

export default function SquareModFingerprintVisualizer() {
  const [testNumber, setTestNumber] = useState<number>(2026);
  const [expressionType, setExpressionType] = useState<"direct" | "algebraic">("direct");
  const [algebraicN, setAlgebraicN] = useState<number>(5);

  // Quadratic residues sets for common moduli:
  const modRules = [
    { mod: 3, allowed: [0, 1], name: "模 3 判据", desc: "任何平方数模 3 只能余 0 或 1，绝不可能余 2" },
    { mod: 4, allowed: [0, 1], name: "模 4 判据", desc: "任何平方数模 4 只能余 0 或 1，绝不可能余 2 或 3" },
    { mod: 5, allowed: [0, 1, 4], name: "模 5 判据", desc: "任何平方数模 5 只能余 0, 1, 4，绝不可能余 2 或 3" },
    { mod: 8, allowed: [0, 1, 4], name: "模 8 判据", desc: "奇数的平方模 8 必余 1；偶数的平方模 8 只能余 0 或 4" },
    { mod: 10, allowed: [0, 1, 4, 5, 6, 9], name: "个位数判据", desc: "平方数个位数必为 0, 1, 4, 5, 6, 9，绝不可能为 2, 3, 7, 8" }
  ];

  // Evaluate number or algebraic expression: e.g. 3n + 2, 4n + 3, n^2 + 2, etc.
  const evalValue = expressionType === "direct" ? testNumber : 3 * algebraicN + 2;

  // Run tests
  const testResults = modRules.map((rule) => {
    const rem = ((evalValue % rule.mod) + rule.mod) % rule.mod;
    const isLegal = rule.allowed.includes(rem);
    return {
      ...rule,
      remainder: rem,
      isLegal
    };
  });

  const isSquareMath = Math.sqrt(evalValue) % 1 === 0;
  const anyFailed = testResults.some((r) => !r.isLegal);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
            <Fingerprint className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              完全平方数模余指纹与否定器 (Square Mod Fingerprint)
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                第 2.5 讲 / 第 3.2 讲核心
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              利用模 3、模 4、模 5、模 8 的二次剩余指纹特征，一击必杀排除“非完全平方数”与证明不定方程无解
            </p>
          </div>
        </div>

        {/* Preset quick test buttons */}
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-slate-400 font-mono text-[11px] mr-1">预设检验:</span>
          {[2025, 2026, 1000, 1024, 777].map((num) => (
            <button
              key={num}
              onClick={() => {
                setExpressionType("direct");
                setTestNumber(num);
              }}
              className={`px-2 py-1 rounded-md text-xs font-mono transition-all ${
                expressionType === "direct" && testNumber === num
                  ? "bg-cyan-600 text-white font-bold"
                  : "bg-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Input & Verdict */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setExpressionType("direct")}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                  expressionType === "direct"
                    ? "bg-cyan-600/30 border-cyan-500 text-cyan-300"
                    : "bg-slate-900 border-slate-800 text-slate-400"
                }`}
              >
                直接输入整数 N
              </button>
              <button
                onClick={() => setExpressionType("algebraic")}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                  expressionType === "algebraic"
                    ? "bg-cyan-600/30 border-cyan-500 text-cyan-300"
                    : "bg-slate-900 border-slate-800 text-slate-400"
                }`}
              >
                代数形检验 (3n+2)
              </button>
            </div>

            {expressionType === "direct" ? (
              <div>
                <label className="text-xs text-slate-400 block mb-1">待验整数 N:</label>
                <input
                  type="number"
                  value={testNumber}
                  onChange={(e) => setTestNumber(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            ) : (
              <div>
                <label className="text-xs text-slate-400 block mb-1">代数式 3n + 2 中的自变量 n (整数):</label>
                <input
                  type="number"
                  value={algebraicN}
                  onChange={(e) => setAlgebraicN(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-cyan-500"
                />
                <div className="text-[11px] text-cyan-400/80 font-mono mt-1">
                  计算值: 3({algebraicN}) + 2 = {evalValue}
                </div>
              </div>
            )}
          </div>

          {/* Master Verdict Card */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              anyFailed
                ? "bg-rose-950/20 border-rose-900/50 text-rose-300"
                : isSquareMath
                ? "bg-emerald-950/20 border-emerald-900/50 text-emerald-300"
                : "bg-amber-950/20 border-amber-900/50 text-amber-300"
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-sm">
              {anyFailed ? (
                <>
                  <XCircle className="w-5 h-5 text-rose-400" />
                  <span>严谨证明：绝不可能为完全平方数！</span>
                </>
              ) : isSquareMath ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>确认为完全平方数：√{evalValue} = {Math.sqrt(evalValue)}</span>
                </>
              ) : (
                <>
                  <ShieldAlert className="w-5 h-5 text-amber-400" />
                  <span>通过基础同余指纹，但实际开方为非整数</span>
                </>
              )}
            </div>
            <p className="text-xs mt-2 text-slate-300 leading-relaxed">
              {anyFailed
                ? `由于存在违反二次剩余同余指纹的检验项，根据数论严格否定性公理，数 ${evalValue} 必然不可能写成任何整数的平方！在不定方程证明中可直接一击必杀！`
                : isSquareMath
                ? `数 ${evalValue} 满足所有同余指纹且是纯正的平方数：${Math.sqrt(evalValue)}² = ${evalValue}。`
                : `该数满足了常规小模数二次剩余指纹（伪指纹符合），但经精确开方检验，${evalValue} ≈ ${Math.sqrt(evalValue).toFixed(4)}，不是完全平方数。这说明同余指纹是指纹必要条件而非充分条件！`}
            </p>
          </div>
        </div>

        {/* Right Modulo Fingerprint Matrix */}
        <div className="lg:col-span-7 space-y-2.5">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>5 大核心二次剩余指纹扫描规约</span>
            <span className="font-mono text-[11px] text-cyan-400">N = {evalValue}</span>
          </div>

          <div className="space-y-2">
            {testResults.map((rule) => (
              <div
                key={rule.mod}
                className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                  rule.isLegal
                    ? "bg-slate-950/60 border-slate-800"
                    : "bg-rose-950/30 border-rose-800/80 shadow-md shadow-rose-950/20"
                }`}
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-white">{rule.name}</span>
                    <span className="font-mono text-[11px] text-slate-400">
                      合法余数集: &#123;{rule.allowed.join(", ")}&#125;
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">{rule.desc}</div>
                </div>

                <div className="text-right shrink-0">
                  <div className="font-mono text-xs flex items-center gap-1.5 justify-end">
                    <span className="text-slate-400">余数:</span>
                    <span
                      className={`font-bold px-1.5 py-0.5 rounded text-xs ${
                        rule.isLegal
                          ? "bg-emerald-950/80 text-emerald-400 border border-emerald-800/50"
                          : "bg-rose-950 text-rose-400 border border-rose-700 animate-pulse font-mono"
                      }`}
                    >
                      {rule.remainder}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold mt-1 inline-block">
                    {rule.isLegal ? (
                      <span className="text-emerald-400 flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3" /> 合法
                      </span>
                    ) : (
                      <span className="text-rose-400 flex items-center gap-0.5">
                        <XCircle className="w-3 h-3" /> 破产否定
                      </span>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
