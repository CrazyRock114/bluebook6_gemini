"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Lightbulb,
  Play,
  Check,
  Search,
  Filter,
  Video,
  Sparkles,
  Layers,
  Award,
  AlertTriangle
} from "lucide-react";
import MathView from "@/components/MathView";
import { ALL_VOLUME_6_EXERCISES } from "@/data/allExercisesData";
import { ExerciseItem } from "@/data/chapter1Data";

interface UniversalExerciseStudioProps {
  initialChapter?: number | "all";
}

export default function UniversalExerciseStudio({
  initialChapter = "all"
}: UniversalExerciseStudioProps) {
  const [selectedExId, setSelectedExId] = useState<string>("ex-1-1");
  const [activeTab, setActiveTab] = useState<"sandbox" | "hint" | "checkpoint" | "solution">("sandbox");
  const [filterChapter, setFilterChapter] = useState<number | "all">(initialChapter);
  const [filterDiff, setFilterDiff] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Quiz user answers state
  const [userAnswers, setUserAnswers] = useState<Record<string, number | null>>({});
  const [userFeedback, setUserFeedback] = useState<Record<string, boolean | null>>({});

  // Sandbox inputs
  const [sandboxValue, setSandboxValue] = useState<string>("3");

  const filteredExercises = ALL_VOLUME_6_EXERCISES.filter((ex) => {
    if (filterChapter !== "all" && ex.chapter !== filterChapter) return false;
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
    ALL_VOLUME_6_EXERCISES.find((e) => e.id === selectedExId) || ALL_VOLUME_6_EXERCISES[0];

  const handleAnswerSubmit = (optionIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [currentExercise.id]: optionIdx }));
    const isCorrect = optionIdx === currentExercise.checkpoint.correctIndex;
    setUserFeedback((prev) => ({ ...prev, [currentExercise.id]: isCorrect }));

    if (isCorrect) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>小蓝本初中卷 6 · 116 道全量赛题通关工作台</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            四阶渐进解题脚手架：拒绝死记硬背答案，构建独立破题思维
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            涵盖第 1 章（40 题整除）、第 2 章（40 题同余）、第 3 章（36 题不定方程）全本 116 题。每道题均搭载“小数字实验沙盒 → 破局锦囊 → 断点自测 → 规范全解”四阶阶梯。
          </p>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            {/* Chapter Pills */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setFilterChapter("all")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  filterChapter === "all"
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                全书 116 题
              </button>
              <button
                onClick={() => setFilterChapter(1)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  filterChapter === 1
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                第 1 章 (40题)
              </button>
              <button
                onClick={() => setFilterChapter(2)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  filterChapter === 2
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                第 2 章 (40题)
              </button>
              <button
                onClick={() => setFilterChapter(3)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  filterChapter === 3
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                第 3 章 (36题)
              </button>
            </div>

            {/* Difficulty Pills */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
              {[
                { key: "all", label: "全部难度" },
                { key: "基础巩固", label: "基础巩固" },
                { key: "联赛进阶", label: "联赛进阶" },
                { key: "全国压轴", label: "全国压轴" }
              ].map((d) => (
                <button
                  key={d.key}
                  onClick={() => setFilterDiff(d.key)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    filterDiff === d.key
                      ? "bg-slate-800 text-white font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="搜索题号、关键词..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 w-44"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Problem Grid / List */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 pb-2 border-b border-slate-800 mb-3">
              <span>习题题库 ({filteredExercises.length} 题)</span>
              <span className="font-mono text-blue-400 text-[11px]">点击题目切换</span>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-2 max-h-[720px] overflow-y-auto pr-1">
              {filteredExercises.map((ex) => {
                const isSelected = ex.id === currentExercise.id;
                const isPassed = userFeedback[ex.id] === true;

                return (
                  <button
                    key={ex.id}
                    onClick={() => {
                      setSelectedExId(ex.id);
                      setActiveTab("sandbox");
                    }}
                    className={`h-11 rounded-xl text-xs font-mono font-bold flex flex-col items-center justify-center transition-all border relative ${
                      isSelected
                        ? "bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/30 ring-2 ring-blue-400/20"
                        : isPassed
                        ? "bg-emerald-950/40 text-emerald-400 border-emerald-800/80 hover:bg-emerald-900/40"
                        : "bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <span className="text-[10px] opacity-70">
                      {ex.chapter ? `C${ex.chapter}-` : ""}
                    </span>
                    <span>{ex.number}</span>
                    {isPassed && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-slate-900" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right 4-Stage Workbench */}
        <div className="lg:col-span-8 space-y-4">
          {/* Problem Statement Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold">
                  第 {currentExercise.chapter || 1} 章 · 题 {currentExercise.number}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                  {currentExercise.sectionCode} 讲
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold ${
                    currentExercise.difficulty === "基础巩固"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : currentExercise.difficulty === "联赛进阶"
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                  }`}
                >
                  {currentExercise.difficulty}
                </span>
              </div>

              {currentExercise.videoMeta && (
                <div className="flex items-center gap-1 text-xs text-rose-400 bg-rose-950/40 border border-rose-900/50 px-2.5 py-1 rounded-lg font-mono">
                  <Video className="w-3.5 h-3.5" />
                  <span>对应视频微课 #{currentExercise.videoMeta.lectureId} ({currentExercise.videoMeta.durationFormatted})</span>
                </div>
              )}
            </div>

            <h3 className="text-lg font-black text-white">{currentExercise.title}</h3>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-sm text-slate-200 leading-relaxed">
              <MathView math={currentExercise.problemStatement} />
            </div>

            {/* 4-Stage Tabs */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => setActiveTab("sandbox")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                    activeTab === "sandbox"
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/20"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  1. 小数字沙盒
                </button>
                <button
                  onClick={() => setActiveTab("hint")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                    activeTab === "hint"
                      ? "bg-amber-600 border-amber-500 text-white shadow-md shadow-amber-600/20"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  2. 破局锦囊
                </button>
                <button
                  onClick={() => setActiveTab("checkpoint")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                    activeTab === "checkpoint"
                      ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/20"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  3. 断点自测
                </button>
                <button
                  onClick={() => setActiveTab("solution")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                    activeTab === "solution"
                      ? "bg-emerald-600 border-emerald-500 text-white shadow-md shadow-emerald-600/20"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  4. 规范全解
                </button>
              </div>
            </div>
          </div>

          {/* Tab 1: Small Number Sandbox */}
          {activeTab === "sandbox" && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>阶段 1：小数字试验沙盒 (先试验再猜想)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentExercise.sandbox.prompt}
              </p>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 font-mono">
                  {currentExercise.sandbox.inputLabel}:
                </span>
                <input
                  type="text"
                  value={sandboxValue}
                  onChange={(e) => setSandboxValue(e.target.value)}
                  className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-white w-28 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-1.5">
                <div className="text-indigo-300 font-semibold">沙盒机制说明：</div>
                <div>{currentExercise.sandbox.calcExplanation}</div>
                <div className="text-slate-400 text-[11px] pt-1 border-t border-slate-800">
                  当前输入：{sandboxValue}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Hints */}
          {activeTab === "hint" && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Lightbulb className="w-4 h-4" />
                <span>阶段 2：破局锦囊与名师避坑警示</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300 leading-relaxed space-y-1.5">
                <div className="font-bold text-amber-400 font-mono text-[11px] flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  破局启发指引：
                </div>
                <div className="font-mono text-slate-200">
                  <MathView math={currentExercise.heuristicHint} />
                </div>
              </div>

              {currentExercise.teacherTrapAlert && (
                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/40 text-xs text-rose-300 leading-relaxed space-y-1.5">
                  <div className="font-bold text-rose-400 font-mono text-[11px] flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    奥数常见思维陷阱警示：
                  </div>
                  <div>
                    <MathView math={currentExercise.teacherTrapAlert} />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Checkpoint */}
          {activeTab === "checkpoint" && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                <HelpCircle className="w-4 h-4" />
                <span>阶段 3：破局关键断点自测</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs text-slate-200">
                <MathView math={currentExercise.checkpoint.question} />
              </div>

              <div className="space-y-2">
                {currentExercise.checkpoint.options.map((opt, oIdx) => {
                  const isSelected = userAnswers[currentExercise.id] === oIdx;
                  const isSubmitted = userFeedback[currentExercise.id] !== undefined;
                  const isCorrect = oIdx === currentExercise.checkpoint.correctIndex;

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleAnswerSubmit(oIdx)}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                        isSubmitted && isCorrect
                          ? "bg-emerald-950/40 border-emerald-600 text-emerald-300 font-bold"
                          : isSubmitted && isSelected && !isCorrect
                          ? "bg-rose-950/40 border-rose-600 text-rose-300 font-bold"
                          : isSelected
                          ? "bg-blue-600/30 border-blue-500 text-white"
                          : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center font-mono text-[11px]">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {isSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      {isSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400" />}
                    </button>
                  );
                })}
              </div>

              {userFeedback[currentExercise.id] !== undefined && (
                <div
                  className={`p-4 rounded-xl border text-xs leading-relaxed ${
                    userFeedback[currentExercise.id]
                      ? "bg-emerald-950/30 border-emerald-900 text-emerald-300"
                      : "bg-rose-950/30 border-rose-900 text-rose-300"
                  }`}
                >
                  <div className="font-bold mb-1">
                    {userFeedback[currentExercise.id] ? "🎉 回答正确！破局点已锁定！" : "⚠️ 回答有误，请细读解析："}
                  </div>
                  <div>{currentExercise.checkpoint.explanation}</div>
                </div>
              )}
            </div>
          )}

          {/* Tab 4: Solution */}
          {activeTab === "solution" && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>阶段 4：华东师大版标准 LaTeX 规范全解</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono whitespace-pre-line">
                <MathView math={currentExercise.fullSolution} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
