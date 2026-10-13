"use client";

import React from "react";
import { BookOpen, Sparkles, PlayCircle, Layers, CheckCircle2 } from "lucide-react";

interface NavbarProps {
  currentModule: "ch1_theory" | "ch1_exercises" | "video_catalog";
  onSelectModule: (mod: "ch1_theory" | "ch1_exercises" | "video_catalog") => void;
}

export default function Navbar({ currentModule, onSelectModule }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-base tracking-tight">
                小蓝书第6册
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold font-mono">
                第三版 · 初中卷
              </span>
            </div>
            <div className="text-[11px] text-slate-400 tracking-wide font-mono">
              整除 · 同余 · 不定方程 · 可视化交互学习工坊
            </div>
          </div>
        </div>

        {/* Navigation Switchers */}
        <nav className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => onSelectModule("ch1_theory")}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              currentModule === "ch1_theory"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            第1章 理论与可视化
          </button>

          <button
            onClick={() => onSelectModule("ch1_exercises")}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              currentModule === "ch1_exercises"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            第1章 习题工作台 (40题)
          </button>

          <button
            onClick={() => onSelectModule("video_catalog")}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              currentModule === "video_catalog"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <PlayCircle className="w-3.5 h-3.5 text-rose-400" />
            156讲视频全景谱系
          </button>
        </nav>

        {/* Right status badge */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Vercel 部署就绪
          </span>
        </div>
      </div>
    </header>
  );
}
