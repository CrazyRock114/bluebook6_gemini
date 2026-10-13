"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Lightbulb,
  AlertTriangle,
  Play,
  Check,
  Search,
  Filter,
  Video,
  Sparkles,
} from "lucide-react";
import MathView from "@/components/MathView";
import { CHAPTER_1_EXERCISES, ExerciseItem } from "@/data/chapter1Data";

export default function Chapter1ExerciseWorkshop() {
  const [selectedExId, setSelectedExId] = useState<string>("ex-1-1");
  const [activeTab, setActiveTab] = useState<"sandbox" | "hint" | "checkpoint" | "solution">("sandbox");
  const [filterSec, setFilterSec] = useState<string>("all");
  const [filterDiff, setFilterDiff] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Checkpoint user answers state: map from exId to chosen option index
  const [userAnswers, setUserAnswers] = useState<Record<string, number | null>>({});
  const [userFeedback, setUserFeedback] = useState<Record<string, boolean | null>>({});

  // Sandbox inputs
  const [sandboxInputs, setSandboxInputs] = useState<Record<string, string>>({
    "ex-1-1": "3",
    "ex-1-2": "5",
    "ex-1-3": "5",
  });

  const filteredExercises = CHAPTER_1_EXERCISES.filter((ex) => {
    if (filterSec !== "all" && ex.sectionCode !== filterSec) return false;
    if (filterDiff !== "all" && ex.difficulty !== filterDiff) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchNum = ex.number.toString().includes(q);
      const matchTitle = ex.title.toLowerCase().includes(q);
      const matchText = ex.problemStatement.toLowerCase().includes(q);
      if (!matchNum && !matchTitle && !matchText) return false;
    }
    return true;
  });

  const currentExercise =
    CHAPTER_1_EXERCISES.find((e) => e.id === selectedExId) || CHAPTER_1_EXERCISES[0];

  const handleAnswerSubmit = (optionIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [currentExercise.id]: optionIdx }));
    const isCorrect = optionIdx === currentExercise.checkpoint.correctIndex;
    setUserFeedback((prev) => ({ ...prev, [currentExercise.id]: isCorrect }));

    if (isCorrect) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Filter and Search Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Filter className="w-3.5 h-3.5 text-blue-400" />
            <span>章节过滤:</span>
          </div>
          <div className="flex gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
            {["all", "1.1", "1.2", "1.3", "1.4"].map((sec) => (
              <button
                key={sec}
                onClick={() => setFilterSec(sec)}
                className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                  filterSec === sec
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {sec === "all" ? "全部小节" : `${sec} 节`}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 ml-2">
            <span>难度:</span>
          </div>
          <div className="flex gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
            {["all", "基础巩固", "联赛进阶", "全国压轴"].map((diff) => (
              <button
                key={diff}
                onClick={() => setFilterDiff(diff)}
                className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                  filterDiff === diff
                    ? "bg-slate-800 text-amber-400 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {diff === "all" ? "全部难度" : diff}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="搜索题号 (如 1.5) 或关键词..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500 font-medium"
          />
        </div>
      </div>

      {/* Main Grid: Left exercise selector list + Right Scaffolding Studio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: List of Exercises (40 items) */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 max-h-[750px] flex flex-col">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 text-xs">
            <span className="font-bold text-slate-300">
              第1章 习题列表 (共 {filteredExercises.length} / 40 题)
            </span>
            <span className="text-slate-500 font-mono text-[11px]">40讲视频全覆盖</span>
          </div>

          <div className="space-y-2 overflow-y-auto pr-1 flex-1">
            {filteredExercises.map((ex) => {
              const isSelected = ex.id === currentExercise.id;
              const hasAnswered = userAnswers[ex.id] !== undefined && userAnswers[ex.id] !== null;
              const isPassed = userFeedback[ex.id] === true;

              return (
                <button
                  key={ex.id}
                  onClick={() => {
                    setSelectedExId(ex.id);
                    setActiveTab("sandbox");
                  }}
                  className={`w-full p-3 rounded-xl text-left transition-all border ${
                    isSelected
                      ? "bg-blue-950/40 border-blue-500 text-white shadow-md shadow-blue-500/10"
                      : "bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/50 text-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono font-bold text-blue-400">
                      习题 1.{ex.number}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                        ex.difficulty === "基础巩固"
                          ? "bg-slate-800 text-slate-300"
                          : ex.difficulty === "联赛进阶"
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                          : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                      }`}
                    >
                      {ex.difficulty}
                    </span>
                  </div>

                  <div className="text-xs font-semibold truncate text-slate-200">
                    {ex.title}
                  </div>

                  <div className="flex items-center justify-between mt-2 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Video className="w-3 h-3 text-rose-400" />
                      {ex.videoMeta.durationFormatted}
                    </span>
                    {hasAnswered && (
                      <span className="flex items-center gap-1 font-semibold text-emerald-400">
                        <Check className="w-3 h-3" />
                        已测验
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: 4-Level Scaffolding Studio */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          {/* Header of Active Exercise */}
          <div className="border-b border-slate-800 pb-5">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  习题 1.{currentExercise.number}
                </span>
                <span
                  className={`text-xs px-2.5 py-1 rounded-md font-semibold ${
                    currentExercise.difficulty === "基础巩固"
                      ? "bg-slate-800 text-slate-300"
                      : currentExercise.difficulty === "联赛进阶"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-rose-500/20 text-rose-400"
                  }`}
                >
                  {currentExercise.difficulty}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Video className="w-3.5 h-3.5 text-rose-400" />
                <span>
                  韩涛教练精讲 · {currentExercise.videoMeta.durationFormatted}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-extrabold text-white tracking-tight mt-1">
              {currentExercise.title}
            </h3>

            {/* Problem statement card */}
            <div className="mt-4 p-4 bg-slate-950 rounded-xl border border-slate-800 text-sm text-slate-200 leading-relaxed font-serif">
              <span className="text-xs font-sans font-bold text-slate-400 block mb-1">
                【小蓝书原题文本】:
              </span>
              <p>{currentExercise.problemStatement}</p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {currentExercise.topicTags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-400"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* 4-Stage Scaffolding Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
            {[
              {
                id: "sandbox",
                name: "1. 小数字沙盒",
                desc: "动笔算算看",
                icon: Play,
                color: "text-blue-400",
              },
              {
                id: "hint",
                name: "2. 破局灵感锦囊",
                desc: "名师点拨与陷阱",
                icon: Lightbulb,
                color: "text-amber-400",
              },
              {
                id: "checkpoint",
                name: "3. 分步断点自测",
                desc: "互动检验关键卡点",
                icon: HelpCircle,
                color: "text-purple-400",
              },
              {
                id: "solution",
                name: "4. 极精规范全解",
                desc: "严密 LaTeX 证明",
                icon: CheckCircle2,
                color: "text-emerald-400",
              },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-slate-800 text-white border border-slate-700 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-950"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${tab.color}`} />
                  <div>
                    <div>{tab.name}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab 1: Sandbox */}
          {activeTab === "sandbox" && (
            <div className="space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <h4 className="text-sm font-bold text-white">
                  第一阶：韩涛教练“先算小数字，归纳猜规律”沙盒
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {currentExercise.sandbox.prompt}
              </p>

              <div className="flex items-center gap-3">
                <label className="text-xs font-semibold text-slate-300">
                  {currentExercise.sandbox.inputLabel} :
                </label>
                <input
                  type="text"
                  value={sandboxInputs[currentExercise.id] || currentExercise.sandbox.defaultVal}
                  onChange={(e) =>
                    setSandboxInputs((prev) => ({
                      ...prev,
                      [currentExercise.id]: e.target.value,
                    }))
                  }
                  className="w-32 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <span className="font-bold text-blue-400 block mb-1">沙盒即时验算洞察：</span>
                <p>{currentExercise.sandbox.calcExplanation}</p>
              </div>
            </div>
          )}

          {/* Tab 2: Heuristic Hint & Trap Alert */}
          {activeTab === "hint" && (
            <div className="space-y-4">
              <div className="p-5 bg-amber-950/20 border border-amber-900/40 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  第二阶：破局思路锦囊（核心引理与变形提示）
                </div>
                <p className="text-xs text-amber-200/90 leading-relaxed">
                  {currentExercise.heuristicHint}
                </p>
              </div>

              <div className="p-5 bg-rose-950/20 border border-rose-900/40 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  韩涛教练避坑预警（竞赛常犯逻辑漏洞）
                </div>
                <p className="text-xs text-rose-200/90 leading-relaxed">
                  {currentExercise.teacherTrapAlert}
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Checkpoint */}
          {activeTab === "checkpoint" && (
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400" />
                <h4 className="text-sm font-bold text-white">
                  第三阶：分步断点自测（检测关键逻辑节点）
                </h4>
              </div>

              <p className="text-xs text-slate-300 font-medium">
                {currentExercise.checkpoint.question}
              </p>

              <div className="space-y-2 mt-3">
                {currentExercise.checkpoint.options.map((opt, idx) => {
                  const isSelected = userAnswers[currentExercise.id] === idx;
                  const hasAnswered = userAnswers[currentExercise.id] !== undefined && userAnswers[currentExercise.id] !== null;
                  const isCorrect = idx === currentExercise.checkpoint.correctIndex;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSubmit(idx)}
                      className={`w-full p-3.5 rounded-xl text-left text-xs font-medium transition-all border flex items-center justify-between ${
                        hasAnswered
                          ? isCorrect
                            ? "bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold"
                            : isSelected
                            ? "bg-rose-950/40 border-rose-500 text-rose-300"
                            : "bg-slate-900/50 border-slate-800 text-slate-500"
                          : "bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white"
                      }`}
                    >
                      <span>{opt}</span>
                      {hasAnswered && (
                        <span>
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : isSelected ? (
                            <XCircle className="w-4 h-4 text-rose-400" />
                          ) : null}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {userFeedback[currentExercise.id] !== undefined && userFeedback[currentExercise.id] !== null && (
                <div
                  className={`p-4 rounded-xl border text-xs leading-relaxed mt-4 ${
                    userFeedback[currentExercise.id]
                      ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-300"
                      : "bg-rose-950/30 border-rose-500/40 text-rose-300"
                  }`}
                >
                  <span className="font-bold block mb-1">
                    {userFeedback[currentExercise.id] ? "🎉 恭喜回答正确！" : "❌ 逻辑仍有偏差，请复盘："}
                  </span>
                  <p>{currentExercise.checkpoint.explanation}</p>
                </div>
              )}
            </div>
          )}

          {/* Tab 4: Full Solution */}
          {activeTab === "solution" && (
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <h4 className="text-sm font-bold text-white">
                    第四阶：严密竞赛规范解答 (LaTeX)
                  </h4>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  视频微课：第 {currentExercise.videoMeta.lectureId} 讲
                </span>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed font-sans whitespace-pre-line space-y-3 p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                {currentExercise.fullSolution}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
