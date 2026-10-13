"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Play,
  Clock,
  Search,
  Filter,
  BookOpen,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Lightbulb,
  FileText,
  Copy,
  Check,
  ExternalLink,
  X,
  Bookmark,
  Layers,
  GraduationCap
} from "lucide-react";
import { VIDEO_CATALOG, VIDEO_STATS, VideoLecture } from "@/data/videoCatalogData";
import InteractiveTranscriptVault from "@/components/InteractiveTranscriptVault";

export default function VideoCatalogViewer() {
  const [filterCat, setFilterCat] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [modalVideo, setModalVideo] = useState<VideoLecture | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Filtered lectures
  const filtered = useMemo(() => {
    return VIDEO_CATALOG.filter((v) => {
      if (filterCat !== "all" && v.category !== filterCat) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchTitle = v.cleanTitle.toLowerCase().includes(q);
        const matchTopic = v.topic.toLowerCase().includes(q);
        const matchId = v.id.toString().includes(q);
        const matchSummary = v.summary.toLowerCase().includes(q);
        const matchInsight = v.teacherInsight.toLowerCase().includes(q);
        const matchTranscript = v.fullTranscript.toLowerCase().includes(q);
        const matchPage = v.associatedPdfPage.toLowerCase().includes(q);
        const matchHighlights = v.keyHighlights.some((h) => h.toLowerCase().includes(q));

        if (
          !matchTitle &&
          !matchTopic &&
          !matchId &&
          !matchSummary &&
          !matchInsight &&
          !matchTranscript &&
          !matchPage &&
          !matchHighlights
        ) {
          return false;
        }
      }
      return true;
    });
  }, [filterCat, search]);

  const handleCopyTranscript = (video: VideoLecture, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(video.fullTranscript);
    setCopiedId(video.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
            韩涛教练 156 讲全量视频精讲档案库
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            小蓝本初中卷6 · 视频谱系全景建档与板书实录
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
            收录全部 156 讲高清名师微课（总时长 25.3 小时，91,122 秒）。每节微课均配备
            <span className="text-blue-300 font-medium">【讲授全景摘要】</span>、
            <span className="text-amber-300 font-medium">【核心重点标注】</span>、
            <span className="text-emerald-300 font-medium">【韩涛教练破局思维点】</span>及
            <span className="text-purple-300 font-medium">【开场与中场黑板板书全文实录 (OCR)】</span>
            ，全面支持理论章节与 116 道实战赛题的原位双向跳转联动。
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
          <span className="text-[11px] text-slate-400 font-semibold block">总视频讲数</span>
          <span className="text-xl font-extrabold text-white font-mono mt-0.5 block">
            {VIDEO_STATS.totalCount} 讲
          </span>
          <span className="text-[10px] text-emerald-400 font-mono">100% 全量建档</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
          <span className="text-[11px] text-slate-400 font-semibold block">课程总时长</span>
          <span className="text-xl font-extrabold text-blue-400 font-mono mt-0.5 block">
            {VIDEO_STATS.totalDurationHours} 小时
          </span>
          <span className="text-[10px] text-slate-500 font-mono">91,122 秒</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
          <span className="text-[11px] text-slate-400 font-semibold block">第1章 整除</span>
          <span className="text-xl font-extrabold text-emerald-400 font-mono mt-0.5 block">
            {VIDEO_STATS.ch1TheoryCount + VIDEO_STATS.ch1ExerciseCount} 讲
          </span>
          <span className="text-[10px] text-slate-500 font-mono">37理论 + 40习题</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
          <span className="text-[11px] text-slate-400 font-semibold block">第2章 同余</span>
          <span className="text-xl font-extrabold text-purple-400 font-mono mt-0.5 block">
            {VIDEO_STATS.ch2TheoryCount} 讲
          </span>
          <span className="text-[10px] text-slate-500 font-mono">23理论精讲</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
          <span className="text-[11px] text-slate-400 font-semibold block">第3章 不定方程</span>
          <span className="text-xl font-extrabold text-amber-400 font-mono mt-0.5 block">
            {VIDEO_STATS.ch3TheoryCount + VIDEO_STATS.ch3ExerciseCount} 讲
          </span>
          <span className="text-[10px] text-slate-500 font-mono">16理论 + 36习题</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
          <span className="text-[11px] text-slate-400 font-semibold block">导学与先导</span>
          <span className="text-xl font-extrabold text-rose-400 font-mono mt-0.5 block">
            {VIDEO_STATS.introCount} 讲
          </span>
          <span className="text-[10px] text-slate-500 font-mono">宏观竞赛指引</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5 text-blue-400" /> 分类筛选:
          </span>
          {[
            { key: "all", label: "全部 (156)" },
            { key: "ch1_theory", label: "第1章理论 (37)" },
            { key: "ch1_ex", label: "第1章习题 (40)" },
            { key: "ch2_theory", label: "第2章理论 (23)" },
            { key: "ch3_theory", label: "第3章理论 (16)" },
            { key: "ch3_ex", label: "第3章习题 (36)" },
            { key: "intro", label: "导学 (4)" },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setFilterCat(cat.key);
                setExpandedId(null);
              }}
              className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                filterCat === cat.key
                  ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20"
                  : "bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="搜索讲号、摘要、板书文字、考点..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-8 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500 font-medium placeholder:text-slate-500"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Result Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-mono">
        <span>
          当前匹配：<strong className="text-blue-400">{filtered.length}</strong> / 156 节讲座
          {search && <span className="text-slate-500 ml-2">（检索词：“{search}”）</span>}
        </span>
        <span className="text-[11px] text-slate-500">点击任意行即可原位展开【完整讲授摘要 / 核心重点标注 / 板书实录】</span>
      </div>

      {/* Video Table & Accordion Cards */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-300 border-collapse">
            <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
              <tr>
                <th className="p-3.5 w-16 text-center">讲号</th>
                <th className="p-3.5 min-w-[180px]">视频讲座名称</th>
                <th className="p-3.5 w-28">所属模块</th>
                <th className="p-3.5 min-w-[240px]">讲授主题 / 题目概要</th>
                <th className="p-3.5 w-24">时长</th>
                <th className="p-3.5 w-24">教材对应</th>
                <th className="p-3.5 w-28 text-center">操作与档案</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filtered.map((v) => {
                const isExpanded = expandedId === v.id;
                return (
                  <React.Fragment key={v.id}>
                    <tr
                      onClick={() => toggleExpand(v.id)}
                      className={`cursor-pointer transition-colors ${
                        isExpanded
                          ? "bg-slate-800/70 border-l-4 border-l-blue-500"
                          : "hover:bg-slate-800/40"
                      }`}
                    >
                      <td className="p-3.5 font-mono text-slate-400 font-bold text-center">
                        #{v.id}
                      </td>
                      <td className="p-3.5 font-semibold text-white">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                            <Play className="w-3 h-3 text-blue-400" />
                          </div>
                          <span className="truncate max-w-[220px]" title={v.cleanTitle}>
                            {v.cleanTitle}
                          </span>
                        </div>
                      </td>
                      <td className="p-3.5">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium inline-block ${
                            v.chapter === 1
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : v.chapter === 2
                              ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                              : v.chapter === 3
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                          }`}
                        >
                          {v.chapter === 0 ? "先导课程" : `第 ${v.chapter} 章`}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-300">
                        <span className="line-clamp-1 text-slate-300 font-medium" title={v.topic}>
                          {v.topic}
                        </span>
                      </td>
                      <td className="p-3.5 font-mono text-slate-400 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-slate-500 shrink-0" />
                          {v.durationFormatted}
                        </div>
                      </td>
                      <td className="p-3.5 font-mono text-slate-400 whitespace-nowrap">
                        <span className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px]">
                          {v.associatedPdfPage.split(" ")[0]}
                        </span>
                      </td>
                      <td className="p-3.5 text-center whitespace-nowrap">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(v.id);
                          }}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                            isExpanded
                              ? "bg-blue-600 text-white shadow-sm"
                              : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                          }`}
                        >
                          {isExpanded ? "收起档案" : "展开档案"}
                          {isExpanded ? (
                            <ChevronUp className="w-3 h-3" />
                          ) : (
                            <ChevronDown className="w-3 h-3" />
                          )}
                        </button>
                      </td>
                    </tr>

                    {/* Inline Expanded Dossier Card */}
                    {isExpanded && (
                      <tr className="bg-slate-950/90 border-y border-slate-800">
                        <td colSpan={7} className="p-4 sm:p-6 space-y-5">
                          {/* Top Bar of Expanded Card */}
                          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold">
                                讲座档案 #{v.id}
                              </span>
                              <h3 className="text-sm sm:text-base font-bold text-white">
                                {v.cleanTitle} · 精讲微课全宗档案
                              </h3>
                              <span className="text-xs text-slate-400 font-mono">
                                （{v.durationFormatted}）
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                onClick={(e) => handleCopyTranscript(v, e)}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                              >
                                {copiedId === v.id ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-emerald-400">已复制板书实录</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                                    <span>复制板书实录</span>
                                  </>
                                )}
                              </button>

                              <button
                                onClick={() => setModalVideo(v)}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30 text-blue-300 text-xs font-medium transition-colors"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                全屏研读卡
                              </button>

                              {v.relatedTheoryUrl && (
                                <Link
                                  href={v.relatedTheoryUrl}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-600/20 border border-emerald-500/30 hover:bg-emerald-600/30 text-emerald-300 text-xs font-medium transition-colors"
                                >
                                  <BookOpen className="w-3.5 h-3.5" />
                                  研读理论
                                </Link>
                              )}

                              {v.relatedExerciseUrl && (
                                <Link
                                  href={v.relatedExerciseUrl}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-600/20 border border-amber-500/30 hover:bg-amber-600/30 text-amber-300 text-xs font-medium transition-colors"
                                >
                                  <CheckCircle className="w-3.5 h-3.5" />
                                  挑战配套习题
                                </Link>
                              )}
                            </div>
                          </div>

                          {/* 4 Pillars Grid */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {/* Pillar 1: Summary */}
                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                                <FileText className="w-4 h-4 text-blue-400" />
                                讲授全景摘要与课程定位
                              </div>
                              <p className="text-xs text-slate-300 leading-relaxed">
                                {v.summary}
                              </p>
                              <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
                                <Bookmark className="w-3.5 h-3.5 text-slate-500" />
                                对应小蓝本教材：
                                <span className="text-slate-200 font-mono font-medium">
                                  {v.associatedPdfPage}
                                </span>
                              </div>
                            </div>

                            {/* Pillar 2: Teacher Insight */}
                            <div className="bg-slate-900 border border-amber-500/20 rounded-xl p-4 space-y-2 bg-gradient-to-br from-slate-900 to-amber-950/20">
                              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                                <Lightbulb className="w-4 h-4 text-amber-400" />
                                韩涛教练破局思维点与避坑警示
                              </div>
                              <p className="text-xs text-amber-200/90 leading-relaxed font-sans">
                                {v.teacherInsight}
                              </p>
                              <div className="text-[11px] text-slate-400 pt-1">
                                💡 竞赛心法：审题时先动笔验算小整数，抓住不变量与整除奇偶性。
                              </div>
                            </div>
                          </div>

                          {/* Pillar 3: Highlights Badges */}
                          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                              <Sparkles className="w-4 h-4 text-emerald-400" />
                              核心考点与要点标注（高光聚焦）
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {v.keyHighlights.map((hl, i) => (
                                <div
                                  key={i}
                                  className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-start gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                                  <span className="leading-relaxed">{hl}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Pillar 4: Interactive Timestamp Transcript & Board Vault */}
                          <InteractiveTranscriptVault video={v} />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Full Modal Viewer for Dedicated Dossier Inspection */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold">
                    第 #{modalVideo.id} 讲
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-mono">
                    {modalVideo.durationFormatted}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {modalVideo.associatedPdfPage}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  {modalVideo.cleanTitle} · 全景教学微课档案卡
                </h2>
              </div>
              <button
                onClick={() => setModalVideo(null)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1 text-xs">
              {/* Summary */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                  <FileText className="w-4 h-4 text-blue-400" />
                  讲授全景摘要与目标
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {modalVideo.summary}
                </p>
              </div>

              {/* Teacher Insight */}
              <div className="bg-gradient-to-br from-slate-950 to-amber-950/20 border border-amber-500/30 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  韩涛教练破局思维点与避坑警示
                </div>
                <p className="text-amber-200 leading-relaxed text-sm">
                  {modalVideo.teacherInsight}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  核心考点与方法要点标注
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {modalVideo.keyHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Timestamp Transcript & Board Vault */}
              <InteractiveTranscriptVault video={modalVideo} />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
              <div className="text-xs text-slate-400">
                对应教材：
                <span className="text-white font-mono">{modalVideo.associatedPdfPage}</span>
              </div>
              <div className="flex items-center gap-2">
                {modalVideo.relatedTheoryUrl && (
                  <Link
                    href={modalVideo.relatedTheoryUrl}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5" /> 前往对应章节理论研读
                  </Link>
                )}
                {modalVideo.relatedExerciseUrl && (
                  <Link
                    href={modalVideo.relatedExerciseUrl}
                    className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-medium transition-colors flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5" /> 前往挑战配套习题
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
