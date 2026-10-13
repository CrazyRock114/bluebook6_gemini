import React from "react";
import Navbar from "@/components/Navbar";
import UniversalExerciseStudio from "@/components/UniversalExerciseStudio";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return [
    { chapter: "ch1" },
    { chapter: "ch2" },
    { chapter: "ch3" }
  ];
}

export default async function ChapterExercisesPage({
  params
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = await params;
  const chapterNumber = chapter === "ch2" ? 2 : chapter === "ch3" ? 3 : 1;
  const chapterTitle =
    chapterNumber === 1
      ? "第 1 章：整除理论习题 (40题)"
      : chapterNumber === 2
      ? "第 2 章：同余理论习题 (40题)"
      : "第 3 章：不定方程习题 (36题)";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/exercises" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> 全部 116 题
          </Link>
          <span>/</span>
          <span className="text-white font-semibold">{chapterTitle}</span>
        </div>

        <UniversalExerciseStudio initialChapter={chapterNumber} />
      </main>
    </div>
  );
}
