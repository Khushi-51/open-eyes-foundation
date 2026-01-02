"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function Internship() {
  const [path, setPath] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState("4 Weeks");
  const [startDate, setStartDate] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "Internship",
        path,
        name,
        phone,
        college,
        course,
        duration,
        startDate,
      }),
    });

    alert("Internship application submitted successfully!");

    setPath("");
    setName("");
    setPhone("");
    setCollege("");
    setCourse("");
    setDuration("4 Weeks");
    setStartDate("");
    setAgree(false);
  };

  return (
    <div className="font-sans text-[hsl(var(--foreground))] bg-[hsl(var(--background))]">
      <Navbar />

      {/* HERO */}
      <section className="relative py-14 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary)/0.08)] to-transparent" />
        <div className="relative max-w-5xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#001B44] mb-4 relative z-10">
          Internship Opportunity
        </h1>
          <p className="text-gray-600">At Open Eyes Foundation</p>
        </div>
        <section className="max-w-6xl mx-auto px-6 py-5 text-center space-y-4">
        <p className="text-lg text-muted-foreground">
          Gain hands-on experience while contributing to meaningful social
          impact projects that truly make a difference.
        </p>
        <p className="text-lg leading-relaxed">
          Open Eyes Foundation offers internship opportunities for individuals
          who want to learn, grow, and contribute to impactful initiatives.
        </p>
      </section>
      </section>

      {/* INTRO */}
      

      {/* WHAT YOU GAIN */}
      <section className="bg-[hsl(var(--muted))] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            What You’ll Gain as an Intern
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Mentorship", desc: "Work closely with experienced team members." },
              { title: "NGO Exposure", desc: "Understand non-profit operations deeply." },
              { title: "Skill Development", desc: "Leadership & communication growth." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[hsl(var(--card))] p-8 rounded-2xl shadow-md border-t-4 border-[hsl(var(--primary))] text-center"
              >
                <h3 className="font-semibold text-lg mb-5">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNSHIP FORM */}
      <section className="bg-[hsl(var(--muted))] py-5 pb-20">
        <div className="max-w-4xl mx-auto bg-[hsl(var(--card))] p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-[hsl(var(--primary))]">
            Internship Application Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="font-semibold block mb-2">
                Choose Internship Path
              </label>
              <select
                required
                value={path}
                onChange={(e) => setPath(e.target.value)}
                className="w-full p-3 rounded-xl border"
              >
                <option value="">-- Select --</option>
                <option>Academic Intern (NEP / College Credit)</option>
                <option>Professional Intern</option>
                <option>Research Intern</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="w-full p-3 border rounded-xl"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="WhatsApp Number"
                required
                className="w-full p-3 border rounded-xl"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="College / Organization"
                required
                className="w-full p-3 border rounded-xl"
              />
              <input
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Course & Year"
                required
                className="w-full p-3 border rounded-xl"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full p-3 border rounded-xl"
              >
                <option>4 Weeks</option>
                <option>6 Weeks</option>
                <option>8 Weeks</option>
                <option>12 Weeks</option>
              </select>

              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-3 border rounded-xl"
              />
            </div>

            <div className="bg-slate-100 p-6 rounded-xl text-sm">
              <label className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  required
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <span className="font-semibold">
                  I agree to all rules & professional guidelines
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[var(--marian-blue-100)] text-white font-semibold text-lg"
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
