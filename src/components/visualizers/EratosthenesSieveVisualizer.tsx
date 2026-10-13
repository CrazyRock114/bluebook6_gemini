"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Play, Pause, RotateCcw, Sparkles, Info } from "lucide-react";
import MathView from "@/components/MathView";

const PRIME_COLORS: Record<number, { bg: string; text: string; border: string }> = {
  2: { bg: "bg-rose-500/20", text: "text-rose-400", border: "border-rose-500/50" },
  3: { bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/50" },
  5: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/50" },
  7: { bg: "bg-sky-500/20", text: "text-sky-400", border: "border-sky-500/50" },
  11: { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/50" },
};

export default function EratosthenesSieveVisualizer() {
  const [limit, setLimit] = useState<number>(100);
  const [currentPrime, setCurrentPrime] = useState<number>(2);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedNum, setSelectedNum] = useState<number | null>(null);

  // List of primes up to sqrt(limit)
  const sievePrimes = useMemo(() => {
    const maxP = Math.floor(Math.sqrt(limit));
    const isP = new Array(maxP + 1).fill(true);
    const primes: number[] = [];
    for (let i = 2; i <= maxP; i++) {
      if (isP[i]) {
        primes.push(i);
        for (let j = i * i; j <= maxP; j += i) {
          isP[j] = false;
        }
      }
    }
    return primes;
  }, [limit]);

  // Compute state for all numbers up to limit based on currentPrime
  const gridData = useMemo(() => {
    const data: {
      val: number;
      isCrossed: boolean;
      eliminatedBy: number | null;
      isPrime: boolean;
    }[] = [];

    // Find primes processed so far
    const processedPrimes = sievePrimes.filter((p) => p <= currentPrime);

    for (let i = 1; i <= limit; i++) {
      if (i === 1) {
        data.push({ val: 1, isCrossed: true, eliminatedBy: null, isPrime: false });
        continue;
      }

      let eliminatedBy: number | null = null;
      for (const p of processedPrimes) {
        if (i !== p && i % p === 0) {
          eliminatedBy = p;
          break;
        }
      }

      data.push({
        val: i,
        isCrossed: eliminatedBy !== null,
        eliminatedBy,
        isPrime: sievePrimes.includes(i) || (!eliminatedBy && i > 1),
      });
    }

    return data;
  }, [limit, currentPrime, sievePrimes]);

  // Auto-play timer
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        const nextPrimeIdx = sievePrimes.findIndex((p) => p > currentPrime);
        if (nextPrimeIdx !== -1) {
          setCurrentPrime(sievePrimes[nextPrimeIdx]);
        } else {
          setIsPlaying(false);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentPrime, sievePrimes]);

  const primeCount = gridData.filter((d) => !d.isCrossed && d.val > 1).length;
  const sqrtLimit = Math.floor(Math.sqrt(limit));

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              组件 3 · 素数分布
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white">
              动态埃拉托斯特尼筛法与素数密度计
            </h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            探究定理 2：大于 1 的整数若无不超过 <MathView math="\sqrt{n}" /> 的素因数，则必为素数！
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3 py-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors flex items-center gap-1.5"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isPlaying ? "暂停动画" : "自动播放"}
          </button>
          <button
            onClick={() => {
              setIsPlaying(false);
              setCurrentPrime(2);
            }}
            className="px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            重置
          </button>
        </div>
      </div>

      {/* Sieve Prime Steps & Slider */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
        <div>
          <label className="text-xs font-semibold text-slate-400 block mb-1">
            筛选上限 <MathView math="N" /> : <span className="text-emerald-400 font-mono font-bold">{limit}</span>
          </label>
          <input
            type="range"
            min="30"
            max="120"
            step="10"
            value={limit}
            onChange={(e) => {
              setLimit(parseInt(e.target.value));
              setCurrentPrime(2);
              setIsPlaying(false);
            }}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <span className="text-[11px] text-slate-500 mt-1 block">
            只需检验至 <MathView math={`\\sqrt{${limit}} \\approx ${sqrtLimit}`} /> 以内素数
          </span>
        </div>

        <div className="md:col-span-2 flex flex-col justify-center">
          <span className="text-xs font-semibold text-slate-400 block mb-2">
            当前筛选素数步进 (<MathView math="p \le \sqrt{N}" />) :
          </span>
          <div className="flex flex-wrap gap-2">
            {sievePrimes.map((p) => {
              const isActive = p === currentPrime;
              const isPast = p < currentPrime;
              return (
                <button
                  key={p}
                  onClick={() => {
                    setCurrentPrime(p);
                    setIsPlaying(false);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    isActive
                      ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105"
                      : isPast
                      ? "bg-slate-800 text-slate-300 border border-slate-700"
                      : "bg-slate-900 text-slate-600 border border-slate-800"
                  }`}
                >
                  划去 {p} 的倍数
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid Display (10 columns) */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2">
          {gridData.map((d) => {
            const isEliminated = d.isCrossed;
            const pColor = d.eliminatedBy ? PRIME_COLORS[d.eliminatedBy] : null;
            const isSelected = selectedNum === d.val;

            return (
              <button
                key={d.val}
                onClick={() => setSelectedNum(d.val)}
                className={`h-10 rounded-lg font-mono text-xs font-bold transition-all flex flex-col items-center justify-center relative ${
                  d.val === 1
                    ? "bg-slate-900/40 text-slate-600 line-through"
                    : isEliminated
                    ? `${pColor ? pColor.bg : "bg-slate-900/60"} ${
                        pColor ? pColor.text : "text-slate-500"
                      } line-through opacity-60`
                    : "bg-emerald-950/40 border border-emerald-500/60 text-emerald-300 shadow-sm"
                } ${isSelected ? "ring-2 ring-white scale-105 z-10" : "hover:border-slate-500"}`}
              >
                <span>{d.val}</span>
                {d.eliminatedBy && (
                  <span className="text-[8px] opacity-75 font-normal">÷{d.eliminatedBy}</span>
                )}
                {!d.isCrossed && d.val > 1 && (
                  <span className="w-1 h-1 bg-emerald-400 rounded-full mt-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div>
          <span className="text-slate-400 block">素数计数函数 π({limit}) :</span>
          <span className="text-lg font-mono font-bold text-emerald-400">
            {primeCount} 个素数
          </span>
        </div>

        <div>
          <span className="text-slate-400 block">素数定理渐近估算 N / ln(N) :</span>
          <span className="text-lg font-mono font-bold text-blue-400">
            ≈ {(limit / Math.log(limit)).toFixed(1)}
          </span>
        </div>

        <div>
          <span className="text-slate-400 block">选中数字详情 :</span>
          {selectedNum ? (
            <span className="text-slate-200 font-mono text-xs">
              数字 {selectedNum}:{" "}
              {gridData.find((d) => d.val === selectedNum)?.isCrossed
                ? `合数 (被 ${gridData.find((d) => d.val === selectedNum)?.eliminatedBy || 1} 筛去)`
                : "素数 (Prime)"}
            </span>
          ) : (
            <span className="text-slate-500 italic">点击网格中的数字查看</span>
          )}
        </div>
      </div>
    </div>
  );
}
