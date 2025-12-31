"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function JoinAsVolunteer() {
  return (
    <div className="font-sans bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Navbar />

      {/* HERO */}
      <section className="relative py-28 px-6 text-center bg-[var(--light-green-200)] text-black">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Eyes That See, Hearts That Care
          </h1>
          <p className="text-xl opacity-90">
            Your passion combined with our vision can change lives. Join Open
            Eyes Foundation as a leader, mentor, and catalyst for social change.
          </p>
          <a
            href="#enroll"
            className="inline-block mt-6 px-10 py-4 rounded-full bg-[hsl(var(--background))] text-[hsl(var(--primary))] font-bold hover:opacity-90 transition"
          >
            APPLY NOW
          </a>
        </div>
      </section>

      {/* WHY VOLUNTEER */}
      <section className="py-24">
        <h2 className="text-3xl font-bold text-center mb-14 text-[hsl(var(--primary))]">
          Why Volunteer With Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Professional Certification",
              desc: "Receive a verified Certificate of Volunteering aligned with Foundation SOPs.",
            },
            {
              title: "Skill Enhancement",
              desc: "Hands-on exposure to leadership, project management, and outreach.",
            },
            {
              title: "Policy Compliance",
              desc: "Learn Child Protection, POSH, Ethics & responsible social work practices.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-8 rounded-2xl shadow-md border-t-4 border-[hsl(var(--primary))] hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP BANNER */}
      <section className="bg-[hsl(var(--muted))] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))]">
            Opportunity to Lead Projects
          </h2>
          <p className="text-lg leading-relaxed">
            At Open Eyes Foundation, we don’t just need volunteers — we nurture
            leaders. Selected volunteers get opportunities to lead independent
            projects, manage teams, and coordinate ground-level initiatives.
          </p>
        </div>
      </section>

      {/* VOLUNTEER FORM */}
      <section id="enroll" className="py-28 bg-[hsl(var(--background))] px-6">
        <div className="max-w-3xl mx-auto bg-[hsl(var(--card))] p-10 md:p-14 rounded-3xl shadow-xl border">
          <h2 className="text-3xl font-bold text-center text-[hsl(var(--primary))]">
            Volunteer Enrollment Form
          </h2>
          <p className="text-center mt-2 mb-10 text-muted-foreground">
            Commitment is the first step toward impact
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                placeholder="Full Name"
                required
              />
              <select
                className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]"
              >
                <option>Blood Group</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB+</option>
                <option>Others</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="email"
                className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                placeholder="Email Address"
                required
              />
              <input
                type="tel"
                className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                placeholder="Mobile Number"
                required
              />
            </div>

            <textarea
              rows={3}
              className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
              placeholder="Permanent Address"
            />

            <input
              className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]"
              placeholder="Emergency Contact (Name & Relation)"
              required
            />

            {/* SOP */}
            <div className="bg-[hsl(var(--muted))] p-6 rounded-xl border border-[hsl(var(--border))] text-sm">
              <p className="leading-relaxed">
                I agree to contribute a minimum of <b>120 hours annually</b> and
                strictly comply with Open Eyes Foundation SOPs, POSH, Child
                Protection, and ethical guidelines. Confidentiality is mandatory.
              </p>
              <div className="flex gap-3 mt-4 items-center">
                <input type="checkbox" required />
                <span className="font-semibold">
                  I accept all Foundation policies & terms
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[var(--marian-blue-100)] text-[hsl(var(--primary-foreground))] font-semibold text-lg hover:opacity-90 transition"
            >
              SUBMIT APPLICATION
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
