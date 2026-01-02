"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function JoinAsMember() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [profession, setProfession] = useState("");
  const [vision, setVision] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "Mission100",
        name,
        phone,
        email,
        date,
        profession,
        vision,
      }),
    });

    alert("Mission 100 enrollment submitted!");

    setName("");
    setPhone("");
    setEmail("");
    setDate("");
    setProfession("");
    setVision("");
    setAgree(false);
  };

  return (
    <div className="font-sans text-[hsl(var(--foreground))] bg-[hsl(var(--background))]">
      <Navbar />

      {/* HERO — SAME AS INTERNSHIP */}
       <section className="relative py-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--marian-blue-light)] to-transparent" />
        <div className="relative max-w-5xl mx-auto space-y-4 p-10 rounded-3xl">
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
          A Shield for Education
        </h2>
        <p className="text-xl opacity-90 text-black font-semibold">
          True change happens when strength is sustained. By becoming a
          Mission 100 Patron, you ensure that our office doors remain open,
          our staff remains dedicated, and every child receives the tools
          they need to thrive.
        </p>
        <a
            href="#join"
            className="inline-block mt-6 px-10 py-4 rounded-full bg-[hsl(var(--background))] text-[hsl(var(--primary))] font-bold hover:opacity-90 transition"
          >
            APPLY NOW
          </a>
        </div>
      </section>
      <section className="relative py-6 pt-16 px-6 text-center overflow-hidden bg-[hsl(var(--muted))]  ">
        <div className="absolute inset-0 bg-gradient-to-b bg-[hsl(var(--muted))] " />
        <div className="relative max-w-5xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#001B44] relative z-10">
          Mission 100
        </h1>
          <p className="text-gray-600">
            100 Leaders · 100 Pillars · One Shared Promise
          </p>
        </div>
      </section>


      {/* Card 2 */}
      <section className="bg-[hsl(var(--muted))] pb-5 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Why Mission 100 Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "A Shield for Education", desc: "Mission 100 creates a stable backbone that allows educational work to continue without disruption." },
              { title: "Collective Responsibility", desc: "Patrons stand as pillars supporting governance, operations, and growth while respecting the foundation\'s decision-making structure." },
              { title: "Long-Term Vision", desc: "An annual commitment focused on sustainability rather than short-term aid." }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[hsl(var(--card))] p-8 rounded-2xl shadow-md border-t-4 border-[hsl(var(--primary))] text-center"
              >
                <h3 className="font-semibold text-lg mb-6">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM — SAME CARD STYLE AS INTERNSHIP */}
      <section id="join" className="bg-[hsl(var(--muted))] py-6 pb-20">
        <div className="max-w-4xl mx-auto bg-[hsl(var(--card))] p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-[hsl(var(--primary))]">
            Mission 100 Patron Enrollment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              required
              className="w-full p-3 border rounded-xl"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="WhatsApp Number"
                required
                className="w-full p-3 border rounded-xl"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="w-full p-3 border rounded-xl"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 border rounded-xl"
              />
              <input
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                placeholder="Organisation / Profession"
                className="w-full p-3 border rounded-xl"
              />
            </div>

            <textarea
              rows={3}
              value={vision}
              onChange={(e) => setVision(e.target.value)}
              placeholder="Your Vision for Education"
              className="w-full p-3 border rounded-xl"
            />

            <div className="bg-slate-100 p-6 rounded-xl text-sm">
              <label className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  required
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <span className="font-semibold">
                  I accept Mission 100 Terms & voluntarily support Open Eyes Foundation.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[var(--marian-blue-100)] text-white font-semibold text-lg"
            >
              Complete Enrollment
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
