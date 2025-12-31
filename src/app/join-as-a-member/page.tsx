"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function JoinAsMember() {
  return (
    <div className="font-sans text-[hsl(var(--foreground))] bg-[hsl(var(--background))]">
      <Navbar />

      {/* HERO */}
      <section className="relative py-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--light-green-200)] to-transparent" />
        <div className="relative max-w-5xl mx-auto space-y-4 bg-[var(--light-green-200)]">
          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))]">
            Mission 100
          </h1>
          <p className="text-xl font-medium text-muted-foreground">
            100 Leaders · 100 Pillars · One Shared Promise
          </p>
          <h2 className="text-3xl font-semibold px-6 pt-5">
          A Shield for Education
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          True change happens when strength is sustained. By becoming a
          Mission 100 Patron, you ensure that our office doors remain open,
          our staff remains dedicated, and every child receives the tools
          they need to thrive.
        </p>
        </div>
      </section>

      {/* INTRO */}
      

      {/* FORM CARD */}
      <section className="bg-[hsl(var(--muted))] py-20 px-6">
        <div className="max-w-4xl mx-auto bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-[hsl(var(--primary))]">
            Mission 100 Patron Enrollment
          </h2>

          <form className="space-y-10">
            {/* PROFILE */}
            <div>
              <h3 className="text-xl font-semibold mb-6">
                I. Patron Profile
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="font-semibold block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="As you want it displayed in the Patron Gallery"
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
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]"
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="example@mail.com"
                    className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]"
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-2">
                    DOB / Anniversary
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]"
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-2">
                    Organisation / Profession
                  </label>
                  <input
                    type="text"
                    placeholder="Your role or company"
                    className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="font-semibold block mb-2">
                    Your Vision for Education (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="A one-line quote to inspire others..."
                    className="w-full p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="font-semibold block mb-2">
                    Upload Photograph
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full p-3 rounded-xl border border-dashed border-[hsl(var(--border))]"
                  />
                </div>
              </div>
            </div>

            {/* TERMS */}
            <div>
              <h3 className="text-xl font-semibold mb-6">
                II. Terms & Conditions
              </h3>

              <div className="space-y-4 bg-[hsl(var(--muted))] p-6 rounded-xl border border-[hsl(var(--border))] text-sm">
                <p><strong>01.</strong> Annual contribution of ₹10,000 valid for 365 days.</p>
                <p><strong>02.</strong> Funds support sustainability, staff, infrastructure & education.</p>
                <p><strong>03.</strong> Patrons act as Impact Advisors; governance remains with the Foundation.</p>
                <p><strong>04.</strong> Patron profile featured in the Mission 100 Gallery.</p>
                <p><strong>05.</strong> Contribution is non-refundable.</p>
                <p><strong>06.</strong> Renewal is voluntary with prior reminder.</p>
                
              </div>
              <div className="bg-[hsl(var(--primary))] text-black p-6 rounded-xl flex gap-4">
              <input type="checkbox" required className="mt-1" />
              <p className="text-sm leading-relaxed">
                I confirm that I have read and accepted the Mission 100
                Terms & Conditions and voluntarily support the long-term
                sustainability of Open Eyes Foundation.
              </p>
            </div>
            </div>

           

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[var(--marian-blue-100)] text-white font-semibold text-lg hover:opacity-90 transition"
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
