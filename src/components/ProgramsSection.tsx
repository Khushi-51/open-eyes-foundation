"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Raddi Se Shiksha",
    desc: "Empowering education by reusing educational resources",
    img: "/assets/programs/raddi-se-shiksha.png",
  },
  {
    title: "Mobile Library (Gyaan Ka Safar)",
    desc: "Read : Donate : Empower",
    img: "/assets/programs/gyaan-ka-safar.jpg",
  },
  {
    title: "Library of Honesty",
    desc: "Read with trust, return with honesty",
    img: "/assets/programs/library-of-honesty.jpg",
  },
  {
    title: "Naya Savera",
    desc: "Educational scholarship for orphaned and single parent children",
    img: "/assets/programs/naya-savera.jpg",
  },
  {
    title: "Mission Literacy",
    desc: "Educational kits for orphaned, single parent and needy children",
    img: "/assets/programs/mission-literacy.jpg",
  },
  {
    title: "Khushiyon ki Potli",
    desc: "Celebrate every occasion with purpose.",
    img: "/assets/programs/khushiyon-ki-potli.jpg",
  },
];

export default function ProgramsSection(): React.ReactElement {
  return (
    <section className="py-10 bg-[#F9FAFB] relative overflow-hidden">
      {/* Decorative subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--marian-blue-200)]/5 to-[var(--light-green)]/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--marian-blue-200)]">
            Our <span className="text-[var(--marian-blue)]">Programs</span>
          </h2>
          <p className="mt-3 text-base text-[#374151]">
            Explore our initiatives driving education and empowerment
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, index) => (
            <div
              key={index}
              className="group relative rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Circular Image */}
              <div className="relative w-64 h-64  mx-auto mt-5 overflow-hidden rounded-full">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-contain rounded-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col h-full text-center">
                <h3 className="font-semibold text-[#003366] text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[#374151] mb-4">{p.desc}</p>
                <a
                  href="#"
                  className="text-[#374151] text-sm font-medium flex items-center justify-center gap-1 hover:underline"
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
