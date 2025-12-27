"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function JoinAsVolunteer() {
  return (
    <div className="font-sans text-[hsl(var(--foreground))] bg-[hsl(var(--background))]">
      <Navbar />

      {/* HERO */}
      <section className="relative py-10 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary)/0.08)] to-transparent" />
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))]">
            Volunteer with Open Eyes Foundation
          </h1>
          
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-2 mb-4 text-center space-y-3">
        <p className="mt-6 text-lg text-muted-foreground">
            Make a meaningful impact by contributing your time, skills, and
            compassion to drive positive social change.
          </p>
        <p className="text-lg leading-relaxed">
          At Open Eyes Foundation, volunteers are the heart of everything we do.
          Whether you’re passionate about education, community service, or
          grassroots impact, your involvement can truly change lives.
        </p>
      </section>

      {/* WHERE YOU CAN CONTRIBUTE */}
      <section className="bg-[hsl(var(--muted))] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Where You Can Make a Difference
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Mobile Library Initiative",
              "Library of Honesty",
              "Book Donation Box Program",
              "Raddi Se Shiksha – Book Bank Project",
              "Khushiyon Ki Potli",
              "Naya Savera",
              "Mission Literacy"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border text-center hover:shadow-lg transition"
              >
                <p className="font-medium text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          How to Become a Volunteer
        </h2>
        <p className="text-lg mb-6">
          To review our terms and conditions and submit your application, please
          fill out the volunteer form. Our team will review your details and get
          back to you shortly.
        </p>
        <p className="text-lg">
          For any further queries, feel free to contact us, we’d love to hear
          from you.
        </p>
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          Join hands with us and help create brighter futures through education
          and compassion.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdyLUvci-vYKUZ0bMaKvFH-7Ajcftx7_N3ySwpADI7f1V4gsg/viewform"
          className="inline-block px-10 py-4 rounded-2xl bg-[var(--marian-blue)] text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Join as Volunteer
        </a>
      </section>


      <SiteFooter />
    </div>
  );
}
