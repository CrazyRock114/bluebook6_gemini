"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import confetti from "canvas-confetti";
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Lightbulb,
  Check,
  Search,
  Sparkles,
  Award,
  AlertTriangle,
  Star,
  ChevronDown,
  Copy
} from "lucide-react";
import MathView from "@/components/MathView";
import { ALL_VOLUME_6_EXERCISES } from "@/data/allExercisesData";

interface UniversalExerciseStudioProps {
  initialChapter?: number | "all";
}

const STORAGE_COMPLETED_KEY = "bluebook6_completed_exercises_v1";
const STORAGE_BOOKMARKS_KEY = "bluebook6_bookmarks_exercises_v1";
const STORAGE_ANSWERS_KEY = "bluebook6_answers_exercises_v1";

const TOTAL_EXERCISES_COUNT = ALL_VOLUME_6_EXERCISES.length;

const DIFF_BADGE: Record<string, string> = {
  "全国压轴": "bg-rose-500/10 text-rose-400 border-rose-500/20",
  "联赛进阶": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "基础巩固": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
};

function getChapterPageRange(chapter?: number): string {
  if (chapter === 2) return "华东师大版 P51~P55 (全解 P97~P114)";
  if (chapter === 3) return "华东师大版 P70~P74 (全解 P114~P131)";
  return "华东师大版 P27~P33 (全解 P79~P96)";
}

interface SolutionStep {
  stepNum: number;
  title: string;
  content: string;
}

