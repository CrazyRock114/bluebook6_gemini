import React from "react";
import Navbar from "@/components/Navbar";
import VideoCatalogViewer from "@/components/VideoCatalogViewer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "156讲高清视频伴学馆 | 小蓝本初中卷6",
  description: "韩涛教练 156 节全量对齐视频微课（25.3 小时），零遗漏检索与教材习题双向绑定"
};

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> 卷6总览
          </Link>
          <span>/</span>
          <span className="text-slate-200">156 讲高清视频伴学馆</span>
        </div>

        <VideoCatalogViewer />
      </main>
    </div>
  );
}
