"use client";

import React, { useState } from "react";
import { Play, Clock, Search, Filter, BookOpen, CheckCircle } from "lucide-react";
import { VIDEO_CATALOG, VIDEO_STATS, VideoLecture } from "@/data/videoCatalogData";

export default function VideoCatalogViewer() {
  const [filterCat, setFilterCat] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  const filtered = VIDEO_CATALOG.filter((v) => {
    if (filterCat !== "all" && v.category !== filterCat) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchTitle = v.cleanTitle.toLowerCase().includes(q);
      const matchTopic = v.topic.toLowerCase().includes(q);
      const matchId = v.id.toString().includes(q);
      if (!matchTitle && !matchTopic && !matchId) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
          <span className="text-[11px] text-slate-400 font-semibold block">总视频讲数</span>
          <span className="text-xl font-extrabold text-white font-mono mt-0.5 block">
            {VIDEO_STATS.totalCount} 讲
          </span>
          <span className="text-[10px] text-slate-500 font-mono">100% 全量建档</span>
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
            77 讲
          </span>
          <span className="text-[10px] text-slate-500 font-mono">37理论 + 40习题</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
          <span className="text-[11px] text-slate-400 font-semibold block">第2章 同余</span>
          <span className="text-xl font-extrabold text-purple-400 font-mono mt-0.5 block">
            23 讲
          </span>
          <span className="text-[10px] text-slate-500 font-mono">23理论/例题</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
          <span className="text-[11px] text-slate-400 font-semibold block">第3章 不定方程</span>
          <span className="text-xl font-extrabold text-amber-400 font-mono mt-0.5 block">
            52 讲
          </span>
          <span className="text-[10px] text-slate-500 font-mono">16理论 + 36习题</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
          <span className="text-[11px] text-slate-400 font-semibold block">导学与先导</span>
          <span className="text-xl font-extrabold text-rose-400 font-mono mt-0.5 block">
            4 讲
          </span>
          <span className="text-[10px] text-slate-500 font-mono">宏观竞赛指引</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-blue-400" /> 分类:
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
              onClick={() => setFilterCat(cat.key)}
              className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                filterCat === cat.key
                  ? "bg-blue-600 text-white font-bold"
                  : "bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="搜索视频讲号或关键词..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500 font-medium"
          />

        </div>
      </div>

      {/* Video Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
              <tr>
                <th className="p-3.5">序号</th>
                <th className="p-3.5">视频讲座名称</th>
                <th className="p-3.5">所属模块</th>
                <th className="p-3.5">讲授知识点/题目对齐</th>
                <th className="p-3.5">时长</th>
                <th className="p-3.5">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filtered.map((v) => (
                <tr key={v.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-mono text-slate-500 font-bold">#{v.id}</td>
                  <td className="p-3.5 font-semibold text-white flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span className="truncate max-w-xs">{v.cleanTitle}</span>
                  </td>
                  <td className="p-3.5">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium ${
                        v.chapter === 1
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : v.chapter === 2
                          ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                          : v.chapter === 3
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {v.chapter === 0 ? "先导课程" : `第 ${v.chapter} 章`}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-300 max-w-sm truncate">{v.topic}</td>
                  <td className="p-3.5 font-mono text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {v.durationFormatted}
                  </td>
                  <td className="p-3.5">
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                      <CheckCircle className="w-3 h-3" /> 已建档
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
