"use client";
import Image from "next/image";
import Link from "next/link";
import { Home, UserCheck, CreditCard, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import React from "react";

/**
 * Full redesigned NAYA SAVERA page
 * - Option A (Emerald Brand): #2A7F62 primary
 * - Clean editorial layout + improved contrast (WCAG-friendly)
 *
 * Put this file at app/<route>/page.tsx
 * Ensure these variables exist in global CSS (examples below).
 */

/* -------------------------
  Helper types & data
   ------------------------- */
type Step = {
  id: number;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
};

const STEPS: Step[] = [
  { id: 1, title: "Selection & Priority", subtitle: "Orphan/single-parent; income < ₹2L", icon: <UserCheck size={18} /> },
  { id: 2, title: "Home Visit & Verification", subtitle: "Project coordinator verification", icon: <Home size={18} /> },
  { id: 3, title: "Direct Payment", subtitle: "Fees paid directly to school/college", icon: <CreditCard size={18} /> },
  { id: 4, title: "Quarterly Monitoring", subtitle: "Academic progress & material checks", icon: <Clock size={18} /> },
];

/* -------------------------
  Small UI subcomponents
   ------------------------- */

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-6xl mx-auto px-6">{children}</div>;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--light-green-200)]/10 text-[var(--light-green-200)] text-sm font-semibold">
      {children}
    </span>
  );
}

