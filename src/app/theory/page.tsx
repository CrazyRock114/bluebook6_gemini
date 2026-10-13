import React from "react";
import Navbar from "@/components/Navbar";
import Volume6TheoryReader from "@/components/Volume6TheoryReader";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "理论研学舱 | 小蓝本初中卷6",
  description: "华东师大版《整除、同余与不定方程》三大篇章 12 讲深度精读、公理推导与原位交互实验室"
};

export default function TheoryPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> 卷6总览
          </Link>
          <span>/</span>
          <span className="text-slate-200">理论研学舱 (第 1~3 章)</span>
        </div>

        <Volume6TheoryReader initialChapter={1} />
      </main>
    </div>
  );
}
