"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ALL_VOLUMES, VolumeInfo, SERIES_CATEGORIES } from "@/data/allVolumesData";
import {
  BookOpen,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Compass,
  GraduationCap,
  Award,
  Layers,
  ChevronRight
} from "lucide-react";

interface SeriesHubViewProps {
  onEnterVolume6?: () => void;
}

export default function SeriesHubView({ onEnterVolume6 }: SeriesHubViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredVolumes =
    selectedCategory === "all"
      ? ALL_VOLUMES
      : ALL_VOLUMES.filter((v) => v.category === selectedCategory);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Series Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-6 sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
            <span>华东师范大学出版社 · 数学奥林匹克小丛书（初中卷全套 8 册）</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            全套初中奥数圣经“小蓝本”知识图谱中枢
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            由前国家集训队领队单墫教授、冯志刚校长、葛军教授、沈文选教授等全国数论与几何权威名师共同编著。本系统以“现代多模态交互研学”为指引，全面解构全套 8 册共 1,280+ 页经典教材。
            目前已实现以**卷 6《整除、同余与不定方程》为标杆的全量深度落地（116题四阶脚手架 + 9大算法实验室 + 156节高清微课）**，并设立全系列统一架构插槽。
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 rounded-xl border border-slate-800">
              <Award className="w-4 h-4 text-amber-400" />
              全套 8 卷权威名师编审
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 rounded-xl border border-slate-800">
              <BookOpen className="w-4 h-4 text-blue-400" />
              四大核心数学分支齐备
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              卷 6 旗舰标杆 100% 就绪
            </span>
          </div>
        </div>
      </section>

      {/* Learning Roadmap Guide */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Compass className="w-5 h-5 text-indigo-400" />
          <h3 className="text-base font-bold text-white">全国初中数学联赛推荐研修路线</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-bold text-amber-400 font-mono mb-1">STAGE 1 · 代数奠基</div>
            <div className="text-sm font-bold text-white mb-1.5">初一至初二上</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              研读卷 1《因式分解技巧》与卷 2《方程与方程组》，打牢数式恒等变形与消元基本功。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-bold text-emerald-400 font-mono mb-1">STAGE 2 · 几何双璧</div>
            <div className="text-sm font-bold text-white mb-1.5">初二上至初二下</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              研读卷 4《三角形与四边形》与卷 5《圆》，掌握辅助线添加、角转移、四点共圆与圆幂定理。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/50 shadow-md shadow-blue-500/10">
            <div className="text-xs font-bold text-blue-400 font-mono mb-1">STAGE 3 · 数论巅峰 (本站标杆)</div>
            <div className="text-sm font-bold text-white mb-1.5">初二下至初三上</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              研读卷 6《整除、同余与不定方程》，掌握带余除法、费马小定理与勾股方程通解。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-bold text-purple-400 font-mono mb-1">STAGE 4 · 综合策略</div>
            <div className="text-sm font-bold text-white mb-1.5">初三联赛冲刺</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              研读卷 3《一次与二次函数》、卷 7《组合趣题》与卷 8《解题方法与策略》，冲击联赛一等奖。
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          {SERIES_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.key
                  ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/20"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-400 font-mono">
          当前展示：{filteredVolumes.length} 册权威教材
        </div>
      </div>

      {/* 8-Volume Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredVolumes.map((vol) => {
          const isFlagship = vol.id === 6;

          return (
            <div
              key={vol.id}
              className={`rounded-2xl border transition-all flex flex-col justify-between overflow-hidden relative ${
                isFlagship
                  ? "bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-950 border-blue-500/80 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/30"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    初中卷 {vol.volumeNumber}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-mono ${vol.badgeColor}`}>
                    {vol.categoryName}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-white mb-1.5 flex items-center gap-1.5">
                  {vol.title}
                </h3>

                <div className="text-xs text-slate-400 mb-3 space-y-0.5">
                  <div>主编：<span className="text-slate-200 font-medium">{vol.author}</span></div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    全书 {vol.totalPages} 页 · {vol.chapterCount} 讲
                  </div>
                </div>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {vol.description}
                </p>

                {/* Topics Pills */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {vol.keyTopics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-4 bg-slate-950/80 border-t border-slate-800/80 mt-auto">
                {isFlagship ? (
                  <Link
                    href="/theory/ch1"
                    className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/25"
                  >
                    <span>进入研学舱 (已深度落地)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="text-[11px] font-mono">架构接口已统一</span>
                    <span className="text-[11px] text-slate-400">大纲已录入</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
