import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ALL_VOLUMES } from "@/data/allVolumesData";
import { VOLUME_6_CHAPTERS, VOLUME_6_LABS } from "@/data/volume6Structure";
import RemainderLatticeVisualizer from "@/components/visualizers/RemainderLatticeVisualizer";
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
  Award,
  ChevronRight,
  CheckCircle2,
  Flame
} from "lucide-react";

export const metadata = {
  title: "数学奥林匹克小丛书（初中卷6）| 现代多模态研学平台",
  description: "华东师范大学出版社《数学奥林匹克小丛书（第三版）》初中卷 6《整除、同余与不定方程》（冯志刚主编）全本 131 页教材、156 节高清视频、116 题四阶脚手架与 9 大算法多模态实验室"
};

export default function Home() {
  const vol6 = ALL_VOLUMES.find((v) => v.id === 6) || ALL_VOLUMES[5];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-10 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              {/* Breadcrumb Hierarchy */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <Link
                  href="/series"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  数学奥林匹克小丛书 (初中卷 1~8 册)
                </Link>
                <span>/</span>
                <span className="text-white font-semibold">
                  初中卷 6：整除、同余与不定方程
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                  旗舰落地标杆
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                初等数论多模态深度研学平台
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                面向全国初中数学联赛，对华东师大版《数学奥林匹克小丛书》全本 131 页教材（冯志刚领队主编）与韩涛教练 156 节高清视频（25.3 小时）进行全面数字化重构。
                拒绝枯燥死记硬背，将抽象高深的数论定理化为可交互演算的**算法动态可视化实验室**。
              </p>

              {/* Master Volume Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  <Award className="w-3.5 h-3.5 text-blue-400" />
                  冯志刚 领队主编 (131页)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  9 大算法多模态实验室
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  116 题四阶渐进脚手架
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  <Video className="w-3.5 h-3.5 text-rose-400" />
                  156 讲视频谱系全对齐
                </span>
              </div>
            </div>

            {/* Quick Five Module Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 w-full lg:w-80">
              <Link
                href="/theory/ch1"
                className="p-3.5 rounded-xl border bg-slate-900/80 border-slate-800 hover:border-blue-500 hover:bg-blue-950/20 text-slate-200 transition-all group"
              >
                <div className="text-xs font-bold flex items-center justify-between text-white group-hover:text-blue-300">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    理论研学舱
                  </span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-[10px] text-slate-400 mt-1">3大篇章 · 12核心讲次</div>
              </Link>

              <Link
                href="/labs"
                className="p-3.5 rounded-xl border bg-slate-900/80 border-slate-800 hover:border-indigo-500 hover:bg-indigo-950/20 text-slate-200 transition-all group"
              >
                <div className="text-xs font-bold flex items-center justify-between text-white group-hover:text-indigo-300">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                    9大算法实验室
                  </span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-[10px] text-slate-400 mt-1">离散切片 · 模钟 · 费马</div>
              </Link>

              <Link
                href="/exercises"
                className="p-3.5 rounded-xl border bg-slate-900/80 border-slate-800 hover:border-emerald-500 hover:bg-emerald-950/20 text-slate-200 transition-all group"
              >
                <div className="text-xs font-bold flex items-center justify-between text-white group-hover:text-emerald-300">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    116题通关台
                  </span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-[10px] text-slate-400 mt-1">四阶脚手架 · 断点自测</div>
              </Link>

              <Link
                href="/videos"
                className="p-3.5 rounded-xl border bg-slate-900/80 border-slate-800 hover:border-rose-500 hover:bg-rose-950/20 text-slate-200 transition-all group"
              >
                <div className="text-xs font-bold flex items-center justify-between text-white group-hover:text-rose-300">
                  <span className="flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-rose-400" />
                    156讲视频馆
                  </span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-[10px] text-slate-400 mt-1">25.3小时 · 零遗漏检索</div>
              </Link>

              <Link
                href="/series"
                className="p-3.5 rounded-xl border bg-slate-900/80 border-slate-800 hover:border-purple-500 hover:bg-purple-950/20 text-slate-200 transition-all group col-span-2 sm:col-span-1 lg:col-span-2"
              >
                <div className="text-xs font-bold flex items-center justify-between text-white group-hover:text-purple-300">
                  <span className="flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-purple-400" />
                    全套 8 册知识中枢
                  </span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-[10px] text-slate-400 mt-1">代数 · 几何 · 数论 · 组合</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-12">
        {/* Section 1: Three Chapters Navigation Showcase */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                卷 6 三大核心篇章研读入口
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                每篇均包含核心讲次、公式定理、名师心得与配套习题
              </p>
            </div>
            <Link
              href="/theory/ch1"
              className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
            >
              进入研读舱 <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VOLUME_6_CHAPTERS.map((chap) => (
              <div
                key={chap.number}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                      第 {chap.number} 章
                    </span>
                    <span className="text-slate-400">
                      {chap.sections.length} 讲 · {chap.exerciseCount} 题
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">{chap.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {chap.subtitle}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {chap.sections.slice(0, 3).map((sec) => (
                      <div
                        key={sec.id}
                        className="text-xs text-slate-400 flex items-center gap-2 truncate"
                      >
                        <span className="font-mono text-blue-400 text-[11px] shrink-0">
                          {sec.number}
                        </span>
                        <span className="truncate">{sec.title}</span>
                      </div>
                    ))}
                    {chap.sections.length > 3 && (
                      <div className="text-[11px] text-slate-500 pl-6">
                        ...等共 {chap.sections.length} 讲
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
                  <Link
                    href={`/theory/ch${chap.number}`}
                    className="flex-1 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl text-center transition-colors"
                  >
                    理论研读
                  </Link>
                  <Link
                    href={`/exercises/ch${chap.number}`}
                    className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl text-center transition-colors"
                  >
                    习题通关 ({chap.exerciseCount}题)
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: 9 Interactive Algorithm Laboratories Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-400" />
                9 大算法多模态可视化实验室
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                可点击直接进入独立的算法试验沙盒，离散晶格与有向图动画实时演算
              </p>
            </div>
            <Link
              href="/labs"
              className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
            >
              查看全部实验室 <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VOLUME_6_LABS.map((lab, idx) => (
              <Link
                key={lab.id}
                href={`/labs/${lab.id}`}
                className="bg-slate-900 border border-slate-800 hover:border-indigo-500/80 rounded-2xl p-5 transition-all group flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-mono ${lab.badgeColor}`}>
                      {lab.badge} · 第 {lab.section} 讲
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      LAB 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {lab.name}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {lab.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{lab.algorithmName}</span>
                  <span className="text-indigo-400 flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    进入 <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 3: Live Interactive Preview */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                实时沙盒体验
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                算法 01：带余除法几何切片与整除网格
              </h3>
              <p className="text-xs text-slate-400">
                可直接在首页调节参数查看离散切片，或进入实验室全屏演练
              </p>
            </div>

            <Link
              href="/labs/remainder_lattice"
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <span>放大独立试验</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <RemainderLatticeVisualizer />
        </section>
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
            <Link href="/series" className="hover:text-blue-400 transition-colors">
              全套 8 卷中枢
            </Link>
            <span>·</span>
            <Link href="/theory/ch1" className="hover:text-blue-400 transition-colors">
              理论研学
            </Link>
            <span>·</span>
            <Link href="/labs" className="hover:text-blue-400 transition-colors">
              算法实验室
            </Link>
            <span>·</span>
            <Link href="/exercises" className="hover:text-blue-400 transition-colors">
              116题通关
            </Link>
            <span>·</span>
            <Link href="/videos" className="hover:text-blue-400 transition-colors">
              156讲视频
            </Link>
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
