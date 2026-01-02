"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function GetInvolvedPage(): React.ReactElement {
  return (
    <main className="font-sans text-[hsl(var(--foreground))] bg-[hsl(var(--background))]">
      <Navbar />

      {/* OVERVIEW HEADER */}
      <section className="py-10 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#001B44] mb-4 relative z-10">
          Get Involved
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl text-center mx-auto">
          There are many ways to support Open Eyes Foundation. Whether you
          contribute your time, skills, or resources, your involvement helps us
          create meaningful and lasting impact in the lives of underserved
          children.
        </p>
      </section>

      {/* HOW YOU CAN GET INVOLVED */}
      <section className="bg-[hsl(var(--muted))] py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Ways to Get Involved
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Volunteer */}
            <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transition text-center">
              <h3 className="text-xl font-semibold mb-5">
                 Volunteer
              </h3>
              <p className="text-muted-foreground mb-6 text-justify">
                Be a part of our on-ground and outreach initiatives. Contribute
                your time and skills to support education, libraries, and
                community programs.
              </p>
              <a
                href="/volunteer"
                className="text-[var(--marian-blue)] font-medium hover:underline"
              >
                Join as Volunteer →
              </a>
            </div>

            {/* Mission 100 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-5 text-center">
                 Mission 100
              </h3>
              <p className="text-muted-foreground mb-6 text-justify">
                Become a Mission 100 member and help sustain our core operations
                through consistent support and guidance.
              </p>
              <a
                href="/join-as-a-member"
                className="text-[var(--marian-blue)] font-medium hover:underline"
              >
                Join Mission 100 →
              </a>
            </div>

            {/* Internship */}
            <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-5 text-center">
                 Internship
              </h3>
              <p className="text-muted-foreground mb-6 text-justify">
                Gain hands-on experience while working on real social impact
                projects with mentorship and learning opportunities.
              </p>
              <a
                href="/join-as-an-intern"
                className="text-[var(--marian-blue)] font-medium hover:underline"
              >
                Apply for Internship →
              </a>
            </div>
          </div>
             <section className="py-10 px-6 max-w-full mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Every Contribution Matters
        </h2>
        <p className="text-lg text-muted-foreground">
          No matter how you choose to get involved, your support plays a vital
          role in building opportunities, spreading knowledge, and changing
          lives.
        </p>
      </section>
        </div>
      </section>

      {/* CLOSING */}
     

      <SiteFooter />
    </main>
  );
}
