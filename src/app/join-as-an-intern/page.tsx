"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function Internship() {
  return (
    <div className="font-sans text-[hsl(var(--foreground))] bg-[hsl(var(--background))]">
      <Navbar />

      {/* HERO */}
      <section className="relative py-14 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary)/0.08)] to-transparent" />
        <div className="relative max-w-5xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))]">
            Internship Opportunity
          </h1>
          <p className="text-xl font-medium">
            At Open Eyes Foundation
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-10 text-center space-y-4">
        <p className="text-lg text-muted-foreground">
          Gain hands-on experience while contributing to meaningful social
          impact projects that truly make a difference.
        </p>
        <p className="text-lg leading-relaxed">
          Open Eyes Foundation offers internship opportunities for individuals
          who want to learn, grow, and contribute to impactful initiatives.
          Whether your interest lies in education, social work, or project
          management, we provide a supportive environment to help you develop
          real-world skills.
        </p>
      </section>

      {/* WHAT YOU GAIN */}
      <section className="bg-[hsl(var(--muted))] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            What You’ll Gain as an Intern
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mentorship",
                desc: "Work closely with experienced team members and mentors."
              },
              {
                title: "NGO Exposure",
                desc: "Gain valuable insights into the non-profit and social sector."
              },
              {
                title: "Skill Development",
                desc: "Strengthen leadership, communication, and teamwork skills."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-8 rounded-2xl shadow-md border-t-4 border-[hsl(var(--primary))] text-center hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATE */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-4">
        <h2 className="text-3xl font-semibold">
          Certificate of Recognition
        </h2>
        <p className="text-lg">
          Upon successful completion of the internship, interns will be awarded
          a <strong> Certificate of Recognition </strong>
          acknowledging their contribution and learning experience with
          Open Eyes Foundation.
        </p>
      </section>

      {/* HOW TO APPLY */}
      <section className="bg-[hsl(var(--muted))] py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <h2 className="text-3xl font-semibold">
            How to Apply
          </h2>
          <p className="text-lg">
            Fill out the internship application form below. Our team will
            review your submission and contact you shortly.
          </p>
          <p className="text-lg">
            For any queries, feel free to reach out to us.
          </p>
        </div>
      </section>

      {/* INTERNSHIP FORM */}
      <section className="bg-[hsl(var(--muted))] py-10">
        <div className="max-w-4xl mx-auto bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-[hsl(var(--primary))]">
            Internship Application Form
          </h2>

          <form className="space-y-8">
            {/* CATEGORY */}
            <div>
              <label className="font-semibold block mb-2">
                Choose Internship Path
              </label>
              <select
                required
                className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]"
              >
                <option value="">-- Select --</option>
                <option>Academic Intern (NEP / College Credit)</option>
                <option>Professional Intern</option>
                <option>Research Intern</option>
              </select>
            </div>

            {/* PERSONAL DETAILS */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold block mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]"
                />
              </div>
              <div>
                <label className="font-semibold block mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold block mb-2">
                  College / Organization
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]"
                />
              </div>
              <div>
                <label className="font-semibold block mb-2">
                  Course & Year
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]"
                />
              </div>
            </div>

            {/* DURATION */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold block mb-2">Duration</label>
                <select className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]">
                  <option>4 Weeks</option>
                  <option>6 Weeks</option>
                  <option>8 Weeks</option>
                  <option>12 Weeks</option>
                </select>
              </div>
              <div>
                <label className="font-semibold block mb-2">Start Date</label>
                <input
                  type="date"
                  className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]"
                />
              </div>
            </div>

            {/* DOCUMENT */}
            <div className="border-2 border-dashed border-[hsl(var(--border))] p-6 rounded-xl bg-[hsl(var(--background))]">
              <label className="font-semibold block mb-2">
                Upload Recommendation Letter / ID
              </label>
              <input type="file" className="w-full" />
              <p className="text-xs mt-2 text-muted-foreground">
                * Mandatory for academic interns
              </p>
            </div>

            {/* TERMS */}
            <div className="bg-[hsl(var(--muted))] p-6 rounded-xl text-sm space-y-2 border border-[hsl(var(--border))]">
              <p>10 AM – 5 PM (Mon–Sat)</p>
              <p>Unpaid learning internship</p>
              <p>SOP, POSH & Child Protection compliance mandatory</p>
              <p>Final report required for certificate</p>

              <div className="flex items-start gap-3">
                <input type="checkbox" required className="mt-1" />
                <span className="font-semibold ">
                  I agree to all rules & professional guidelines
                </span>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[var(--marian-blue-100)] text-white font-semibold text-lg hover:opacity-90 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
