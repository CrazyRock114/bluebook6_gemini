import React from "react";
import Navbar from "@/components/Navbar";
import SeriesHubView from "@/components/SeriesHubView";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "全套8册知识中枢 | 数学奥林匹克小丛书现代教学平台",
  description: "华东师范大学出版社《数学奥林匹克小丛书（第三版）》初中卷 1~8 册宏观知识中枢与学科大厦"
};

export default function SeriesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> 返回平台首页
          </Link>
          <span>/</span>
          <span className="text-slate-200">全套 8 册知识图谱中枢</span>
        </div>

        <SeriesHubView />
      </main>
    </div>
  );
}
