"use client";

import React, { useState } from "react";
import MathView from "@/components/MathView";
import { Shapes, Sparkles, CheckCircle2, RotateCw, RefreshCw, Triangle } from "lucide-react";

export default function PythagoreanLatticeVisualizer() {
  const [m, setM] = useState<number>(3);
  const [n, setN] = useState<number>(2);

  // GCD helper
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const isCoprime = gcd(m, n) === 1;
  const isOppositeParity = (m % 2) !== (n % 2);
  const isPrimitive = isCoprime && isOppositeParity && m > n && n > 0;

  // Primitive Pythagorean Triple:
  // a = m^2 - n^2
  // b = 2*m*n
  // c = m^2 + n^2
  const a = m * m - n * n;
  const b = 2 * m * n;
  const c = m * m + n * n;

  const area = 0.5 * a * b;
  const productXYZ = a * b * c;
  const isDivisibleBy60 = productXYZ % 60 === 0;

  // Preset famous triples
  const presets = [
    { m: 2, n: 1, label: "(3, 4, 5)" },
    { m: 3, n: 2, label: "(5, 12, 13)" },
    { m: 4, n: 1, label: "(15, 8, 17)" },
    { m: 4, n: 3, label: "(7, 24, 25)" },
    { m: 5, n: 2, label: "(21, 20, 29)" }
  ];

  // SVG dimensions for triangle
  const maxSide = Math.max(a, b);
  const scale = 140 / (maxSide || 1);
  const triangleWidth = Math.max(a * scale, 30);
  const triangleHeight = Math.max(b * scale, 30);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
            <Shapes className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              勾股方程欧几里得通解晶格 (Pythagorean Lattice Generator)
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                第 3.3 讲核心 (28节微课)
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              欧几里得本原勾股数通解发生器：<MathView math={`x = m^2 - n^2, \\; y = 2mn, \\; z = m^2 + n^2`} />，动态证明 <MathView math={`60 \\mid xyz`} />
            </p>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-slate-400 font-mono text-[11px] mr-1">经典本原数组:</span>
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => {
                setM(p.m);
                setN(p.n);
              }}
              className={`px-2 py-1 rounded-md text-xs font-mono transition-all ${
                m === p.m && n === p.n
                  ? "bg-emerald-600 text-white font-bold"
                  : "bg-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              {p.label}
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
                <span className="text-slate-300 font-medium">发生器参数 m (m &gt; n)</span>
                <span className="font-mono text-emerald-400 font-bold text-sm">m = {m}</span>
              </div>
              <input
                type="range"
                min="2"
                max="8"
                value={m}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setM(val);
                  if (n >= val) setN(val - 1);
                }}
                className="w-full accent-emerald-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="text-slate-300 font-medium">发生器参数 n (n &lt; m)</span>
                <span className="font-mono text-cyan-400 font-bold text-sm">n = {n}</span>
              </div>
              <input
                type="range"
                min="1"
                max={Math.max(1, m - 1)}
                value={n}
                onChange={(e) => setN(Number(e.target.value))}
                className="w-full accent-cyan-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Primitive Triple Criteria */}
            <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs">
              <div className="text-slate-400 font-medium mb-1">本原勾股数判定三准则：</div>
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">1. 大小条件 (m &gt; n &gt; 0):</span>
                <span className="text-emerald-400 font-semibold">{m} &gt; {n} &gt; 0 ✓</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">2. 互质条件 (gcd(m, n) = 1):</span>
                <span className={isCoprime ? "text-emerald-400 font-semibold" : "text-rose-400 font-semibold"}>
                  gcd({m}, {n}) = {gcd(m, n)} {isCoprime ? "✓" : "✗ 非互质"}
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">3. 奇偶相异条件 (一奇一偶):</span>
                <span className={isOppositeParity ? "text-emerald-400 font-semibold" : "text-rose-400 font-semibold"}>
                  {m % 2 === 1 ? "奇数" : "偶数"}与{n % 2 === 1 ? "奇数" : "偶数"} {isOppositeParity ? "✓" : "✗ 同奇偶"}
                </span>
              </div>
            </div>
          </div>

          {/* Generated Triple Output Box */}
          <div className="bg-emerald-950/20 border border-emerald-900/40 p-4 rounded-xl text-xs space-y-2">
            <div className="font-bold text-emerald-300 flex items-center justify-between">
              <span>生成勾股数三元组 (x, y, z)</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                isPrimitive ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-amber-500/20 text-amber-300"
              }`}>
                {isPrimitive ? "★ 本原勾股数 (Primitive)" : "衍生勾股数 (非本原)"}
              </span>
            </div>

            <div className="font-mono text-sm text-white bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 text-center">
              x = {a}, \quad y = {b}, \quad z = {c}
            </div>

            <div className="text-[11px] text-slate-300 space-y-1 pt-1 border-t border-emerald-900/40 font-mono">
              <div>勾股恒等式：{a}² + {b}² = {a*a} + {b*b} = {c*c} = {c}² ✓</div>
              <div>直角三角形面积：S = ½ × {a} × {b} = {area}</div>
              <div className="text-amber-400">
                千古名定理：乘积 {a}×{b}×{c} = {productXYZ} ≡ {productXYZ % 60} (mod 60) {isDivisibleBy60 ? "(必被 60 整除 ✓)" : ""}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Right-Triangle & Unit Circle Projection */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 bg-slate-950/80 rounded-2xl border border-slate-800/80">
          <svg width="280" height="220" viewBox="0 0 280 220" className="select-none overflow-visible">
            {/* Grid background */}
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="280" height="220" fill="url(#smallGrid)" rx="12" />

            {/* Right Triangle */}
            <g transform="translate(40, 180)">
              {/* Fill */}
              <polygon
                points={`0,0 ${triangleWidth},0 0,-${triangleHeight}`}
                fill="rgba(16, 185, 129, 0.15)"
                stroke="#10b981"
                strokeWidth="2.5"
              />

              {/* Right angle symbol */}
              <rect x="0" y="-14" width="14" height="14" fill="none" stroke="#34d399" strokeWidth="1.5" />

              {/* Labels */}
              {/* Base side x */}
              <text
                x={triangleWidth / 2}
                y="18"
                textAnchor="middle"
                fill="#34d399"
                fontSize="12"
                fontWeight="bold"
                fontFamily="monospace"
              >
                x = {a} (m² - n²)
              </text>

              {/* Height side y */}
              <text
                x="-12"
                y={-triangleHeight / 2}
                textAnchor="middle"
                fill="#38bdf8"
                fontSize="12"
                fontWeight="bold"
                fontFamily="monospace"
              >
                y = {b} (2mn)
              </text>

              {/* Hypotenuse side z */}
              <text
                x={triangleWidth / 2 + 10}
                y={-triangleHeight / 2 - 5}
                textAnchor="middle"
                fill="#f59e0b"
                fontSize="12"
                fontWeight="bold"
                fontFamily="monospace"
              >
                z = {c} (m² + n²)
              </text>
            </g>
          </svg>

          <div className="flex items-center gap-4 mt-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2.5 h-2.5 rounded bg-emerald-500" /> 直角边 x = {a}
            </span>
            <span className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-2.5 h-2.5 rounded bg-cyan-500" /> 偶数直角边 y = {b}
            </span>
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="w-2.5 h-2.5 rounded bg-amber-500" /> 奇数斜边 z = {c}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
