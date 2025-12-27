"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function JoinAsMember() {
  return (
    <div className="font-sans text-[hsl(var(--foreground))] bg-[hsl(var(--background))]">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl py-10 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))]">
          Mission 100 – A Circle of Change Makers
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          An initiative by <strong>Open Eyes Foundation</strong> bringing together
          100 compassionate individuals committed to educating underprivileged
          children and helping them progress in life.
        </p>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-10 space-y-6 mx-auto">
        <p>
          Mission 100 members act as the backbone of our foundation, ensuring
          that our work for underprivileged children continues seamlessly,
          sustainably, and with real impact. When our core needs are supported,
          we can focus entirely on empowering children through education.
        </p>
      </section>

      {/* Objective */}
      <section className="max-w-6xl bg-[hsl(var(--muted))] py-14 px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Objective of Mission 100
          </h2>
          <p>
            To create a strong and dependable support network that sustains the
            Foundation’s essential operational needs, enabling us to dedicate
            our complete focus to educating underserved children.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="max-w-6xl py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Why Join Mission 100?</h2>
        <p className="mb-8">
          Uplifting society is a shared responsibility. Contributing a small
          portion of what we have toward a child’s education is not just
          charity—it is a moral and social commitment.
        </p>

        <ul className="grid md:grid-cols-3 gap-6">
          <li className="p-6 bg-white rounded-2xl shadow border">
            <h3 className="font-semibold mb-2">Book Bank Operations</h3>
            <p>
              Supports rent and daily operations of our primary hub of activity.
            </p>
          </li>
          <li className="p-6 bg-white rounded-2xl shadow border">
            <h3 className="font-semibold mb-2">Office Coordination</h3>
            <p>
              Helps cover the salary of the office coordinator managing daily
              workflows.
            </p>
          </li>
          <li className="p-6 bg-white rounded-2xl shadow border">
            <h3 className="font-semibold mb-2">Mobile Library</h3>
            <p>
              Supports driver salary and fuel costs for outreach on wheels.
            </p>
          </li>
        </ul>
      </section>

      {/* Role */}
      <section className="max-w-6xl bg-[hsl(var(--muted))] py-16 px-6 mx-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold">Your Role in Mission 100</h2>

          <ul className="space-y-4">
            <li>
              <strong>Annual Contribution:</strong> ₹5100/- (or more, as per your
              capacity)
            </li>
            <li>
              <strong>Advisory Role:</strong> All Mission 100 members are
              recognized as Advisors to the Foundation and can guide future
              initiatives.
            </li>
            <li>
              <strong>Membership Certificate:</strong> Issued as recognition for
              your social service contribution.
            </li>
            <li>
              <strong>Stay Connected:</strong> Join our dedicated WhatsApp group
              for updates and participation opportunities.
            </li>
          </ul>
        </div>
      </section>

      {/* Volunteering */}
      <section className="max-w-6xl py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">
          Volunteering Opportunities (Optional)
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Assembling educational kits</li>
            <li>Preparing ‘Khushiyon Ki Potli’</li>
            <li>Sorting and repairing donated books</li>
            <li>Binding notebooks and stationery</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2">
            <li>Storytelling sessions for children</li>
            <li>Spreading awareness and donations</li>
            <li>Inviting friends and family to visit</li>
          </ul>
        </div>
      </section>

      {/* Annual Meet */}
      <section className="max-w-6xl bg-[hsl(var(--muted))] py-16 px-6 mx-auto">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-semibold">Annual Get-Together</h2>
          <p>
            Mission 100 members meet once a year to share stories, reflect on
            collective achievements, and celebrate the impact created together.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl py-20 px-6 text-center mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Become a Mission 100 Member
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Be one of the 100 pillars of change supporting education, hope, and
          opportunity for children who need it most.
        </p>
       <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSeE4mLyrcNNmMvmekfhdAB_YxPL_GLfpSP6YGNre0bhSKYM1w/viewform"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-10 py-4 rounded-2xl bg-[var(--marian-blue)] text-white font-semibold shadow-lg hover:scale-105 transition"
>
  Join Mission 100
</a>

      </section>

      <SiteFooter />
    </div>
  );
}
