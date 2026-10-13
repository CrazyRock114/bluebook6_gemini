"use client";

import React, { useState } from "react";
import { VOLUME_6_LABS, LabMetadata } from "@/data/volume6Structure";
import MathView from "@/components/MathView";
import RemainderLatticeVisualizer from "@/components/visualizers/RemainderLatticeVisualizer";
import EuclideanBezoutStepper from "@/components/visualizers/EuclideanBezoutStepper";
import EratosthenesSieveVisualizer from "@/components/visualizers/EratosthenesSieveVisualizer";
import FactorizationLegendreExplorer from "@/components/visualizers/FactorizationLegendreExplorer";
import ModularClockVisualizer from "@/components/visualizers/ModularClockVisualizer";
import ResidueMatrixVisualizer from "@/components/visualizers/ResidueMatrixVisualizer";
import FermatLittleTheoremVisualizer from "@/components/visualizers/FermatLittleTheoremVisualizer";
import SquareModFingerprintVisualizer from "@/components/visualizers/SquareModFingerprintVisualizer";
import PythagoreanLatticeVisualizer from "@/components/visualizers/PythagoreanLatticeVisualizer";
import {
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
  BookOpen,
  Code
} from "lucide-react";

export default function VisualLabsGallery({
  initialLabId
}: {
  initialLabId?: string;
}) {
  const [activeLabId, setActiveLabId] = useState<string>(
    initialLabId || "remainder_lattice"
  );
  const [filterChapter, setFilterChapter] = useState<number | "all">("all");

  const currentLab =
    VOLUME_6_LABS.find((l) => l.id === activeLabId) || VOLUME_6_LABS[0];

  const filteredLabs =
    filterChapter === "all"
      ? VOLUME_6_LABS
      : VOLUME_6_LABS.filter((l) => l.chapter === filterChapter);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>小蓝本初中卷6 · 9大算法多模态可视化实验室</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            把高深抽象的数论公理，变为可交互探索的算法沙盒
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            从初中第 1 章整除切片，到第 2 章高斯同余环与费马小定理，直至第 3 章勾股丢番图晶格。每个组件均与华东师大版 131 页教材及韩涛教练 156 节视频知识点深度锚定。
          </p>

          {/* Chapter Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-5">
            <span className="text-xs text-slate-400 font-mono mr-1">篇章筛选:</span>
            <button
              onClick={() => setFilterChapter("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filterChapter === "all"
                  ? "bg-indigo-600 text-white font-bold shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              全部 9 大实验室
            </button>
            <button
              onClick={() => setFilterChapter(1)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filterChapter === 1
                  ? "bg-blue-600 text-white font-bold shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              第 1 章：整除理论 (4个)
            </button>
            <button
              onClick={() => setFilterChapter(2)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filterChapter === 2
                  ? "bg-violet-600 text-white font-bold shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              第 2 章：同余理论 (4个)
            </button>
            <button
              onClick={() => setFilterChapter(3)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filterChapter === 3
                  ? "bg-emerald-600 text-white font-bold shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              第 3 章：不定方程 (1个)
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Selector Cards on top / left, Active Visualizer in Main */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Lab Navigation List */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[850px] overflow-y-auto pr-1">
          {filteredLabs.map((lab, idx) => {
            const isSelected = lab.id === activeLabId;
            return (
              <div
                key={lab.id}
                onClick={() => setActiveLabId(lab.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                  isSelected
                    ? "bg-indigo-950/40 border-indigo-500 shadow-md shadow-indigo-500/10 text-white"
                    : "bg-slate-900/70 border-slate-800/80 hover:border-slate-700 text-slate-300"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-mono ${lab.badgeColor}`}>
                    {lab.badge} · 讲 {lab.section}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    LAB 0{VOLUME_6_LABS.findIndex((l) => l.id === lab.id) + 1}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white mb-1">{lab.name}</h4>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {lab.subtitle}
                </p>

                <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>算法复杂度: {lab.complexity}</span>
                  {isSelected && (
                    <span className="text-indigo-400 flex items-center gap-1 font-semibold">
                      当前操作中 <ArrowRight className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Visualizer Stage */}
        <div className="lg:col-span-8 space-y-4">
          {/* Active Lab Overview Bar */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-indigo-400 font-mono">
                  [LAB 0{VOLUME_6_LABS.findIndex((l) => l.id === currentLab.id) + 1}]
                </span>
                <h3 className="text-base font-bold text-white">{currentLab.name}</h3>
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                {currentLab.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-300 bg-slate-800 px-3 py-1.5 rounded-xl font-mono border border-slate-700">
                算法：{currentLab.algorithmName}
              </span>
            </div>
          </div>

          {/* Render Active Component */}
          <div className="transition-all duration-200">
            {activeLabId === "remainder_lattice" && <RemainderLatticeVisualizer />}
            {activeLabId === "euclidean_bezout" && <EuclideanBezoutStepper />}
            {activeLabId === "eratosthenes_sieve" && <EratosthenesSieveVisualizer />}
            {activeLabId === "factorization_legendre" && <FactorizationLegendreExplorer />}
            {activeLabId === "modular_clock" && <ModularClockVisualizer />}
            {activeLabId === "residue_system" && <ResidueMatrixVisualizer />}
            {activeLabId === "fermat_operator" && <FermatLittleTheoremVisualizer />}
            {activeLabId === "square_fingerprint" && <SquareModFingerprintVisualizer />}
            {activeLabId === "pythagorean_lattice" && <PythagoreanLatticeVisualizer />}
          </div>
        </div>
      </div>
    </div>
  );
}
