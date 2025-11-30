"use client";
import React from "react";
import { Phone } from "lucide-react";

export default function MissionSection(): React.ReactElement {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT IMAGE SIDE */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Abstract Capsule Shapes */}
          <div className="relative w-[320px] md:w-[500px] h-[320px] md:h-[420px]">
            {/* Capsule 1 */}
            <div className="absolute top-0 left-0 w-[100%] h-full overflow-hidden">
              <img
                src="/assets/hero.png"
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>
            </div>
        </div>

        {/* RIGHT CONTENT SIDE */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-[#F59E0B] font-medium uppercase tracking-wide">
            Welcome To OEFMC
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1F2937] leading-snug">
            You’re the <span className="text-[#2563EB]">Hope of Others.</span>
          </h2>

          <p className="mt-4 text-[#4B5563] text-sm md:text-base leading-relaxed text-justify">
            Open Eyes Foundation Manimajra Chandigarh (OEFMC), a non-governmental
            organization (NGO), has been working tirelessly since 2017 to sustain
            the education of thousands of underprivileged students. The
            organization collects used books, stationery, and educational
            materials from households, colleges, schools, and institutions.
            After sorting and refurbishing these items, they are distributed
            free of cost to those in need.
          </p>

          <p className="mt-3 text-[#4B5563] text-sm md:text-base leading-relaxed text-justify">
            The foundation establishes mobile, community, and school libraries
            to enhance learning accessibility and supports educational expenses
            for underprivileged children ensuring no child’s education stops
            due to lack of resources.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/donate"
              className="bg-[#F59E0B] hover:bg-[#EAB308] text-white font-medium px-6 py-2.5 rounded-full transition-all"
            >
              Discover More
            </a>
            <div className="flex items-center gap-2 text-[#2563EB] font-medium">
              <Phone size={18} />
              <span>+91 7508408205</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
