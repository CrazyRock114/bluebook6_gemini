"use client";

import React, { useState } from "react";
import Navbar, { StudyMode } from "@/components/Navbar";
import Volume6TheoryReader from "@/components/Volume6TheoryReader";
import VisualLabsGallery from "@/components/VisualLabsGallery";
import UniversalExerciseStudio from "@/components/UniversalExerciseStudio";
import VideoCatalogViewer from "@/components/VideoCatalogViewer";
import SeriesHubView from "@/components/SeriesHubView";
import SeriesSwitcherModal from "@/components/SeriesSwitcherModal";
import { ALL_VOLUMES } from "@/data/allVolumesData";
import { VOLUME_6_CHAPTERS } from "@/data/volume6Structure";
import {
  BookOpen,
  Sparkles,
  Layers,
  Video,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Compass,
  GraduationCap,
  Award
} from "lucide-react";

export default function Home() {
  const [currentVolumeId, setCurrentVolumeId] = useState<number>(6);
  const [studyMode, setStudyMode] = useState<StudyMode>("theory");
  const [isSeriesModalOpen, setIsSeriesModalOpen] = useState<boolean>(false);
  const [activeChapter, setActiveChapter] = useState<number>(1);

  const currentVolume =
    ALL_VOLUMES.find((v) => v.id === currentVolumeId) || ALL_VOLUMES[5];

  const handleSelectVolume = (volId: number) => {
    setCurrentVolumeId(volId);
    if (volId === 6) {
      setStudyMode("theory");
    } else {
      setStudyMode("series");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Global Series Navigation Header */}
      <Navbar
        currentMode={studyMode}
        onSelectMode={setStudyMode}
        onOpenSeriesSwitcher={() => setIsSeriesModalOpen(true)}
        currentVolumeTitle={currentVolume.fullTitle.replace("数学奥林匹克小丛书（", "").replace("）", "")}
      />

      {/* Series Switcher Modal */}
      <SeriesSwitcherModal
        isOpen={isSeriesModalOpen}
        onClose={() => setIsSeriesModalOpen(false)}
        currentVolumeId={currentVolumeId}
        onSelectVolume={handleSelectVolume}
      />

      {/* Hero Header Section */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-8 pb-7 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-3xl">
              {/* Breadcrumb Hierarchy */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                <button
                  onClick={() => setStudyMode("series")}
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  数学奥林匹克小丛书 (初中卷 1~8 册)
                </button>
                <span>/</span>
                <span className="text-white font-semibold">
                  卷 6：整除、同余与不定方程 (旗舰落地卷)
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                初等数论全景研学工坊
              </h1>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                面向全国初中数学联赛，对华东师大版《数学奥林匹克小丛书》全本 131 页教材（冯志刚主编）与韩涛教练 156 节高清视频（25.3 小时）进行现代多模态交互重塑。
                拒绝死记硬背，将抽象高深的数论定理化为可拖拽、可演算的**动态算法实验室**。
              </p>

              {/* Master Volume Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mt-4 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  <Award className="w-3.5 h-3.5 text-blue-400" />
                  冯志刚 领队主编 (131页)
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  9 大算法多模态实验室
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  116 题四阶渐进脚手架
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  <Video className="w-3.5 h-3.5 text-rose-400" />
                  156 讲视频谱系全对齐
                </span>
              </div>
            </div>

            {/* Quick Mode Switches */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 w-full lg:w-80">
              <button
                onClick={() => setStudyMode("theory")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  studyMode === "theory"
                    ? "bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300"
                }`}
              >
                <div className="text-xs font-bold flex items-center justify-between">
                  <span>📖 理论研学舱</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
                <div className="text-[10px] opacity-80 mt-0.5">3大篇章 · 12讲精读</div>
              </button>

              <button
                onClick={() => setStudyMode("labs")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  studyMode === "labs"
                    ? "bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-500/20"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300"
                }`}
              >
                <div className="text-xs font-bold flex items-center justify-between">
                  <span>🧪 算法实验室</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
                <div className="text-[10px] opacity-80 mt-0.5">9大交互组件 · 算法沙盒</div>
              </button>

              <button
                onClick={() => setStudyMode("exercises")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  studyMode === "exercises"
                    ? "bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-500/20"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300"
                }`}
              >
                <div className="text-xs font-bold flex items-center justify-between">
                  <span>⚔️ 116题通关台</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
                <div className="text-[10px] opacity-80 mt-0.5">四阶脚手架 · 断点自测</div>
              </button>

              <button
                onClick={() => setStudyMode("videos")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  studyMode === "videos"
                    ? "bg-rose-600 border-rose-400 text-white shadow-lg shadow-rose-500/20"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300"
                }`}
              >
                <div className="text-xs font-bold flex items-center justify-between">
                  <span>🎥 156讲伴学馆</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
                <div className="text-[10px] opacity-80 mt-0.5">25.3小时 · 零遗漏检索</div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dynamic Workspace Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {studyMode === "theory" && (
          <Volume6TheoryReader
            initialChapter={activeChapter}
            onNavigateToExercises={(ch) => {
              setActiveChapter(ch);
              setStudyMode("exercises");
            }}
            onNavigateToVideos={(ch) => {
              setActiveChapter(ch);
              setStudyMode("videos");
            }}
          />
        )}

        {studyMode === "labs" && <VisualLabsGallery />}

        {studyMode === "exercises" && (
          <UniversalExerciseStudio initialChapter={activeChapter} />
        )}

        {studyMode === "videos" && <VideoCatalogViewer />}

        {studyMode === "series" && (
          <SeriesHubView
            onEnterVolume6={() => {
              setCurrentVolumeId(6);
              setStudyMode("theory");
            }}
          />
        )}
      </main>

      {/* Global Master Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-slate-300 font-semibold flex items-center gap-2">
              <span>数学奥林匹克小丛书（初中卷 1~8 册）现代多模态研学系统</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 font-mono">
                第三版 · 华东师范大学出版社
              </span>
            </div>
            <p className="text-slate-500 text-[11px]">
              单墫 · 葛军 · 冯志刚 · 沈文选 · 李惟峰 · 周建新 · 柯新立 编著 ｜ 当前旗舰落地卷：初中卷 6《整除、同余与不定方程》
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <button
              onClick={() => setIsSeriesModalOpen(true)}
              className="hover:text-blue-400 transition-colors"
            >
              全套 8 卷矩阵
            </button>
            <span>·</span>
            <span>Next.js 16 + React 19</span>
            <span>·</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Vercel 部署就绪
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
