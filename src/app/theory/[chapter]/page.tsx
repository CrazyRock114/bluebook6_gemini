import React from "react";
import Navbar from "@/components/Navbar";
import Volume6TheoryReader from "@/components/Volume6TheoryReader";
import { VOLUME_6_CHAPTERS } from "@/data/volume6Structure";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return [
    { chapter: "ch1" },
    { chapter: "ch2" },
    { chapter: "ch3" },
    { chapter: "1" },
    { chapter: "2" },
    { chapter: "3" }
  ];
}

export default async function ChapterTheoryPage({
  params
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = await params;
  const clean = chapter.toLowerCase().replace(/^(ch|chapter)/, "");
  const chapterNumber = clean === "2" ? 2 : clean === "3" ? 3 : 1;
  const chapterMeta = VOLUME_6_CHAPTERS.find((c) => c.number === chapterNumber) || VOLUME_6_CHAPTERS[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/theory" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> 理论研学舱
          </Link>
          <span>/</span>
          <span className="text-white font-semibold">
            第 {chapterNumber} 章：{chapterMeta.title}
          </span>
        </div>

        <Volume6TheoryReader initialChapter={chapterNumber} />
      </main>
    </div>
  );
}
