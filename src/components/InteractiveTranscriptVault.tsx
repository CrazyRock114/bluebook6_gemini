"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Search,
  Copy,
  Check,
  Layers,
  Mic,
  Clock,
  Sparkles,
  Sliders,
  X,
  FastForward,
  Rewind,
  BookOpen
} from "lucide-react";
import { VideoLecture } from "@/data/videoCatalogData";

export interface TranscriptSlice {
  timeStr: string;
  seconds: number;
  text: string;
}

interface InteractiveTranscriptVaultProps {
  video: VideoLecture;
  className?: string;
  onJumpToTime?: (seconds: number) => void;
}

export default function InteractiveTranscriptVault({
  video,
  className = "",
  onJumpToTime
}: InteractiveTranscriptVaultProps) {
  const [activeTab, setActiveTab] = useState<"timeline" | "board" | "verbatim" | "raw">("timeline");
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [searchWord, setSearchWord] = useState<string>("");
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [activeNotice, setActiveNotice] = useState<string | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const activeItemRef = useRef<HTMLDivElement | null>(null);

  // Parse structured components from fullTranscript
  const { slices, boardNotes, verbatimSpeech, rawTranscript } = useMemo(() => {
    const raw = video.fullTranscript || "";
    const parsedSlices: TranscriptSlice[] = [];
    let board = "";
    let verbatim = "";

    // Extract slices matching [mm:ss] text
    const lines = raw.split("\n");
    for (const line of lines) {
      const match = line.match(/^\[(\d{1,2}):(\d{2})\]\s*(.+)$/);
      if (match) {
        const mins = parseInt(match[1], 10);
        const secs = parseInt(match[2], 10);
        parsedSlices.push({
          timeStr: `${match[1].padStart(2, "0")}:${match[2].padStart(2, "0")}`,
          seconds: mins * 60 + secs,
          text: match[3].trim()
        });
      }
    }

    // Extract Blackboard OCR section
    const boardMatch = raw.match(/【(?:黑板板书题设与推导实录|开场板书与题设\/定理实录)】([\s\S]*?)(?=【|$)/);
    if (boardMatch) {
      board = boardMatch[1].trim();
      // If there is middle board OCR as well
      const midMatch = raw.match(/【中场黑板演算与推导全景】([\s\S]*?)(?=【|$)/);
      if (midMatch) {
        board += "\n\n【中场深入推演】\n" + midMatch[1].trim();
      }
    }

    // Extract Verbatim speech section
    const verbatimMatch = raw.match(/【真人原声口播全文转录(?:（基于 Whisper 硬件加速识别）)?】([\s\S]*?)(?=【|$)/);
    if (verbatimMatch) {
      verbatim = verbatimMatch[1].trim();
    }

    return {
      slices: parsedSlices,
      boardNotes: board || "暂无单独抽取的板书手写记录",
      verbatimSpeech: verbatim || raw,
      rawTranscript: raw
    };
  }, [video.fullTranscript]);

  // Find active slice based on currentTime
  const currentSliceIdx = useMemo(() => {
    if (!slices.length) return -1;
    let found = 0;
    for (let i = 0; i < slices.length; i++) {
      if (slices[i].seconds <= currentTime) {
        found = i;
      } else {
        break;
      }
    }
    return found;
  }, [slices, currentTime]);

  // Filtered slices based on internal search
  const filteredSlices = useMemo(() => {
    if (!searchWord.trim()) return slices;
    const q = searchWord.toLowerCase();
    return slices.filter((s) => s.text.toLowerCase().includes(q) || s.timeStr.includes(q));
  }, [slices, searchWord]);

  // Playback timer simulation
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 1 * playbackSpeed;
          if (next >= video.durationSec) {
            setIsPlaying(false);
            return video.durationSec;
          }
          return next;
        });
      }, 1000 / playbackSpeed);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackSpeed, video.durationSec]);

  // Handle click on a single slice to jump
  const handleJumpToSlice = (slice: TranscriptSlice) => {
    setCurrentTime(slice.seconds);
    setActiveNotice(`已跳转至 ${slice.timeStr} ：“${slice.text.slice(0, 24)}...”`);
    if (onJumpToTime) onJumpToTime(slice.seconds);
    setTimeout(() => {
      setActiveNotice(null);
    }, 3000);
  };

  const handleCopy = (text: string, typeName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(typeName);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden space-y-4 p-4 sm:p-5 ${className}`}>
      {/* Top Header & Tab Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <Mic className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white tracking-wide">
                名师原声逐字稿与黑板实录双轨透镜
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20">
                Apple Silicon mlx-whisper 高精识别
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              共收录 {slices.length} 条毫秒切片单句 · 点击任意单句即可自动跳段导览与复现黑板推导
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-medium">
          <button
            onClick={() => setActiveTab("timeline")}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "timeline"
                ? "bg-purple-600 text-white font-bold shadow-md shadow-purple-600/20"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            时间戳跳段 ({slices.length})
          </button>

          <button
            onClick={() => setActiveTab("board")}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "board"
                ? "bg-purple-600 text-white font-bold shadow-md shadow-purple-600/20"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            黑板板书实录 (OCR)
          </button>

          <button
            onClick={() => setActiveTab("verbatim")}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "verbatim"
                ? "bg-purple-600 text-white font-bold shadow-md shadow-purple-600/20"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            原声口播连续文本
          </button>

          <button
            onClick={() => setActiveTab("raw")}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "raw"
                ? "bg-purple-600 text-white font-bold shadow-md shadow-purple-600/20"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            全宗原始档案
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive Timeline Transcript Navigator */}
      {activeTab === "timeline" && (
        <div className="space-y-4">
          {/* Interactive Player Scrubber & Controls */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Play / Pause / Reset buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isPlaying
                      ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                      : "bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-600/20"
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" /> 暂停导览
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" /> 模拟播放导览
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setCurrentTime(0);
                    setIsPlaying(false);
                  }}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="回到开头 (00:00)"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setCurrentTime((prev) => Math.max(0, prev - 10))}
                  className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-white"
                  title="快退 10 秒"
                >
                  -10s
                </button>

                <button
                  onClick={() => setCurrentTime((prev) => Math.min(video.durationSec, prev + 10))}
                  className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-white"
                  title="快进 10 秒"
                >
                  +10s
                </button>

                {/* Speed toggle */}
                <div className="flex items-center gap-1 ml-1 text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                  <span>倍速:</span>
                  {[1, 1.5, 2].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => setPlaybackSpeed(spd)}
                      className={`px-1 rounded ${playbackSpeed === spd ? "text-blue-400 font-bold" : "hover:text-slate-200"}`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Time display & Jump notice */}
              <div className="flex items-center gap-3">
                {activeNotice && (
                  <span className="text-xs text-emerald-400 animate-in fade-in flex items-center gap-1 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    <Sparkles className="w-3 h-3" />
                    {activeNotice}
                  </span>
                )}
                <div className="font-mono text-xs text-slate-300 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                  <span className="text-blue-400 font-bold">{formatSeconds(currentTime)}</span>
                  <span className="text-slate-500 mx-1">/</span>
                  <span className="text-slate-400">{formatSeconds(video.durationSec)}</span>
                </div>
              </div>
            </div>

            {/* Scrubber slider bar */}
            <div className="space-y-1">
              <input
                type="range"
                min={0}
                max={Math.floor(video.durationSec)}
                value={Math.floor(currentTime)}
                onChange={(e) => setCurrentTime(parseInt(e.target.value, 10))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono px-0.5">
                <span>00:00 开场板书与题设导入</span>
                <span>{video.durationFormatted} 核心结论沉淀</span>
              </div>
            </div>
          </div>

          {/* Quick search inside transcript sentences */}
          <div className="flex items-center justify-between gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="在当前讲座口播切片中搜索关键词..."
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-7 py-1 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
              />
              {searchWord && (
                <button
                  onClick={() => setSearchWord("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500 font-mono">
                匹配 {filteredSlices.length} / {slices.length} 句
              </span>
              <button
                onClick={() =>
                  handleCopy(
                    slices.map((s) => `[${s.timeStr}] ${s.text}`).join("\n"),
                    "timeline"
                  )
                }
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs transition-colors"
              >
                {copiedType === "timeline" ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">已复制带时间轴逐字稿</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-400" />
                    <span>复制带时间轴全文</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Slices list */}
          <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800 select-text">
            {filteredSlices.length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-500">
                未检索到包含“{searchWord}”的口播单句，请尝试其他关键词
              </div>
            ) : (
              filteredSlices.map((slice, idx) => {
                const isActive =
                  currentSliceIdx >= 0 &&
                  slices[currentSliceIdx] &&
                  slices[currentSliceIdx].timeStr === slice.timeStr;

                return (
                  <div
                    key={`${slice.timeStr}-${idx}`}
                    onClick={() => handleJumpToSlice(slice)}
                    className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-3 ${
                      isActive
                        ? "bg-purple-950/40 border-purple-500 text-white shadow-lg shadow-purple-950/50"
                        : "bg-slate-950/80 border-slate-800/80 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700"
                    }`}
                  >
                    {/* Timestamp clickable badge */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleJumpToSlice(slice);
                      }}
                      className={`px-2 py-0.5 rounded font-mono text-[11px] font-bold shrink-0 transition-colors flex items-center gap-1 ${
                        isActive
                          ? "bg-purple-600 text-white shadow-sm"
                          : "bg-slate-900 border border-slate-800 text-purple-400 hover:bg-purple-950 hover:text-purple-300"
                      }`}
                    >
                      {isActive && <Volume2 className="w-3 h-3 animate-pulse text-purple-300" />}
                      [{slice.timeStr}]
                    </button>

                    {/* Sentence text */}
                    <div className="flex-1 leading-relaxed">
                      <span className={isActive ? "text-purple-100 font-semibold" : ""}>
                        {slice.text}
                      </span>
                    </div>

                    {/* Jump hint on hover */}
                    <span className="text-[10px] text-slate-500 shrink-0 font-mono opacity-60 hover:opacity-100">
                      点击跳段
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Blackboard Board Vision OCR */}
      {activeTab === "board" && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">
              真实视频黑板板书（开场与中场高精 Vision OCR 还原）：
            </span>
            <button
              onClick={() => handleCopy(boardNotes, "board")}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs transition-colors"
            >
              {copiedType === "board" ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">已复制板书</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-slate-400" />
                  <span>复制黑板板书</span>
                </>
              )}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 leading-relaxed whitespace-pre-wrap select-text max-h-80 overflow-y-auto">
            {boardNotes}
          </div>
        </div>
      )}

      {/* Tab 3: Continuous Verbatim Speech */}
      {activeTab === "verbatim" && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">
              名师连续原声口播实录（自然段落排版）：
            </span>
            <button
              onClick={() => handleCopy(verbatimSpeech, "verbatim")}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs transition-colors"
            >
              {copiedType === "verbatim" ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">已复制口播全文</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-slate-400" />
                  <span>复制口播全文</span>
                </>
              )}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed whitespace-pre-wrap select-text max-h-80 overflow-y-auto">
            {verbatimSpeech}
          </div>
        </div>
      )}

      {/* Tab 4: Raw Dossier */}
      {activeTab === "raw" && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">全量原始转录文本：</span>
            <button
              onClick={() => handleCopy(rawTranscript, "raw")}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs transition-colors"
            >
              {copiedType === "raw" ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">已复制完整档案</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-slate-400" />
                  <span>复制完整档案</span>
                </>
              )}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-400 leading-relaxed whitespace-pre-wrap select-text max-h-80 overflow-y-auto">
            {rawTranscript}
          </div>
        </div>
      )}
    </div>
  );
}
