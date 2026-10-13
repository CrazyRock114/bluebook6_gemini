"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface MathViewProps {
  math: string;
  block?: boolean;
  className?: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default function MathView({ math, block = false, className = "" }: MathViewProps) {
  const html = useMemo(() => {
    if (!math) return "";

    // Normalize escaped newlines if present
    const normalized = math.replace(/\\n/g, "\n");

    // Mixed content with LaTeX delimiters ($...$ or $$...$$)
    if (normalized.includes("$")) {
      const pattern = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g;
      let result = "";
      let lastIndex = 0;
      let match: RegExpExecArray | null;

      while ((match = pattern.exec(normalized)) !== null) {
        if (match.index > lastIndex) {
          result += escapeHtml(normalized.substring(lastIndex, match.index)).replace(/\n/g, "<br/>");
        }
        const token = match[0];
        const isBlock = token.startsWith("$$");
        const expr = isBlock ? token.slice(2, -2) : token.slice(1, -1);
        try {
          result += katex.renderToString(expr, {
            displayMode: isBlock || (block && !normalized.includes("\n")),
            throwOnError: false,
          });
        } catch {
          result += escapeHtml(expr);
        }
        lastIndex = pattern.lastIndex;
      }

      if (lastIndex < normalized.length) {
        result += escapeHtml(normalized.substring(lastIndex)).replace(/\n/g, "<br/>");
      }

      // Convert **bold** markdown to strong tags
      return result.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>');
    }

    // Chinese prose without $ delimiters -> format safely without invoking math mode
    if (/[\u4e00-\u9fa5]/.test(normalized)) {
      const formatted = escapeHtml(normalized).replace(/\n/g, "<br/>");
      return formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>');
    }

    // Pure TeX formula
    try {
      return katex.renderToString(normalized, {
        displayMode: block,
        throwOnError: false,
      });
    } catch {
      return escapeHtml(normalized);
    }
  }, [math, block]);

  const isMultiLine = Boolean(math && (math.includes("\n") || /[\u4e00-\u9fa5]/.test(math)));
  const Tag = block || isMultiLine ? "div" : "span";

  return (
    <Tag
      className={`math-view ${block ? (isMultiLine ? "block my-2 overflow-x-auto text-left" : "block text-center my-2 overflow-x-auto") : isMultiLine ? "block text-left" : "inline"} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