function Kpi({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[var(--light-green-200)]">
      <div className="text-2xl lg:text-3xl font-extrabold text-[var(--navy-900)]">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

/* Styled circle used in the flow steps to match the curated look */
function StepCircle({ step }: { step: Step }) {
  return (
    <div className="flex flex-col items-center w-56">
      <div className="relative">
        <div className="w-40 h-40 rounded-full border-4 border-dashed border-[var(--light-green-200)] flex items-center justify-center bg-white shadow-sm">
          <div className="w-28 h-28 rounded-full bg-[var(--light-green-200)]/8 flex items-center justify-center text-[var(--light-green-200)]">
            {step.icon}
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <div className="text-sm font-semibold text-[var(--navy-800)]">{step.title}</div>
        {step.subtitle && <div className="text-xs text-slate-500 mt-1">{step.subtitle}</div>}
      </div>
    </div>
  );
}

/* Curved connector SVG between steps (responsive) */
function ConnectorSVG() {
  return (
    <svg className="w-full h-20" viewBox="0 0 400 80" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M20 60 C120 0, 280 120, 380 40" stroke="var(--light-green-200)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.12" fill="none" />
    </svg>
  );
}

/* -------------------------
  Main Page
   ------------------------- */

export default function Page(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[var(--bg-soft)] text-slate-800 antialiased">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* decorative shapes */}
        <div className="absolute -left-20 -top-28 w-96 h-96 rounded-full bg-[var(--light-green-200)]/20 blur-3xl pointer-events-none" />
        <div className="absolute right-0 top-0 w-[420px] h-[420px] rounded-full bg-[var(--light-green-200)]/6 blur-3xl pointer-events-none" />

        <div className="relative pt-20 pb-16">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div className="space-y-3">
                <Badge>Education that changes the story.</Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight text-[var(--navy-900)]">
                  NAYA SAVERA Initiative
                </h1>

                <p className="text-lg text-slate-700 max-w-xl leading-relaxed">
                  We provide financial aid, learning kits, and continuous mentoring so that vulnerable children
                  stay in school and thrive. A targeted, transparent approach ensures support reaches those who need it most.
                </p>

                <div className="flex flex-wrap gap-4 mt-4">
                  <Link
                    href="/donate-now"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[var(--light-green-200)] text-white font-semibold shadow hover:translate-y-[-1px] transition-transform"
                    aria-label="Donate to Naya Savera"
                  >
                    Sponsor a Child
                  </Link>

                  <Link
                    href="#how"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-[var(--light-green-200)] text-[var(--navy-800)] bg-white/60 hover:bg-white transition"
                  >
                    How We Work
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Kpi value="100+" label="Children supported annually" />
                  <Kpi value="95%" label="Continuation rate" />
                  <Kpi value="₹10,538" label="Annual cost / child" />
                </div>
              </div>

              {/* Right: image card */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white">
                  <Image
                    src="/assets/programs/naya-savera.jpg"
                    alt="Naya Savera students"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg border border-[var(--light-green-200)]">
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Annual goal</div>
                  <div className="text-lg font-semibold text-[var(--light-green-200)]">₹10,53,800</div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ================= Problem / Solution ================= */}
      <main className="py-12">
        <Container>
          <section className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--navy-900)]">The Problem We Solve</h2>
              <p className="mt-4 text-slate-700 leading-relaxed max-w-lg">
                For many families, education becomes the sacrifice when money is tight. Single-parent and orphaned children
                face a higher risk of dropping out. We step in to remove financial and material barriers so children can continue learning.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-[var(--navy-800)]">Our Approach</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">
                We combine careful beneficiary selection, verification, direct fee payment, and ongoing monitoring — ensuring
                support is effective and accountable.
              </p>
            </div>

           <div>
  <h3 className="text-lg font-semibold text-[var(--navy-800)]">What We Provide</h3>

  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
    {/* Card 1 */}
    <div
      className="rounded-xl p-4 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 border border-transparent"
      style={{ backgroundColor: "rgba(37, 67, 137, 0.8)" }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="font-medium text-white">Full fee coverage</div>
          <div className="text-sm text-white mt-1">Classes 9–12; exam & tuition fees covered for 10th & 12th</div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white/80">Maintains Enrolment</span>
            <span className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white/80">Fees Paid Directly</span>
            
          </div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div
      className="rounded-xl p-4 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 border border-transparent"
      style={{ backgroundColor: "rgba(146, 137, 42, 0.84)" }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="font-medium text-white">Books & learning kits</div>
          <div className="text-sm text-white mt-1">Complete supplies distributed yearly to sustain learning</div>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white/80">100 Kits/year</span>
            
          </div>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div
      className="rounded-xl p-4 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 border border-transparent"
      style={{ backgroundColor: "rgba(137, 52, 37, 0.8)" }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="font-medium text-white">Transparent operations</div>
          <div className="text-sm text-white/90 mt-1">NITI Aayog registered • 80G & 12A compliant • CSR eligible</div>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white/80">80G</span>
            <span className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white/80">12A</span>
            <span className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white/80">CSR</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-4">
    <Link href="/about#impact" className="inline-flex items-center gap-2 text-sm text-[var(--light-green-200)] hover:underline">
      Learn about beneficiaries & impact →
    </Link>
  </div>
</div>

          </section>

          {/* ================= Flowchart / SOP ================= */}
          <section id="how" className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--navy-900)]">How We Provide Aid (Our SOP)</h2>

            {/* Desktop flow: horizontal steps with curved connector */}
            <div className="hidden lg:block mt-10 relative">
              <div className="absolute inset-0 top-12 pointer-events-none">
                {/* big gentle curve */}
                <svg className="w-full h-32" viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M60 60 C300 0, 600 120, 1140 60" stroke="var(--light-green-200)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.10" fill="none" />
                </svg>
              </div>

              <div className="relative z-10 flex items-center justify-between gap-6">
                {STEPS.map((s, idx) => (
                  <div key={s.id} className="flex-1 flex flex-col items-center">
                    <StepCircle step={s} />
                    {/* small label under second step for more explanation */}
                    {idx === 1 && <div className="mt-4 text-center text-sm text-slate-600 max-w-[240px]">Verification, home visit and local assessment</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: stacked cards */}
            <div className="lg:hidden mt-8 space-y-4">
              {STEPS.map((s) => (
                <div key={s.id} className="bg-white rounded-xl p-4 shadow-sm border border-transparent">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--light-green-200)]/8 flex items-center justify-center text-[var(--light-green-200)]">
                      {s.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--navy-800)]">{s.title}</div>
                      {s.subtitle && <div className="text-sm text-slate-600 mt-1">{s.subtitle}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ================= Impact + CTA ================= */}
          <section className="bg-white rounded-2xl shadow-inner border border-transparent">
            <div className="grid lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-[var(--navy-900)]">Your support prevents dropouts</h3>
                <p className="mt-3 text-slate-700 max-w-2xl">Sustained support keeps children in classrooms, improves learning outcomes, and opens future opportunities. Join us to create long-term impact.</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg">
                  <div className="bg-[var(--light-green-200)]/8 rounded-xl p-4 text-center">
                    <div className="text-sm text-slate-600">Children supported</div>
                    <div className="text-xl font-semibold text-[var(--light-green-200)]">1,482+</div>
                  </div>

                  <div className="bg-[var(--light-green-200)]/8 rounded-xl p-4 text-center">
                    <div className="text-sm text-slate-600">Continuation rate</div>
                    <div className="text-xl font-semibold text-[var(--light-green-200)]">95%</div>
                  </div>

                  <div className="bg-[var(--light-green-200)]/8 rounded-xl p-4 text-center">
                    <div className="text-sm text-slate-600">Annual cost/child</div>
                    <div className="text-xl font-semibold text-[var(--light-green-200)]">₹10,538</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Link href="/donate-now" className="px-6 py-3 rounded-xl bg-[var(--light-green-200)] text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform">
                  Donate to Naya Savera
                </Link>
              </div>
            </div>
          </section>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}
