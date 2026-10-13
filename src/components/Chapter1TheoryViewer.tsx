"use client";

import React, { useState } from "react";
import { BookOpen, Video, ChevronDown, ChevronUp, Sparkles, Award } from "lucide-react";
import MathView from "@/components/MathView";
import { CHAPTER_1_SECTIONS, TheorySection } from "@/data/chapter1Data";
import RemainderLatticeVisualizer from "@/components/visualizers/RemainderLatticeVisualizer";
import EuclideanBezoutStepper from "@/components/visualizers/EuclideanBezoutStepper";
import EratosthenesSieveVisualizer from "@/components/visualizers/EratosthenesSieveVisualizer";
import FactorizationLegendreExplorer from "@/components/visualizers/FactorizationLegendreExplorer";

export default function Chapter1TheoryViewer() {
  const [selectedSecCode, setSelectedSecCode] = useState<string>("1.1");
  const [expandedExamples, setExpandedExamples] = useState<Record<string, boolean>>({
    "ex-1-1-1": true,
  });

  const currentSection = CHAPTER_1_SECTIONS.find((s) => s.code === selectedSecCode) || CHAPTER_1_SECTIONS[0];

  const toggleExample = (id: string) => {
    setExpandedExamples((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-8">
      {/* Section Selector Pills */}
      <div className="flex flex-wrap gap-2.5 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl">
        {CHAPTER_1_SECTIONS.map((sec) => {
          const isActive = sec.code === selectedSecCode;
          return (
            <button
              key={sec.code}
              onClick={() => setSelectedSecCode(sec.code)}
              className={`flex-1 min-w-[200px] px-4 py-3 rounded-xl text-left transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 font-semibold"
                  : "bg-slate-950/60 hover:bg-slate-800/60 text-slate-400 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs opacity-75 font-mono">{sec.code} 节</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-300 font-mono">
                  {sec.pageRange}
                </span>
              </div>
              <div className="text-sm font-bold mt-1 truncate">{sec.title}</div>
            </button>
          );
        })}
      </div>

      {/* Section Header Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            第 1 章 · 整除篇 · 第 {currentSection.code} 节
          </span>
          <span className="text-xs text-slate-400 font-mono">
            教材页码: {currentSection.pageRange} (华东师大第三版)
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {currentSection.title}
        </h2>
        <p className="text-sm text-slate-400 font-mono mt-0.5">{currentSection.subtitle}</p>

        <div className="mt-4 p-4 bg-slate-950/70 border border-slate-800 rounded-xl text-sm text-slate-300 leading-relaxed">
          {currentSection.summary}
        </div>

        {/* Han Tao's Video Lectures Grid */}
        <div className="mt-6 border-t border-slate-800 pt-5">
          <div className="flex items-center gap-2 mb-3">
            <Video className="w-4 h-4 text-rose-400" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              配套韩涛教练精讲视频 ({currentSection.videoLectures.length} 讲)
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentSection.videoLectures.map((v) => (
              <div
                key={v.secNum}
                className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-rose-400">第 {v.secNum} 讲</span>
                  <span className="font-mono text-slate-500 text-[11px]">{v.duration}</span>
                </div>
                <div className="text-xs font-semibold text-slate-200 mb-1">{v.topic}</div>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  💡 {v.coreIdea}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Component Visualizer */}
      <div>
        {currentSection.code === "1.1" && <RemainderLatticeVisualizer />}
        {currentSection.code === "1.2" && <EratosthenesSieveVisualizer />}
        {currentSection.code === "1.3" && <EuclideanBezoutStepper />}
        {currentSection.code === "1.4" && <FactorizationLegendreExplorer />}
      </div>

      {/* Definitions and Theorems Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Definitions */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <h3 className="text-base font-bold text-white">核心定义与记号</h3>
          </div>

          <div className="space-y-4">
            {currentSection.definitions.map((d, i) => (
              <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-blue-400 block mb-1.5">{d.name}</span>
                <p className="text-xs text-slate-300 leading-relaxed">{d.content}</p>
                {d.formula && (
                  <div className="mt-2.5 p-2 bg-slate-900/80 rounded border border-slate-800">
                    <MathView math={d.formula} block />
                  </div>
                )}
                {d.notes && (
                  <p className="text-[11px] text-slate-400 mt-2 italic">⚠️ 提示: {d.notes}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Theorems */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
            <Award className="w-4 h-4 text-emerald-400" />
            <h3 className="text-base font-bold text-white">核心性质与基础定理</h3>
          </div>

          <div className="space-y-4">
            {currentSection.theorems.map((t, i) => (
              <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-emerald-400 block mb-1.5">{t.name}</span>
                <p className="text-xs text-slate-200 font-medium mb-1.5">{t.statement}</p>
                {t.formula && (
                  <div className="my-2 p-2 bg-slate-900/80 rounded border border-slate-800">
                    <MathView math={t.formula} block />
                  </div>
                )}
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  <span className="font-semibold text-slate-300">证明要旨：</span>
                  {t.proofOutline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* In-text Examples */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg font-bold text-white">
            教材例题精讲与破局推导 ({currentSection.examples.length} 题)
          </h3>
        </div>

        <div className="space-y-4">
          {currentSection.examples.map((ex) => {
            const isExpanded = expandedExamples[ex.id];
            return (
              <div
                key={ex.id}
                className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleExample(ex.id)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-900/60 transition-colors"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-400 mr-2">
                      例 {ex.number}
                    </span>
                    <span className="text-sm font-semibold text-slate-100">{ex.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {ex.videoRef && (
                      <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
                        对应第 {ex.videoRef.lectureNumber} 讲 ({ex.videoRef.duration})
                      </span>
                    )}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-5 border-t border-slate-800/80 space-y-4 text-xs">
                    <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-slate-200">
                      <span className="font-bold text-slate-400 block mb-1">【原题呈现】</span>
                      <p className="leading-relaxed">{ex.problem}</p>
                    </div>

                    <div className="p-3 bg-amber-950/20 rounded-lg border border-amber-900/40 text-amber-200/90">
                      <span className="font-bold text-amber-400 block mb-1">【分析思路】</span>
                      <p className="leading-relaxed">{ex.analysis}</p>
                    </div>

                    <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">
                      <span className="font-bold text-emerald-400 block mb-2">【规范严密全解】</span>
                      <div className="leading-relaxed whitespace-pre-line space-y-2">
                        {ex.solution}
                      </div>
                    </div>

                    {ex.videoRef && (
                      <div className="p-3 bg-blue-950/30 rounded-lg border border-blue-900/40 text-blue-300 text-[11px] flex items-center gap-2">
                        <Video className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>
                          <strong>韩涛教练点拨：</strong> {ex.videoRef.keyTakeaway}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
