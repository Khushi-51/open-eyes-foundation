"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function GyaanKaSafar() {
  return (
    <div className="font-sans bg-[var(--background)] text-[var(--foreground)]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--marian-blue-100)] via-[var(--marian-blue-200)] to-[var(--marian-blue-300)] opacity-85"></div>

        <div className="relative max-w-4xl mx-auto z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Gyaan Ka Safar:  
            <span className="block text-[var(--light-green)] mt-2">
              A Book for Every Child, At Every Doorstep.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg opacity-90">
            Directly providing inspiring books to underprivileged children to foster
            <strong> reading habits</strong>, critical thinking, and communication skills.
          </p>

          <a
            href="#get-involved"
            className="inline-block mt-8 bg-[var(--light-green)] text-white px-8 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-all shadow-lg"
          >
            Invest in a Child's Future
          </a>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 px-6 bg-[var(--bg-soft)]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--marian-blue-500)]">
            What Problem Do We Solve?
          </h2>
          <div className="w-24 h-1 bg-[var(--light-green)] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-[var(--marian-blue-300)]/20">
            <h3 className="text-xl font-semibold text-red-600">🚫 The Core Challenge</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Children in rural and underprivileged communities lack access to high-quality,
              engaging books beyond school textbooks — limiting imagination, reading habits,
              and exposure to new ideas.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-[var(--light-green)]/30">
            <h3 className="text-xl font-semibold text-green-700">✅ Our Solution</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              A mobile library that provides diverse books, monthly engagement, discussion
              circles, and reading guidance — building critical thinking and communication.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--marian-blue-500)]">
            How Does the Mobile Library Work?
          </h2>
          <div className="w-24 h-1 bg-[var(--light-green)] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "1. Monthly Engagement",
              text: "Regular visits issuing, returning, and reissuing books.",
            },
            {
              step: "2. Skill Building",
              text: "Discussion-based learning for expression & critical thinking.",
            },
            {
              step: "3. Sustainable Loop",
              text: "Book donation drives, sorting, and redistribution.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-[var(--light-green)] hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[var(--marian-blue-500)]">
                {item.step}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-6 bg-[var(--bg-soft)]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--marian-blue-500)]">
            Our Goals & Impact Measurement
          </h2>
          <div className="w-24 h-1 bg-[var(--light-green)] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["Goal 1", "Goal 2", "Goal 3", "Goal 4"].map((g, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition text-center"
            >
              <span className="text-3xl font-extrabold text-[var(--light-green)]">
                {g}
              </span>
              <p className="mt-3 text-sm text-slate-600">
                Impact description for {g}.
              </p>
            </div>
          ))}
        </div>

        <p className="max-w-3xl mx-auto mt-12 text-sm text-center text-slate-700">
          <strong>Monitoring System:</strong> Daily logs, inventory tracking,
          progress records, and annual feedback through Google Forms to measure
          reading comprehension & skill improvement.
        </p>
      </section>

      {/* Get Involved */}
      <section id="get-involved" className="py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--marian-blue-500)]">
            Partner With Us
          </h2>
          <div className="w-24 h-1 bg-[var(--light-green)] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "💰",
              title: "Financial Donation",
              text: "Supports children's learning. 80G tax benefits available.",
              btn: "Donate",
            },
            {
              icon: "📚",
              title: "Donate Books",
              text: "Your books directly fuel learning journeys.",
              btn: "Schedule",
            },
            {
              icon: "🙋",
              title: "Volunteer",
              text: "Help with reading sessions & donation drives.",
              btn: "Join",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition text-center"
            >
              <h3 className="text-xl font-semibold">
                {item.icon} {item.title}
              </h3>
              <p className="mt-3 text-slate-600">{item.text}</p>
              <button className="mt-5 bg-[var(--light-green)] text-white px-5 py-2 rounded-lg font-semibold hover:scale-105 transition">
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
