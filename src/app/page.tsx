"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Chapter1TheoryViewer from "@/components/Chapter1TheoryViewer";
import Chapter1ExerciseWorkshop from "@/components/Chapter1ExerciseWorkshop";
import VideoCatalogViewer from "@/components/VideoCatalogViewer";
import { BookOpen, Sparkles, Layers, Video, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

export default function Home() {
  const [currentModule, setCurrentModule] = useState<"ch1_theory" | "ch1_exercises" | "video_catalog">("ch1_theory");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Global Navigation Header */}
      <Navbar currentModule={currentModule} onSelectModule={setCurrentModule} />

      {/* Hero Header Banner */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>初中奥数圣经小蓝本 · 现代多模态交互重塑计划</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                初中卷 6：整除、同余与不定方程
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                针对华东师范大学出版社《数学奥林匹克小丛书（第三版）》全本 131 页教材与韩涛教练 156 节高清视频（25.3 小时）进行全面重构。
                拒绝枯燥死记硬背，将抽象高深的数论原理化为可拖拽、可演算、可探索的**算法动态可视化组件**。
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mt-5 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  王元院士序 · 单墫/冯志刚/葛军编审
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  <Video className="w-3.5 h-3.5 text-rose-400" />
                  韩涛教练 156 节全量对齐
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  9 大交互可视化算法组件
                </span>
              </div>
            </div>

            {/* Quick Switch Cards */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-72">
              <button
                onClick={() => setCurrentModule("ch1_theory")}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  currentModule === "ch1_theory"
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300"
                }`}
              >
                <div>
                  <div className="text-xs font-bold">第 1 章：整除理论探索</div>
                  <div className="text-[11px] opacity-80 mt-0.5">37 讲微课 · 4 大可视化组件</div>
                </div>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={() => setCurrentModule("ch1_exercises")}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  currentModule === "ch1_exercises"
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300"
                }`}
              >
                <div>
                  <div className="text-xs font-bold">第 1 章：40 题全解工作台</div>
                  <div className="text-[11px] opacity-80 mt-0.5">四阶脚手架 · 断点自测与沙盒</div>
                </div>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={() => setCurrentModule("video_catalog")}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  currentModule === "video_catalog"
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300"
                }`}
              >
                <div>
                  <div className="text-xs font-bold">156 讲全景视频谱系</div>
                  <div className="text-[11px] opacity-80 mt-0.5">25.3 小时 · 零遗漏检索库</div>
                </div>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {currentModule === "ch1_theory" && <Chapter1TheoryViewer />}
        {currentModule === "ch1_exercises" && <Chapter1ExerciseWorkshop />}
        {currentModule === "video_catalog" && <VideoCatalogViewer />}
      </main>

      {/* Global Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-slate-300 font-semibold flex items-center gap-2">
              <span>小蓝书第6册 (整除 同余与不定方程) 现代互动教学系统</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 font-mono">
                v1.0-alpha
              </span>
            </div>
            <p className="text-slate-500 text-[11px]">
              数据源：华东师范大学出版社小蓝本第三版 + 韩涛教练讲授 156 节正片视频全量对齐
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              Vercel 部署零配置兼容 (Next.js 16)
            </span>
            <span className="text-slate-600">|</span>
            <span>TypeScript · Tailwind CSS · KaTeX</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
