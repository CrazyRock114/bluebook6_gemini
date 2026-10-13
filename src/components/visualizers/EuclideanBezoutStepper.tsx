"use client";

import React, { useState, useMemo } from "react";
import { Play, SkipForward, RotateCcw, ArrowRight, Layers, Table as TableIcon } from "lucide-react";
import MathView from "@/components/MathView";

interface DivisionStep {
  step: number;
  dividend: number;
  divisor: number;
  quotient: number;
  remainder: number;
}

interface BezoutStep {
  step: number;
  expr: string;
}

export default function EuclideanBezoutStepper() {
  const [numA, setNumA] = useState<number>(237);
  const [numB, setNumB] = useState<number>(109);
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"steps" | "tiling" | "bezout">("steps");

  // Calculate full Euclidean division steps
  const { divisionSteps, gcd, bezoutSteps, x0, y0 } = useMemo(() => {
    let a = Math.abs(numA);
    let b = Math.abs(numB);
    if (a < b) {
      const temp = a;
      a = b;
      b = temp;
    }

    const steps: DivisionStep[] = [];
    if (b === 0) {
      return {
        divisionSteps: [],
        gcd: a,
        bezoutSteps: [],
        x0: 1,
        y0: 0,
      };
    }

    let r0 = a;
    let r1 = b;
    let stepCount = 0;

    // Extended Euclidean matrix tracking:
    // s_k and t_k such that r_k = a * s_k + b * t_k
    let s0 = 1,
      s1 = 0;
    let t0 = 0,
      t1 = 1;

    while (r1 !== 0) {
      stepCount++;
      const q = Math.floor(r0 / r1);
      const rem = r0 % r1;
      steps.push({
        step: stepCount,
        dividend: r0,
        divisor: r1,
        quotient: q,
        remainder: rem,
      });

      const nextS = s0 - q * s1;
      const nextT = t0 - q * t1;

      r0 = r1;
      r1 = rem;
      s0 = s1;
      s1 = nextS;
      t0 = t1;
      t1 = nextT;
    }

    // Bezout backward steps illustration
    const bSteps: BezoutStep[] = [];
    for (let i = steps.length - 2; i >= 0; i--) {
      const s = steps[i];
      bSteps.push({
        step: steps.length - 1 - i,
        expr: `${s.remainder} = ${s.dividend} - ${s.divisor} \\times ${s.quotient}`,
      });
    }

    return {
      divisionSteps: steps,
      gcd: r0,
      bezoutSteps: bSteps,
      x0: s0,
      y0: t0,
    };
  }, [numA, numB]);

  const maxSteps = divisionSteps.length;
  const activeSteps = divisionSteps.slice(0, currentStepIdx + 1);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl text-slate-100">
      {/* Title */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              组件 2 · 辗转相除 & 裴蜀等式
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white">
              欧几里得除法与裴蜀等式回代阶梯
            </h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            探究定理 4 与定理 5：从带余除法链条到整数线性组合特解 <MathView math="ax + by = (a, b)" />
          </p>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-500 mr-1">经典预设:</span>
          {[
            { label: "教材例题 (237, 109)", a: 237, b: 109 },
            { label: "斐波那契最慢链 (144, 89)", a: 144, b: 89 },
            { label: "公因子大数 (360, 198)", a: 360, b: 198 },
          ].map((preset) => (
            <button
              key={preset.label}
              onClick={() => {
                setNumA(preset.a);
                setNumB(preset.b);
                setCurrentStepIdx(0);
              }}
              className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700/80 transition-colors"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Inputs and Stepper Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
        <div>
          <label className="text-xs font-semibold text-slate-400 block mb-1">
            整数 <MathView math="a" /> :
          </label>
          <input
            type="number"
            value={numA}
            onChange={(e) => {
              setNumA(Math.max(1, parseInt(e.target.value) || 1));
              setCurrentStepIdx(0);
            }}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-indigo-500 text-sm"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-400 block mb-1">
            整数 <MathView math="b" /> :
          </label>
          <input
            type="number"
            value={numB}
            onChange={(e) => {
              setNumB(Math.max(1, parseInt(e.target.value) || 1));
              setCurrentStepIdx(0);
            }}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-indigo-500 text-sm"
          />
        </div>

        <div className="flex flex-col justify-end">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentStepIdx((prev) => Math.min(maxSteps - 1, prev + 1))}
              disabled={currentStepIdx >= maxSteps - 1}
              className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:hover:bg-indigo-600 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <SkipForward className="w-3.5 h-3.5" />
              单步演示 ({currentStepIdx + 1}/{maxSteps})
            </button>
            <button
              onClick={() => setCurrentStepIdx(maxSteps - 1)}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium transition-colors"
              title="全部展开"
            >
              全部
            </button>
            <button
              onClick={() => setCurrentStepIdx(0)}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-lg transition-colors"
              title="重新单步"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 mb-6">
        {[
          { key: "steps", label: "除法阶梯表 (Division Table)", icon: TableIcon },
          { key: "tiling", label: "几何矩形铺砌 (Geometric Tiling)", icon: Layers },
          { key: "bezout", label: "裴蜀等式倒推 (Bézout Substitution)", icon: ArrowRight },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${
                activeTab === tab.key
                  ? "border-indigo-500 text-indigo-400 bg-indigo-500/5"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Division Table */}
      {activeTab === "steps" && (
        <div className="space-y-3">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-300 border-collapse">
              <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[11px] border-b border-slate-800">
                <tr>
                  <th className="p-3">步骤</th>
                  <th className="p-3">带余除法等式</th>
                  <th className="p-3">被除数</th>
                  <th className="p-3">除数</th>
                  <th className="p-3">商 (q)</th>
                  <th className="p-3">余数 (r)</th>
                  <th className="p-3">公因数关系</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {activeSteps.map((s, idx) => (
                  <tr
                    key={s.step}
                    className={`transition-colors ${
                      idx === currentStepIdx
                        ? "bg-indigo-950/40 text-white font-medium"
                        : "hover:bg-slate-800/40"
                    }`}
                  >
                    <td className="p-3 font-mono text-indigo-400 font-bold">第 {s.step} 步</td>
                    <td className="p-3 font-mono font-semibold">
                      {s.dividend} = {s.divisor} × {s.quotient} +{" "}
                      <span className={s.remainder === 0 ? "text-emerald-400 font-bold" : "text-amber-400"}>
                        {s.remainder}
                      </span>
                    </td>
                    <td className="p-3 font-mono">{s.dividend}</td>
                    <td className="p-3 font-mono">{s.divisor}</td>
                    <td className="p-3 font-mono text-blue-400">{s.quotient}</td>
                    <td className="p-3 font-mono font-bold text-amber-400">{s.remainder}</td>
                    <td className="p-3 text-slate-400">
                      ({s.dividend}, {s.divisor}) = ({s.divisor}, {s.remainder})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {currentStepIdx >= maxSteps - 1 && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-500/40 rounded-xl text-emerald-300 flex items-center justify-between text-xs">
              <div className="font-semibold text-sm">
                最终余数为 0，最后的非零余数即为最大公因数：
                <span className="font-mono text-base font-bold ml-2">
                  ({Math.max(numA, numB)}, {Math.min(numA, numB)}) = {gcd}
                </span>
              </div>
              <span className="px-2.5 py-1 bg-emerald-500/20 rounded font-mono font-bold">
                算法终止 (共 {maxSteps} 步)
              </span>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Geometric Tiling */}
      {activeTab === "tiling" && (
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 text-xs">
          <div className="mb-4 text-slate-400">
            <strong>欧几里得几何铺砌原理：</strong> 设大矩形长为 {Math.max(numA, numB)}，宽为{" "}
            {Math.min(numA, numB)}。用边长等于宽度的正方形尽可能铺满大矩形，剩余矩形继续用正方形铺满，直到恰好铺满为止。最后一个正方形的边长恰为最大公因数{" "}
            <MathView math={`(${numA}, ${numB}) = ${gcd}`} />！
          </div>

          <div className="space-y-3 font-mono bg-slate-900/80 p-4 rounded-lg border border-slate-800">
            {divisionSteps.map((s, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-16 text-indigo-400 font-bold">第 {s.step} 层铺砌:</span>
                <span className="text-slate-300">
                  铺设 <strong>{s.quotient}</strong> 个边长为{" "}
                  <span className="text-emerald-400 font-bold">{s.divisor}</span> 的正方形，
                  剩余长宽为{" "}
                  <span className="text-amber-400 font-bold">
                    {s.divisor} × {s.remainder}
                  </span>{" "}
                  的未铺满矩形
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Bezout Substitution */}
      {activeTab === "bezout" && (
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 text-xs">
          <div className="mb-4">
            <span className="text-sm font-bold text-white block mb-1">
              裴蜀等式 (Bézout's Identity) 倒推与通解
            </span>
            <p className="text-slate-400">
              通过将辗转相除法的每一行余数倒推代入，最终可以把最大公因数{" "}
              <span className="text-indigo-400 font-mono font-bold">{gcd}</span> 表达为原始两数的整系数线性组合：
            </p>
          </div>

          {/* Bezout Formula Highlight */}
          <div className="p-4 bg-indigo-950/40 border border-indigo-500/50 rounded-xl mb-4 text-center">
            <div className="text-base font-bold font-mono text-indigo-200">
              {Math.max(numA, numB)} × (<span className="text-amber-400">{x0}</span>) +{" "}
              {Math.min(numA, numB)} × (<span className="text-blue-400">{y0}</span>) ={" "}
              <span className="text-emerald-400">{gcd}</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              一组整特解为：<MathView math={`(x_0, y_0) = (${x0}, ${y0})`} />
            </p>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2">
            <span className="text-xs font-semibold text-slate-300 block mb-2">
              一次不定方程全部通解结构（第三章核心基础）：
            </span>
            <div className="font-mono text-slate-300 leading-relaxed bg-slate-950 p-3 rounded border border-slate-800">
              x = {x0} + ({Math.min(numA, numB) / gcd})t <br />
              y = {y0} - ({Math.max(numA, numB) / gcd})t <br />
              <span className="text-slate-500 text-[11px]">其中 t 为任意整数 (t ∈ ℤ)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
