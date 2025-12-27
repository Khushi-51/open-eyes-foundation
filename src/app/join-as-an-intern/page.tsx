"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function Internship() {
  return (
    <div className="font-sans text-[hsl(var(--foreground))] bg-[hsl(var(--background))]">
      <Navbar />

      {/* HERO */}
      <section className="relative py-10 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary)/0.08)] to-transparent" />
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))]">
            Internship Opportunity
          </h1>
          <p className="mt-4 text-xl font-medium">
            At Open Eyes Foundation
          </p>
          
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-5 text-center space-y-3">
        <p className="mt-2 text-lg text-muted-foreground">
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
          <h2 className="text-3xl font-semibold mb-10 text-center">
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
                className="bg-white p-6 rounded-2xl shadow-md border text-center hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2">
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
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-4">
          Certificate of Recognition
        </h2>
        <p className="text-lg">
          Upon successful completion of the internship, interns will be awarded
          a <strong>Certificate of Recognition</strong> acknowledging their
          contribution and learning experience with Open Eyes Foundation.
        </p>
      </section>

      {/* HOW TO APPLY */}
      <section className="bg-[hsl(var(--muted))] py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-semibold">
            How to Apply
          </h2>
          <p className="text-lg">
            To review the terms and conditions and apply for the internship,
            please fill out the application form. Our team will review your
            application and contact you shortly.
          </p>
          <p className="text-lg">
            For any queries, feel free to reach out to us, we’re happy to help.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Become an Intern
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          Start your journey of learning, leadership, and social impact with
          Open Eyes Foundation.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdfVPSAJq71YXT3vy6NajjLVUyyk15aZPh7DdZvFXEni7krnA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-2xl bg-[var(--marian-blue)] text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Apply for Internship
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}
