import React from "react";
import Navbar from "@/components/Navbar";
import UniversalExerciseStudio from "@/components/UniversalExerciseStudio";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "116题全量通关工作台 | 小蓝本初中卷6",
  description: "涵盖整除、同余、不定方程全本 116 道经典赛题，配备四阶渐进解题脚手架与断点自测"
};

export default function ExercisesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> 卷6总览
          </Link>
          <span>/</span>
          <span className="text-slate-200">116 题四阶渐进解题工作台</span>
        </div>

        <UniversalExerciseStudio initialChapter="all" />
      </main>
    </div>
  );
}
