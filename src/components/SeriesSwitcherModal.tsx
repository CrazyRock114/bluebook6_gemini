"use client";

import React, { useState } from "react";
import { ALL_VOLUMES, VolumeInfo, SERIES_CATEGORIES } from "@/data/allVolumesData";
import { BookOpen, X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Layers } from "lucide-react";

interface SeriesSwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentVolumeId: number;
  onSelectVolume: (volId: number) => void;
}

export default function SeriesSwitcherModal({
  isOpen,
  onClose,
  currentVolumeId,
  onSelectVolume
}: SeriesSwitcherModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  if (!isOpen) return null;

  const filteredVolumes =
    selectedCategory === "all"
      ? ALL_VOLUMES
      : ALL_VOLUMES.filter((v) => v.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                数学奥林匹克小丛书（初中卷）全套 8 册知识矩阵
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                  华东师大版 · 第三版
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                单墫 / 葛军 / 冯志刚 / 沈文选 / 李惟峰 / 周建新 / 柯新立 编审
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-6 py-3 border-b border-slate-800/80 bg-slate-950/50 flex flex-wrap items-center gap-2">
          {SERIES_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.key
                  ? "bg-blue-600 text-white shadow-sm font-semibold"
                  : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Volume Cards Grid */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVolumes.map((vol) => {
            const isActive = vol.id === currentVolumeId;
            const isReady = vol.status === "active";

            return (
              <div
                key={vol.id}
                onClick={() => {
                  if (vol.id === 6) {
                    onSelectVolume(6);
                    onClose();
                  }
                }}
                className={`p-5 rounded-2xl border transition-all relative flex flex-col justify-between ${
                  isActive
                    ? "bg-blue-950/30 border-blue-500/80 shadow-lg shadow-blue-500/10"
                    : isReady
                    ? "bg-slate-950/60 border-slate-800 hover:border-slate-700 cursor-pointer"
                    : "bg-slate-950/40 border-slate-800/70 opacity-80"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        卷 {vol.volumeNumber}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-mono ${vol.badgeColor}`}>
                        {vol.categoryName}
                      </span>
                    </div>

                    {isReady ? (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
                        <CheckCircle2 className="w-3 h-3" />
                        深度交互就绪 (标杆)
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full font-mono">
                        体系大纲已录入
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                    {vol.title}
                  </h3>

                  <div className="text-xs text-slate-400 mb-2.5 flex items-center gap-2">
                    <span className="text-slate-300 font-medium">主编：{vol.author}</span>
                    <span>·</span>
                    <span>{vol.totalPages} 页</span>
                    <span>·</span>
                    <span>{vol.chapterCount} 讲</span>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                    {vol.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {vol.highlights.slice(0, 3).map((hl) => (
                      <span
                        key={hl}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    适用：{vol.targetAudience}
                  </span>

                  {isReady ? (
                    <button
                      onClick={() => {
                        onSelectVolume(vol.id);
                        onClose();
                      }}
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 shadow-sm"
                    >
                      {isActive ? "正在研读" : "进入研学舱"}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      规划扩展卷
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>全套 8 册统一遵循通用奥数教学脚手架引擎与 LaTeX 渲染标准</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
          >
            返回当前研读
          </button>
        </div>
      </div>
    </div>
  );
}
