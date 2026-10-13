"use client";

import React, { useState, useMemo } from "react";
import { CheckCircle2, AlertCircle, RotateCcw, Sparkles } from "lucide-react";
import MathView from "@/components/MathView";

export default function RemainderLatticeVisualizer() {
  const [a, setA] = useState<number>(23);
  const [b, setB] = useState<number>(5);
  const [showNegTheory, setShowNegTheory] = useState<boolean>(false);
  const [linX, setLinX] = useState<number>(2);
  const [linY, setLinY] = useState<number>(3);

  // Euclidean division: a = b*q + r, with 0 <= r < |b|
  const { q, r, isDivisible } = useMemo(() => {
    if (b === 0) return { q: 0, r: 0, isDivisible: false };
    const absB = Math.abs(b);
    let rem = a % absB;
    if (rem < 0) rem += absB;
    const quot = Math.floor((a - rem) / b);
    return {
      q: quot,
      r: rem,
      isDivisible: rem === 0,
    };
  }, [a, b]);

  // Linear combination test: if d divides b and c, does it divide b*x + c*y?
  const linVal = useMemo(() => {
    return b * linX + (a % b === 0 ? a : b * 2) * linY;
  }, [a, b, linX, linY]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
              组件 1 · 核心直观
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white">
              带余除法与整除几何切片仪
            </h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            动态展现带余除法定理：<MathView math="a = bq + r \quad (0 \le r < |b|)" /> 与整除充要条件
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setA(24);
              setB(6);
            }}
            className="px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            整除特例 (24 ÷ 6)
          </button>
          <button
            onClick={() => {
              setA(23);
              setB(5);
            }}
            className="px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            重置 (23 ÷ 5)
          </button>
        </div>
      </div>

      {/* Control Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-slate-300 flex items-center gap-2">
              被除数 <MathView math="a" /> :
              <span className="text-blue-400 font-mono text-base">{a}</span>
            </label>
            <span className="text-xs text-slate-500">范围: -30 ~ 60</span>
          </div>
          <input
            type="range"
            min="-30"
            max="60"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value) || 0)}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-slate-300 flex items-center gap-2">
              除数 <MathView math="b" /> :
              <span className="text-emerald-400 font-mono text-base">{b}</span>
            </label>
            <span className="text-xs text-slate-500">范围: 1 ~ 16 (非零)</span>
          </div>
          <input
            type="range"
            min="1"
            max="16"
            value={b}
            onChange={(e) => setB(parseInt(e.target.value) || 1)}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>

      {/* Formula & Result Badge */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700/60 flex flex-col justify-center">
          <span className="text-xs text-slate-400 font-medium">带余除法标准算式</span>
          <div className="text-lg font-mono font-bold text-white mt-1">
            {a} = {b} × <span className="text-blue-400">{q}</span> +{" "}
            <span className={r === 0 ? "text-emerald-400" : "text-amber-400"}>{r}</span>
          </div>
        </div>

        <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700/60 flex flex-col justify-center">
          <span className="text-xs text-slate-400 font-medium">商 (Quotient) 与 余数 (Remainder)</span>
          <div className="text-base font-semibold text-slate-200 mt-1">
            商 <MathView math="q" /> = <span className="text-blue-400">{q}</span>, 余数{" "}
            <MathView math="r" /> ={" "}
            <span className={r === 0 ? "text-emerald-400 font-bold" : "text-amber-400 font-bold"}>
              {r}
            </span>{" "}
            <span className="text-xs text-slate-400 font-normal">
              (0 ≤ {r} &lt; {Math.abs(b)})
            </span>
          </div>
        </div>

        <div
          className={`p-4 rounded-xl border flex items-center gap-3 transition-colors ${
            isDivisible
              ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-300"
              : "bg-amber-950/30 border-amber-500/40 text-amber-300"
          }`}
        >
          {isDivisible ? (
            <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="w-8 h-8 text-amber-400 shrink-0" />
          )}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider">
              {isDivisible ? "整除判定成功" : "存在非零余数"}
            </div>
            <div className="text-base font-bold">
              {isDivisible ? (
                <span>
                  <MathView math={`${b} \\mid ${a}`} /> 成立！
                </span>
              ) : (
                <span>
                  <MathView math={`${b} \\nmid ${a}`} /> (余数 = {r})
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Visual representation: 2D Block Lattice */}
      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
            二维矩形阵列切片 ({Math.max(0, q)} 个完整分组，每组 {b} 格 + {r} 个余数零头)
          </span>
          <span className="text-xs text-slate-500">
            总格数 = {Math.max(0, q * b + r)}
          </span>
        </div>

        {q < 0 ? (
          <div className="py-8 text-center text-slate-400 text-sm">
            当被除数 <MathView math="a < 0" /> 时，请看下方数轴区间演示。
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 items-end p-3 bg-slate-900/60 rounded-lg min-h-[100px] overflow-x-auto">
            {Array.from({ length: Math.min(q, 15) }).map((_, groupIdx) => (
              <div key={groupIdx} className="flex flex-col items-center">
                <div className="bg-blue-950/60 border border-blue-500/40 rounded p-1.5 grid gap-1">
                  {Array.from({ length: b }).map((_, cellIdx) => (
                    <div
                      key={cellIdx}
                      className="w-5 h-5 bg-blue-500/70 rounded-sm flex items-center justify-center text-[10px] text-white font-mono"
                    >
                      •
                    </div>
                  ))}
                </div>
                <span className="text-[10px] text-blue-400 mt-1 font-mono">第{groupIdx + 1}组</span>
              </div>
            ))}

            {q > 15 && (
              <div className="text-xs text-slate-400 self-center px-2">
                ... 还有 {q - 15} 组省略
              </div>
            )}

            {/* Remainder group */}
            {r > 0 && (
              <div className="flex flex-col items-center ml-2 pl-3 border-l border-slate-700/80">
                <div className="bg-amber-950/60 border border-amber-500/60 rounded p-1.5 grid gap-1">
                  {Array.from({ length: r }).map((_, remIdx) => (
                    <div
                      key={remIdx}
                      className="w-5 h-5 bg-amber-400 rounded-sm flex items-center justify-center text-[10px] text-slate-950 font-bold animate-pulse"
                    >
                      {remIdx + 1}
                    </div>
                  ))}
                </div>
                <span className="text-[10px] text-amber-400 mt-1 font-mono font-semibold">
                  余数 {r}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Negative number exploration toggle */}
      <div className="border-t border-slate-800 pt-4">
        <button
          onClick={() => setShowNegTheory(!showNegTheory)}
          className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors"
        >
          <span>{showNegTheory ? "收起" : "展开"}数论探秘：负数带余除法为什么余数必须为正？</span>
        </button>

        {showNegTheory && (
          <div className="mt-3 p-4 bg-slate-950/80 rounded-xl border border-blue-900/40 text-xs text-slate-300 space-y-2 leading-relaxed">
            <p>
              <strong className="text-blue-300">韩涛教练特别提示：</strong>
              日常编程语言中（如 C/Java），<code>-7 % 3</code> 常常输出 <code>-1</code>（向零截断）；
              但在数学与数论中，余数被严格定义为 <MathView math="0 \le r < |b|" />，
              因此 <MathView math="-7 = 3 \times (-3) + 2" />，余数是 <strong>2</strong> 而非 -1！
            </p>
            <p>
              将余数严格限定在非负区间，才能保证所有整数模 <MathView math="b" /> 能够整齐划一地划分成正好 <MathView math="b" /> 个互不相交的同余类，这是后续第二章“同余与剩余系”的基石！
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