function splitSolutionIntoSteps(text: string): SolutionStep[] {
  const normalized = text.replace(/\\n/g, "\n");
  let parts = normalized.split(/\n\n+/);
  if (parts.length < 2) {
    parts = normalized.split(/\n(?=(?:若|又|当|设|先|由|解得|所以|综上|故|即|（[1-9]）|[1-9]\.))/);
  }
  if (parts.length < 2) {
    parts = normalized.split(/\n+/);
  }
  const filtered = parts.map((p) => p.trim()).filter(Boolean);
  if (filtered.length >= 2) {
    return filtered.map((chunk, i) => {
      const firstLine = chunk.split("\n")[0].replace(/[*#]/g, "").trim();
      const title = firstLine.length > 28 ? firstLine.slice(0, 28) + "..." : firstLine;
      return {
        stepNum: i + 1,
        title: `步骤 ${i + 1}：${title}`,
        content: chunk
      };
    });
  }
  return [{ stepNum: 1, title: "完整官方规范推导", content: normalized }];
}

type FilterStatus = "all" | "completed" | "unsolved" | "bookmarked";

export default function UniversalExerciseStudio({
  initialChapter = "all"
}: UniversalExerciseStudioProps) {
  const [selectedExId, setSelectedExId] = useState<string>("ex-1-1");
  const [activeTab, setActiveTab] = useState<"sandbox" | "hint" | "checkpoint" | "solution">("sandbox");
  const [filterChapter, setFilterChapter] = useState<number | "all">(initialChapter);
  const [filterDiff, setFilterDiff] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Persistent user state
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [userAnswers, setUserAnswers] = useState<Record<string, number | null>>({});
  const [userFeedback, setUserFeedback] = useState<Record<string, boolean | null>>({});

  // Sandbox inputs
  const [sandboxValue, setSandboxValue] = useState<string>("3");

  // Solution view options
  const [solutionMode, setSolutionMode] = useState<"stepped" | "full">("stepped");
  const [highlightKeyEquations, setHighlightKeyEquations] = useState<boolean>(true);
  const [revealedStepCount, setRevealedStepCount] = useState<number>(1);
  const [copiedSolution, setCopiedSolution] = useState<boolean>(false);

  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCompleted = localStorage.getItem(STORAGE_COMPLETED_KEY);
      if (savedCompleted) {
        setCompletedIds(new Set(JSON.parse(savedCompleted)));
      }

      const savedBookmarks = localStorage.getItem(STORAGE_BOOKMARKS_KEY);
      if (savedBookmarks) {
        setBookmarkedIds(new Set(JSON.parse(savedBookmarks)));
      }

      const savedAnswers = localStorage.getItem(STORAGE_ANSWERS_KEY);
      if (savedAnswers) {
        const parsed = JSON.parse(savedAnswers);
        setUserAnswers(parsed);

        // Precompute feedback for answered questions
        const feedback: Record<string, boolean> = {};
        for (const ex of ALL_VOLUME_6_EXERCISES) {
          if (parsed[ex.id] !== undefined && parsed[ex.id] !== null) {
            feedback[ex.id] = parsed[ex.id] === ex.checkpoint.correctIndex;
          }
        }
        setUserFeedback(feedback);
      }
    } catch (e) {
      console.warn("Failed to read progress from localStorage:", e);
    }

    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  // Filter exercises
  const filteredExercises = useMemo(() => {
    return ALL_VOLUME_6_EXERCISES.filter((ex) => {
      if (filterChapter !== "all" && ex.chapter !== filterChapter) return false;
      if (filterDiff !== "all" && ex.difficulty !== filterDiff) return false;
      if (filterStatus === "completed" && !completedIds.has(ex.id)) return false;
      if (filterStatus === "unsolved" && completedIds.has(ex.id)) return false;
      if (filterStatus === "bookmarked" && !bookmarkedIds.has(ex.id)) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchNum = ex.number.toString().includes(q);
        const matchTitle = ex.title.toLowerCase().includes(q);
        const matchText = ex.problemStatement.toLowerCase().includes(q);
        if (!matchNum && !matchTitle && !matchText) return false;
      }
      return true;
    });
  }, [filterChapter, filterDiff, filterStatus, searchQuery, completedIds, bookmarkedIds]);

  const currentExercise = useMemo(() => {
    return (
      ALL_VOLUME_6_EXERCISES.find((e) => e.id === selectedExId) || ALL_VOLUME_6_EXERCISES[0]
    );
  }, [selectedExId]);

  // Solution parsed steps
  const solutionSteps = useMemo(() => {
    return splitSolutionIntoSteps(currentExercise.fullSolution);
  }, [currentExercise.fullSolution]);

  // Reset revealed steps when exercise changes
  useEffect(() => {
    setRevealedStepCount(1);
  }, [selectedExId]);

  // Toggle Completed (pure state update, side effect outside)
  const toggleCompleted = (id: string) => {
    const next = new Set(completedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setCompletedIds(next);
    try {
      localStorage.setItem(STORAGE_COMPLETED_KEY, JSON.stringify(Array.from(next)));
    } catch (err) {
      console.warn("Failed to save completed exercises to localStorage:", err);
    }
  };

  // Toggle Bookmark (pure state update, side effect outside)
  const toggleBookmark = (id: string) => {
    const next = new Set(bookmarkedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setBookmarkedIds(next);
    try {
      localStorage.setItem(STORAGE_BOOKMARKS_KEY, JSON.stringify(Array.from(next)));
    } catch (err) {
      console.warn("Failed to save bookmarks to localStorage:", err);
    }
  };

  const handleAnswerSubmit = (optionIdx: number) => {
    const updatedAnswers = { ...userAnswers, [currentExercise.id]: optionIdx };
    setUserAnswers(updatedAnswers);

    const isCorrect = optionIdx === currentExercise.checkpoint.correctIndex;
    setUserFeedback((prev) => ({ ...prev, [currentExercise.id]: isCorrect }));

    try {
      localStorage.setItem(STORAGE_ANSWERS_KEY, JSON.stringify(updatedAnswers));
    } catch (err) {
      console.warn("Failed to save answers to localStorage:", err);
    }

    if (isCorrect) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });

      // Auto mark as completed outside updater
      const nextCompleted = new Set(completedIds);
      nextCompleted.add(currentExercise.id);
      setCompletedIds(nextCompleted);
      try {
        localStorage.setItem(STORAGE_COMPLETED_KEY, JSON.stringify(Array.from(nextCompleted)));
      } catch (err) {
        console.warn("Failed to save completed exercises to localStorage:", err);
      }
    }
  };

  const handleCopySolution = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(currentExercise.fullSolution);
        setCopiedSolution(true);
        if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
        copyTimerRef.current = setTimeout(() => setCopiedSolution(false), 2000);
      }
    } catch (err) {
      console.warn("Failed to copy solution:", err);
    }
  };

  const isCurrentCompleted = completedIds.has(currentExercise.id);
  const isCurrentBookmarked = bookmarkedIds.has(currentExercise.id);
  const completionPercentage = Math.round((completedIds.size / TOTAL_EXERCISES_COUNT) * 100);

  const statusFilters: { key: FilterStatus; label: string }[] = [
    { key: "all", label: "全部状态" },
    { key: "unsolved", label: `待攻克 (${TOTAL_EXERCISES_COUNT - completedIds.size})` },
    { key: "completed", label: `已通关 (${completedIds.size})` },
    { key: "bookmarked", label: `已收藏 (${bookmarkedIds.size})` }
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner with Progress Dashboard */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-5xl">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>小蓝本初中卷 6 · 全书 {TOTAL_EXERCISES_COUNT} 道全量赛题通关工作台</span>
            </div>

            {/* Progress indicators */}
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                已通关: <strong className="text-emerald-400 font-bold">{completedIds.size}</strong> / {TOTAL_EXERCISES_COUNT} ({completionPercentage}%)
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <Star className="w-3.5 h-3.5 text-amber-400" />
                已收藏: <strong className="text-amber-400 font-bold">{bookmarkedIds.size}</strong> 题
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            四阶渐进解题脚手架：拒绝死记硬背答案，构建独立破题思维
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
            涵盖第 1 章（40 题整除）、第 2 章（40 题同余）、第 3 章（36 题不定方程）全本 {TOTAL_EXERCISES_COUNT} 题。每道题均搭载“小数字实验沙盒 → 破局锦囊 → 断点自测 → 规范全解”四阶阶梯，答题记录实时持久化至本地缓存。
          </p>

          {/* Global Progress Bar */}
          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 mb-1.5">
              <span>全书通关进度</span>
              <span className="text-blue-400 font-bold">{completedIds.size} / {TOTAL_EXERCISES_COUNT} 题</span>
            </div>
            <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(2, completionPercentage)}%` }}
              />
            </div>
          </div>

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
                全书 {TOTAL_EXERCISES_COUNT} 题
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

            {/* Status Filter */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              {statusFilters.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setFilterStatus(s.key)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    filterStatus === s.key
                      ? "bg-indigo-600 text-white font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {s.label}
                </button>
              ))}
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
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 pb-2 border-b border-slate-800 mb-3">
              <span>习题题库 ({filteredExercises.length} 题)</span>
              <span className="font-mono text-blue-400 text-[11px]">点击题目切换</span>
            </div>

            {filteredExercises.length === 0 ? (
              <div className="text-center py-10 text-xs text-slate-500">
                无匹配题目，请尝试调整筛选条件
              </div>
            ) : (
              <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-2 max-h-[720px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
                {filteredExercises.map((ex) => {
                  const isSelected = ex.id === currentExercise.id;
                  const isPassed = completedIds.has(ex.id);
                  const isStarred = bookmarkedIds.has(ex.id);

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

                      {/* Completed badge */}
                      {isPassed && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-slate-900" />
                      )}

                      {/* Bookmark badge */}
                      {isStarred && (
                        <span className="absolute -top-1 -left-1 text-[10px] text-amber-400">
                          ★
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Active Exercise Scaffold */}
        <div className="lg:col-span-8 space-y-4">
          {/* Problem Statement Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-bold">
                  第 {currentExercise.chapter || 1} 章 · 习题 {currentExercise.number}
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-[11px] font-medium border ${
                    DIFF_BADGE[currentExercise.difficulty] ?? DIFF_BADGE["基础巩固"]
                  }`}
                >
                  {currentExercise.difficulty}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {getChapterPageRange(currentExercise.chapter)}
                </span>
              </div>

              {/* Action Buttons: Bookmark & Mark Complete */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleBookmark(currentExercise.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                    isCurrentBookmarked
                      ? "bg-amber-500/20 border-amber-500/40 text-amber-300"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <Star className={`w-3.5 h-3.5 ${isCurrentBookmarked ? "fill-amber-400 text-amber-400" : ""}`} />
                  <span>{isCurrentBookmarked ? "已收藏" : "收藏此题"}</span>
                </button>

                <button
                  onClick={() => toggleCompleted(currentExercise.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                    isCurrentCompleted
                      ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isCurrentCompleted ? "已通关" : "标记通关"}</span>
                </button>
              </div>
            </div>

            <h3 className="text-lg font-black text-white">{currentExercise.title}</h3>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-sm text-slate-200 leading-relaxed select-text">
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

          {/* Tab 2: Hints (Wrapped in MathView to support LaTeX) */}
          {activeTab === "hint" && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Lightbulb className="w-4 h-4" />
                <span>阶段 2：破局锦囊与名师避坑警示</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300 leading-relaxed space-y-1.5">
                <div className="text-amber-300 font-semibold">破题思维切入点：</div>
                <div>
                  <MathView math={currentExercise.heuristicHint} />
                </div>
              </div>

              {currentExercise.teacherTrapAlert && (
                <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-900/60 text-xs text-rose-300 leading-relaxed space-y-1.5">
                  <div className="text-rose-400 font-semibold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>高频陷阱警示：</span>
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
                <span>阶段 3：破局断点自测 (验证关键推理)</span>
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
                    {userFeedback[currentExercise.id] ? "🎉 回答正确！破局点已锁定！已自动记录通关！" : "⚠️ 回答有误，请细读解析："}
                  </div>
                  <div>{currentExercise.checkpoint.explanation}</div>
                </div>
              )}
            </div>
          )}

          {/* Tab 4: Upgraded Solution with Step-by-Step Progressive Lens */}
          {activeTab === "solution" && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>阶段 4：华东师大版标准 LaTeX 规范全解 ({getChapterPageRange(currentExercise.chapter)})</span>
                </div>

                {/* View Mode & Equation Toggle */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setHighlightKeyEquations(!highlightKeyEquations)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1 ${
                      highlightKeyEquations
                        ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                        : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>高亮关键公式</span>
                  </button>

                  <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-0.5 text-xs font-medium">
                    <button
                      onClick={() => setSolutionMode("stepped")}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        solutionMode === "stepped"
                          ? "bg-emerald-600 text-white font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      分步透镜 ({solutionSteps.length}步)
                    </button>
                    <button
                      onClick={() => setSolutionMode("full")}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        solutionMode === "full"
                          ? "bg-emerald-600 text-white font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      完整全景
                    </button>
                  </div>

                  <button
                    onClick={handleCopySolution}
                    className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="复制完整题解"
                  >
                    {copiedSolution ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Mode A: Stepped Progressive View */}
              {solutionMode === "stepped" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                    <span>
                      渐进推导透镜：已揭晓 <strong>{Math.min(revealedStepCount, solutionSteps.length)}</strong> / {solutionSteps.length} 个核心推演阶段
                    </span>
                    <div className="flex items-center gap-2">
                      {revealedStepCount < solutionSteps.length ? (
                        <button
                          onClick={() => setRevealedStepCount((prev) => Math.min(prev + 1, solutionSteps.length))}
                          className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors flex items-center gap-1"
                        >
                          <span>揭晓下一步骤</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <span className="text-emerald-400 font-medium">已全部揭晓全部推导！</span>
                      )}
                      <button
                        onClick={() =>
                          setRevealedStepCount(
                            revealedStepCount >= solutionSteps.length ? 1 : solutionSteps.length
                          )
                        }
                        className="text-slate-400 hover:text-slate-200 underline text-[11px]"
                      >
                        {revealedStepCount >= solutionSteps.length ? "重置为第1步" : "展开全部"}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {solutionSteps.slice(0, revealedStepCount).map((step, idx) => (
                      <div
                        key={step.stepNum}
                        className={`p-4 rounded-2xl border transition-all animate-in fade-in slide-in-from-top-1 ${
                          highlightKeyEquations && idx === revealedStepCount - 1
                            ? "bg-slate-950 border-emerald-500/40 shadow-lg shadow-emerald-950/20"
                            : "bg-slate-950 border-slate-800"
                        }`}
                      >
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80">
                          <div className="font-bold text-emerald-400 text-xs font-mono">
                            <MathView math={step.title} />
                          </div>
                          <span className="text-[10px] text-slate-500 font-mono">
                            阶段 {idx + 1}
                          </span>
                        </div>
                        <div className="text-xs text-slate-200 leading-relaxed font-mono select-text">
                          <MathView math={step.content} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mode B: Full Continuous LaTeX View */}
              {solutionMode === "full" && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono whitespace-pre-line select-text">
                  <MathView math={currentExercise.fullSolution} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
