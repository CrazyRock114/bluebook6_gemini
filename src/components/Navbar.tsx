"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Sparkles,
  PlayCircle,
  Layers,
  Cpu,
  Compass,
  ChevronDown,
  GraduationCap,
  Menu,
  X
} from "lucide-react";

export type StudyMode = "theory" | "labs" | "exercises" | "videos" | "series";

interface NavbarProps {
  currentMode: StudyMode;
  onSelectMode: (mode: StudyMode) => void;
  onOpenSeriesSwitcher: () => void;
  currentVolumeTitle?: string;
}

export default function Navbar({
  currentMode,
  onSelectMode,
  onOpenSeriesSwitcher,
  currentVolumeTitle = "初中卷 6：整除、同余与不定方程"
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand & Volume Selector Button */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-sm sm:text-base tracking-tight truncate">
                数学奥林匹克小丛书
              </span>
              <button
                onClick={onOpenSeriesSwitcher}
                className="hidden sm:inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/25 hover:bg-blue-500/20 font-semibold font-mono transition-all"
              >
                <span>全套 8 册切换</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>

            <div className="text-[11px] text-slate-400 tracking-wide font-mono flex items-center gap-1.5">
              <span className="text-slate-300 font-medium truncate max-w-[200px] sm:max-w-none">
                {currentVolumeTitle}
              </span>
              <span className="hidden md:inline text-slate-500">· 冯志刚主编</span>
            </div>
          </div>
        </div>

        {/* Center / Right: Universal Study Modes */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => onSelectMode("theory")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              currentMode === "theory"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            理论研学舱
          </button>

          <button
            onClick={() => onSelectMode("labs")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              currentMode === "labs"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            9大算法实验室
          </button>

          <button
            onClick={() => onSelectMode("exercises")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              currentMode === "exercises"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            116题通关台
          </button>

          <button
            onClick={() => onSelectMode("videos")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              currentMode === "videos"
                ? "bg-rose-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <PlayCircle className="w-3.5 h-3.5 text-rose-400" />
            156讲视频谱系
          </button>

          <button
            onClick={() => onSelectMode("series")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              currentMode === "series"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            全套8卷中枢
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenSeriesSwitcher}
            className="text-[11px] px-2 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/25 font-mono"
          >
            8卷切换
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden p-4 bg-slate-950 border-b border-slate-800 space-y-2 animate-in slide-in-from-top-2">
          <button
            onClick={() => {
              onSelectMode("theory");
              setMobileMenuOpen(false);
            }}
            className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left flex items-center gap-2 ${
              currentMode === "theory" ? "bg-blue-600 text-white" : "text-slate-300"
            }`}
          >
            <BookOpen className="w-4 h-4 text-blue-400" />
            理论研学舱 (第1/2/3章)
          </button>

          <button
            onClick={() => {
              onSelectMode("labs");
              setMobileMenuOpen(false);
            }}
            className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left flex items-center gap-2 ${
              currentMode === "labs" ? "bg-indigo-600 text-white" : "text-slate-300"
            }`}
          >
            <Cpu className="w-4 h-4 text-indigo-400" />
            9大算法多模态实验室
          </button>

          <button
            onClick={() => {
              onSelectMode("exercises");
              setMobileMenuOpen(false);
            }}
            className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left flex items-center gap-2 ${
              currentMode === "exercises" ? "bg-emerald-600 text-white" : "text-slate-300"
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            116题通关工作台
          </button>

          <button
            onClick={() => {
              onSelectMode("videos");
              setMobileMenuOpen(false);
            }}
            className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left flex items-center gap-2 ${
              currentMode === "videos" ? "bg-rose-600 text-white" : "text-slate-300"
            }`}
          >
            <PlayCircle className="w-4 h-4 text-rose-400" />
            156讲全景视频谱系
          </button>

          <button
            onClick={() => {
              onSelectMode("series");
              setMobileMenuOpen(false);
            }}
            className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left flex items-center gap-2 ${
              currentMode === "series" ? "bg-purple-600 text-white" : "text-slate-300"
            }`}
          >
            <Compass className="w-4 h-4 text-purple-400" />
            全套8卷宏观中枢
          </button>
        </div>
      )}
    </header>
  );
}
