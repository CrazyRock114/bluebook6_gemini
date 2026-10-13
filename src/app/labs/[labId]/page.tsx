import React from "react";
import Navbar from "@/components/Navbar";
import VisualLabsGallery from "@/components/VisualLabsGallery";
import { VOLUME_6_LABS } from "@/data/volume6Structure";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return VOLUME_6_LABS.map((lab) => ({
    labId: lab.id
  }));
}

export default async function SingleLabPage({
  params
}: {
  params: Promise<{ labId: string }>;
}) {
  const { labId } = await params;
  const currentLab = VOLUME_6_LABS.find((l) => l.id === labId) || VOLUME_6_LABS[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/labs" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> 全部 9 大实验室
          </Link>
          <span>/</span>
          <span className="text-white font-semibold">{currentLab.name}</span>
        </div>

        <VisualLabsGallery initialLabId={labId} />
      </main>
    </div>
  );
}
