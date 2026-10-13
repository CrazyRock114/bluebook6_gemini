"use client";

import React, { useState } from "react";
import { VOLUME_6_CHAPTER_THEORY, TheorySection } from "@/data/volume6FullTheoryData";
import { VOLUME_6_CHAPTERS } from "@/data/volume6Structure";
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
  BookOpen,
  Sparkles,
  Award,
  ChevronRight,
  Layers,
  ArrowRight,
  Play,
  Lightbulb,
  CheckCircle2,
  Cpu
} from "lucide-react";

import Link from "next/link";

interface Volume6TheoryReaderProps {
  initialChapter?: number;
  onNavigateToExercises?: (chapter: number) => void;
  onNavigateToVideos?: (chapter: number) => void;
}

export default function Volume6TheoryReader({
  initialChapter = 1,
  onNavigateToExercises,
  onNavigateToVideos
}: Volume6TheoryReaderProps) {
  const [selectedChapter, setSelectedChapter] = useState<number>(initialChapter);
  const [selectedSectionId, setSelectedSectionId] = useState<string>("1.1");
  const [showEmbeddedLab, setShowEmbeddedLab] = useState<boolean>(true);

  const chapterData = VOLUME_6_CHAPTER_THEORY[selectedChapter];
  const currentSection =
    chapterData.sections.find((s) => s.id === selectedSectionId) ||
    chapterData.sections[0];

  const handleSelectChapter = (chNum: number) => {
    setSelectedChapter(chNum);
    const newChapterData = VOLUME_6_CHAPTER_THEORY[chNum];
    if (newChapterData.sections.length > 0) {
      setSelectedSectionId(newChapterData.sections[0].id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Chapter Selection Bar with real URLs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {VOLUME_6_CHAPTERS.map((chap) => {
          const isSelected = chap.number === selectedChapter;
          return (
            <Link
              key={chap.number}
              href={`/theory/ch${chap.number}`}
              onClick={() => handleSelectChapter(chap.number)}
              className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? "bg-blue-950/40 border-blue-500 text-white shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/40"
                  : "bg-slate-900/70 border-slate-800 hover:border-slate-700 text-slate-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-blue-400">
                    第 {chap.number} 章
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {chap.sections.length} 讲 · {chap.exerciseCount} 题 · {chap.videoCount} 视频
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{chap.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-1 leading-relaxed">
                  {chap.subtitle}
                </p>
              </div>

              {isSelected && (
                <div className="mt-3 pt-2 border-t border-blue-500/30 flex items-center justify-between text-[11px] text-blue-400 font-semibold font-mono">
                  <span>当前研读中</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Main Chapter Content Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Section Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-3 sticky top-20">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-800">
              <span>本章核心讲次目录</span>
              <span className="font-mono text-blue-400">{chapterData.sections.length} 讲</span>
            </div>

            <div className="space-y-1.5">
              {chapterData.sections.map((sec) => {
                const isActive = sec.id === currentSection.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setSelectedSectionId(sec.id)}
                    className={`w-full p-2.5 rounded-xl text-left text-xs font-medium transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/20"
                        : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="font-mono text-[11px] opacity-80 shrink-0">
                        {sec.number}
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </div>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Quick Jumps with real URL Links */}
            <div className="pt-3 border-t border-slate-800 space-y-2">
              <Link
                href={`/exercises/ch${selectedChapter}`}
                className="w-full py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  本章通关题库
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {selectedChapter === 3 ? "36 题" : "40 题"}
                </span>
              </Link>

              <Link
                href="/videos"
                className="w-full py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5 text-rose-400" />
                  本章视频精讲
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {chapterData.chapterNumber === 1 ? "37 讲" : chapterData.chapterNumber === 2 ? "49 讲" : "70 讲"}
                </span>
              </Link>
            </div>
          </div>

          {/* Teacher Quote Card */}
          <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-500/20 rounded-2xl p-4 text-xs text-slate-300 space-y-2">
            <div className="flex items-center gap-2 font-bold text-blue-300">
              <Award className="w-4 h-4 text-amber-400" />
              <span>冯志刚领队名师心得</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400 whitespace-pre-line">
              {currentSection.teacherTips}
            </p>
          </div>
        </div>

        {/* Right Section In-Depth Content */}
        <div className="lg:col-span-9 space-y-6">
          {/* Section Header */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  第 {currentSection.number} 讲
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  教材对应页码：{currentSection.pdfPages}
                </span>
              </div>

              {currentSection.associatedLabId && (
                <button
                  onClick={() => setShowEmbeddedLab(!showEmbeddedLab)}
                  className="px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{showEmbeddedLab ? "收起交互沙盒" : "展开交互沙盒"}</span>
                </button>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {currentSection.title}
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              {currentSection.content}
            </p>

            {/* Core Theorems Cards */}
            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>核心定义与定律（定理）</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentSection.keyTheorems.map((thm, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2"
                  >
                    <div className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      {thm.name}
                    </div>
                    <div className="py-1 px-2.5 rounded bg-slate-900 border border-slate-800/80 font-mono text-xs text-white overflow-x-auto">
                      <MathView math={thm.formula} />
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {thm.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Embedded Visualizer Sandbox if applicable */}
          {showEmbeddedLab && currentSection.associatedLabId && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-mono">
                <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                  <Cpu className="w-3.5 h-3.5" />
                  原位配套算法实验室
                </span>
                <span>可直接在此输入参数实时探索</span>
              </div>

              {currentSection.associatedLabId === "remainder_lattice" && (
                <RemainderLatticeVisualizer />
              )}
              {currentSection.associatedLabId === "euclidean_bezout" && (
                <EuclideanBezoutStepper />
              )}
              {currentSection.associatedLabId === "eratosthenes_sieve" && (
                <EratosthenesSieveVisualizer />
              )}
              {currentSection.associatedLabId === "factorization_legendre" && (
                <FactorizationLegendreExplorer />
              )}
              {currentSection.associatedLabId === "modular_clock" && (
                <ModularClockVisualizer />
              )}
              {currentSection.associatedLabId === "residue_system" && (
                <ResidueMatrixVisualizer />
              )}
              {currentSection.associatedLabId === "fermat_operator" && (
                <FermatLittleTheoremVisualizer />
              )}
              {currentSection.associatedLabId === "square_fingerprint" && (
                <SquareModFingerprintVisualizer />
              )}
              {currentSection.associatedLabId === "pythagorean_lattice" && (
                <PythagoreanLatticeVisualizer />
              )}
            </div>
          )}

          {/* Classic Textbook Examples */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                教材经典例题深度研析
              </span>
              <span className="font-mono text-slate-500">
                {currentSection.examples.length} 道权威母题
              </span>
            </div>

            {currentSection.examples.map((ex) => (
              <div
                key={ex.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-lg"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold font-mono">
                      例题 {ex.index}
                    </span>
                    <h4 className="text-base font-bold text-white">{ex.title}</h4>
                  </div>
                </div>

                {/* Problem Stem */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-sm text-slate-200 leading-relaxed">
                  <MathView math={ex.stem} />
                </div>

                {/* Analysis */}
                <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-900/30 text-xs space-y-1">
                  <div className="font-bold text-blue-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    破局思路剖析
                  </div>
                  <div className="text-slate-300 leading-relaxed font-mono">
                    <MathView math={ex.analysis} />
                  </div>
                </div>

                {/* Solution */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                  <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    规范数学解答与证明
                  </div>
                  <div className="text-slate-300 leading-relaxed font-mono whitespace-pre-line">
                    <MathView math={ex.solution} />
                  </div>
                </div>

                {/* Teacher Notes */}
                {ex.notes && (
                  <div className="text-[11px] text-slate-400 italic font-mono pt-1">
                    💡 点拨：{ex.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
