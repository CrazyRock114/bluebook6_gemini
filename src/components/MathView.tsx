"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface MathViewProps {
  math: string;
  block?: boolean;
  className?: string;
}

export default function MathView({ math, block = false, className = "" }: MathViewProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
      });
    } catch (e) {
      console.error("KaTeX error:", e);
      return math;
    }
  }, [math, block]);

  return (
    <span
      className={`inline-math ${block ? "block text-center my-2 overflow-x-auto" : ""} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
