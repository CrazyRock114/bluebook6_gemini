import React from "react";
import Navbar from "@/components/Navbar";
import VisualLabsGallery from "@/components/VisualLabsGallery";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "9大算法多模态实验室 | 小蓝本初中卷6",
  description: "把抽象高深的数论公理化为可交互探索的动态算法沙盒（带余除法、辗转相除、埃氏筛、勒让德、模钟环、剩余系、费马小定理、完全平方数、勾股晶格）"
};

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> 卷6总览
          </Link>
          <span>/</span>
          <span className="text-slate-200">9 大多模态算法实验室</span>
        </div>

        <VisualLabsGallery />
      </main>
    </div>
  );
}
