"use client";

import React, { useState } from "react";
import MathView from "@/components/MathView";
import { Clock, RotateCw, Play, Sparkles, ArrowRight, RefreshCw } from "lucide-react";

export default function ModularClockVisualizer() {
  const [modulus, setModulus] = useState<number>(12);
  const [value, setValue] = useState<number>(17);
  const [operation, setOperation] = useState<"add" | "multiply">("add");
  const [operand, setOperand] = useState<number>(5);

  const remainder = ((value % modulus) + modulus) % modulus;
  const resultValue = operation === "add" ? value + operand : value * operand;
  const resultRemainder = ((resultValue % modulus) + modulus) % modulus;

  // Generate points on clock circle
  const radius = 105;
  const centerX = 140;
  const centerY = 140;

  const clockPoints = Array.from({ length: modulus }, (_, i) => {
    // Top is 0, clockwise
    const angle = (i / modulus) * 2 * Math.PI - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { index: i, x, y };
  });

  const currentAngle = (remainder / modulus) * 2 * Math.PI - Math.PI / 2;
  const pointerX = centerX + (radius - 20) * Math.cos(currentAngle);
  const pointerY = centerY + (radius - 20) * Math.sin(currentAngle);

  const targetAngle = (resultRemainder / modulus) * 2 * Math.PI - Math.PI / 2;
  const targetPointerX = centerX + (radius - 20) * Math.cos(targetAngle);
  const targetPointerY = centerY + (radius - 20) * Math.sin(targetAngle);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              模钟环形同余运算器 (Modular Ring Clock)
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 font-mono">
                第 2.1 讲核心
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              将无限整数投影至环形同余类：<MathView math={`a \\equiv r \\pmod m`} />，直观观察旋转进位与周期封闭性
            </p>
          </div>
        </div>

        {/* Quick presets */}
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-slate-400 font-mono text-[11px] mr-1">预设模:</span>
          {[7, 12, 10, 5].map((m) => (
            <button
              key={m}
              onClick={() => {
                setModulus(m);
                setValue(m + 5);
              }}
              className={`px-2 py-1 rounded-md text-xs font-mono transition-all ${
                modulus === m
                  ? "bg-violet-600 text-white font-bold"
                  : "bg-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              m={m}
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
                <span className="text-slate-300 font-medium">模数 m (Modulus)</span>
                <span className="font-mono text-violet-400 font-bold text-sm">m = {modulus}</span>
              </div>
              <input
                type="range"
                min="3"
                max="24"
                value={modulus}
                onChange={(e) => setModulus(Number(e.target.value))}
                className="w-full accent-violet-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>3 (三进制环)</span>
                <span>12 (十二时钟)</span>
                <span>24 (全天钟面)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="text-slate-300 font-medium">输入整数 a</span>
                <span className="font-mono text-blue-400 font-bold text-sm">a = {value}</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-mono text-white w-28 focus:outline-none focus:border-violet-500"
                />
                <button
                  onClick={() => setValue(Math.floor(Math.random() * 50) + 1)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg transition-colors flex items-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> 随机数
                </button>
              </div>
            </div>

            {/* Arithmetic Action */}
            <div className="pt-2 border-t border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-2 font-medium">同余代数运算演算：</span>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <button
                  onClick={() => setOperation("add")}
                  className={`py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    operation === "add"
                      ? "bg-violet-600/30 border-violet-500 text-violet-300 font-bold"
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  加法运算 (a + k)
                </button>
                <button
                  onClick={() => setOperation("multiply")}
                  className={`py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    operation === "multiply"
                      ? "bg-violet-600/30 border-violet-500 text-violet-300 font-bold"
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  乘法运算 (a × k)
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-mono">操作数 k:</span>
                <input
                  type="number"
                  value={operand}
                  onChange={(e) => setOperand(Number(e.target.value))}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs font-mono text-white w-20 focus:outline-none focus:border-violet-500"
                />
              </div>
            </div>
          </div>

          {/* Theoretical Summary Box */}
          <div className="bg-violet-950/20 border border-violet-900/40 p-3.5 rounded-xl text-xs space-y-1.5">
            <div className="font-semibold text-violet-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              高斯模算术恒等式结论
            </div>
            <div className="text-slate-300 font-mono text-[11px] leading-relaxed">
              <MathView
                math={`${value} \\equiv ${remainder} \\pmod{${modulus}} \\quad (\\text{圈数 } q = ${Math.floor(
                  value / modulus
                )})`}
              />
            </div>
            <div className="text-slate-300 font-mono text-[11px] leading-relaxed pt-1 border-t border-violet-900/40">
              <MathView
                math={`${value} ${operation === "add" ? "+" : "\\times"} ${operand} = ${resultValue} \\equiv \\mathbf{${resultRemainder}} \\pmod{${modulus}}`}
              />
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              负余数代换：<MathView math={`-${modulus - remainder} \\equiv ${remainder} \\pmod{${modulus}}`} />
            </div>
          </div>
        </div>

        {/* Visual Clock SVG Column */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 relative">
          <svg width="280" height="280" viewBox="0 0 280 280" className="select-none">
            {/* Outer Ring */}
            <circle
              cx={centerX}
              cy={centerY}
              r={radius + 15}
              fill="none"
              stroke="#334155"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <circle
              cx={centerX}
              cy={centerY}
              r={radius}
              fill="#0f172a"
              stroke="#6366f1"
              strokeWidth="3"
            />

            {/* Inner Center Hub */}
            <circle cx={centerX} cy={centerY} r="6" fill="#818cf8" />

            {/* Clock Nodes */}
            {clockPoints.map((pt) => {
              const isCurrent = pt.index === remainder;
              const isTarget = pt.index === resultRemainder;
              return (
                <g key={pt.index}>
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={pt.x}
                    y2={pt.y}
                    stroke={isCurrent || isTarget ? "#818cf8" : "#1e293b"}
                    strokeWidth={isCurrent || isTarget ? "1.5" : "1"}
                  />
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isCurrent ? "14" : isTarget ? "12" : "10"}
                    fill={isCurrent ? "#8b5cf6" : isTarget ? "#ec4899" : "#1e293b"}
                    stroke={isCurrent ? "#c4b5fd" : isTarget ? "#f472b6" : "#475569"}
                    strokeWidth="2"
                    className="transition-all duration-300"
                  />
                  <text
                    x={pt.x}
                    y={pt.y + 4}
                    textAnchor="middle"
                    fill={isCurrent || isTarget ? "#ffffff" : "#94a3b8"}
                    fontSize={modulus > 16 ? "9" : "11"}
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {pt.index}
                  </text>
                </g>
              );
            })}

            {/* Current Value Vector */}
            <line
              x1={centerX}
              y1={centerY}
              x2={pointerX}
              y2={pointerY}
              stroke="#a78bfa"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Target Value Vector */}
            {remainder !== resultRemainder && (
              <line
                x1={centerX}
                y1={centerY}
                x2={targetPointerX}
                y2={targetPointerY}
                stroke="#f472b6"
                strokeWidth="2.5"
                strokeDasharray="3 3"
                strokeLinecap="round"
              />
            )}
          </svg>

          {/* Color Key Legend */}
          <div className="flex items-center gap-4 mt-3 text-xs">
            <span className="flex items-center gap-1.5 text-violet-300 font-mono">
              <span className="w-3 h-3 rounded-full bg-violet-600 border border-violet-400 inline-block" />
              当前值余数 {remainder}
            </span>
            <span className="flex items-center gap-1.5 text-pink-300 font-mono">
              <span className="w-3 h-3 rounded-full bg-pink-600 border border-pink-400 inline-block" />
              运算后目标余数 {resultRemainder}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
