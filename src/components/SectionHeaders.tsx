"use client";
import React from "react";

interface SectionHeaderProps {
  title: string;
  color?: string; // optional, default to CSS variable
}

export default function SectionHeader({ title, color }: SectionHeaderProps) {
  return (
    <div className="flex items-center">
      {/* Left colored bar */}
      <div
        className="w-1 h-8 md:h-10 rounded-r-sm"
        style={{ backgroundColor: color }}
      ></div>

      {/* Heading */}
      <h2 className="ml-3 text-xl md:text-2xl font-bold uppercase text-gray-900 tracking-wide">
        {title}
      </h2>
    </div>
  );
}
