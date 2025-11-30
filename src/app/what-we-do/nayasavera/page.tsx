"use client";
import Image from "next/image";
import Link from "next/link";
import { Home, UserCheck, CreditCard, Clock, BookOpen, Users, ShieldCheck } from "lucide-react";
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
  img: React.ReactNode;
};

const STEPS: Step[] = [
  { 
    id: 1, 
    title: "Selection & Priority", 
    subtitle: "Orphan/single-parent; income < ₹2L", 
    icon: <UserCheck size={18} />,
    img: "/assets/projects/naya-savera/s-1.png"
  },
  { 
    id: 2, 
    title: "Home Visit & Verification", 
    subtitle: "Project coordinator verification", 
    icon: <Home size={18} />,
    img: "/assets/sop/step2.png"
  },
  { 
    id: 3, 
    title: "Direct Payment", 
    subtitle: "Fees paid directly to school/college", 
    icon: <CreditCard size={18} />,
    img: "/assets/sop/step3.png"
  },
  { 
    id: 4, 
    title: "Quarterly Monitoring", 
    subtitle: "Academic progress & material checks", 
    icon: <Clock size={18} />,
    img: "/assets/sop/step4.png"
  },
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
/* Styled circle used in the flow steps to match the curated look */
function StepCircle({ step }: { step: Step }) {
  return (
    <div className="flex flex-col items-center w-56">
      <div className="relative">
        {/* Outer Dashed Circle */}
        <div className="w-40 h-40 rounded-full border-[4px] border-dashed border-[var(--light-green-200)] flex items-center justify-center bg-white shadow-sm">
          
          {/* Inner Soft Circle */}
          <div className="w-36 h-36 rounded-full bg-[var(--light-green-200)]/10 flex items-center justify-center overflow-hidden">

            {/* FIX: IMAGE SHOULD RENDER PROPERLY */}
            <Image
              src={step.img}
              alt={step.title}
              width={144}
              height={144}
              className="object-contain rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Text under the circle */}
      <div className="mt-4 text-center">
        <div className="text-sm font-semibold text-[var(--navy-800)]">{step.title}</div>
        {step.subtitle && (
          <div className="text-xs text-slate-500 mt-1">{step.subtitle}</div>
        )}
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

      {/* ================= HERO (enhanced, blue gradient) ================= */}
    <section className="relative">
  <div
    className="relative bg-gradient-to-r from-[var(--marian-blue-700)] to-[var(--marian-blue-500)] text-white z-[1]"
    style={{
      backgroundImage: "url('/assets/hero8.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Dark overlay to keep text readable */}
    <div className="absolute inset-0 bg-[rgba(0,0,0,0.50)]"></div>

    <div className="relative max-w-7xl mx-auto text-center py-24 px-6 overflow-hidden">
      <h1 className="text-6xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
        Project <span className="uppercase">NAYA SAVERA</span>
      </h1>

      <p className="mt-4 text-lg sm:text-xl text-white/95">
        Let no child drop out of school due to poverty.
      </p>

      <p className="mt-2 text-sm text-white/80">
        Our mission is to ensure the education of orphan and single-parent children.
      </p>

      <div className="mt-8">
        <Link
          href="/donate-now"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-md ring-2 ring-black/6"
        >
          Bring Change Today
        </Link>
      </div>

      {/* Decorative large faint heading */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-[var(--marian-blue-1)] text-6xl sm:text-7xl lg:text-[7.5rem] font-extrabold tracking-wide select-none z-[-1]">
          Education and Future of Children
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ================= Our Mission (cards) ================= */}
      <section className="bg-white py-16">
        <Container>
            <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[var(--marian-blue-600)]">Naya Savera</h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-lg">
              Our objective is to provide financial and educational aid to the most vulnerable children in society (especially orphans and single-parent children), ensuring they stay enrolled in school. We ensure that lack of fees, books, or essential supplies does not become a barrier to their studies.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-xl p-6 bg-blue-50 shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <BookOpen size={20} className="text-[var(--marian-blue-500)]" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-[var(--marian-blue-500)] text-center">100% Fee Coverage</h4>
              <p className="mt-3 text-sm text-slate-600 text-center">Tuition fees are covered for Classes 9th to 12th. Examination fees are covered for Classes 10th and 12th.</p>
            </div>

            <div className="rounded-xl p-6 bg-blue-50 shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Users size={20} className="text-[var(--marian-blue-500)]" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-[var(--marian-blue-500)] text-center">Books and Kits</h4>
              <p className="mt-3 text-sm text-slate-600 text-center">Providing a complete educational material kit to all students every year.</p>
            </div>

            <div className="rounded-xl p-6 bg-blue-50 shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <ShieldCheck size={20} className="text-[var(--marian-blue-500)]" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-[var(--marian-blue-500)] text-center">High Transparency</h4>
              <p className="mt-3 text-sm text-slate-600 text-center">Registered with NITI Aayog and eligible for CSR funding (80G, 12A certified CSR-1 Registered).</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= Problem / Solution ================= */}
      <main className="py-5">
        <Container>
          <section className="grid lg:grid-cols-2 gap-12 items-start mb-12 mt-12">
  {/* LEFT SIDE */}
  <div>
    <h2 className="text-2xl font-bold text-[var(--marian-blue-500)] text-center lg:text-left mt-5">
      The Problem We Solve
    </h2>

    <p className="mt-4 text-slate-700 leading-relaxed text-justify">
      In poverty, the cost of education often becomes the final breaking point for a family. 
      Single-parent or orphan children, in particular, have no financial safety net 
      fees, books, and uniforms quickly become unaffordable.
    </p>

    <h3 className="mt-6 text-lg font-semibold text-[var(--navy-800)]">
      The Struggle: Surviving on Limited Income
    </h3>

    <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2 text-justify">
      <li>
        <strong>Zero Savings:</strong> After meeting basic needs, little to nothing is left for savings or unexpected costs.
      </li>
      <li>
        <strong>Education Impossible:</strong> Due to limited income, affording annual fees, examination charges, books, and uniforms becomes impossible.
      </li>
      <li>
        <strong>Our Solution:</strong> NAYA SAVERA removes these expenses so a child is not forced to abandon education.
      </li>
    </ul>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex justify-center">
    <div className="w-full max-w-md rounded-xl overflow-hidden p-2" >
      <div className="relative h-96">
        <img
          src="/assets/programs/naya-savera.jpg"
          alt="Naya Savera"
          className="w-96 h-full object-cover object-top rounded-full object-center m-auto"
        />
        <div className="absolute rounded-50% inset-0 opacity-40"></div>
        <div className="absolute left-[150px] bottom-4 text-white font-bold text-xl m-auto">Naya Savera</div>
      </div>

    </div>
  </div>
  <div className="grid grid-cols-2 text-md text-slate-800">

    <div className="font-medium bg-[var(--marian-blue-50)] py-3 px-4 border-b border-slate-200">
      Duration
    </div>
    <div className="font-semibold py-3 px-4 border-b border-slate-200">
      1 Year
    </div>

    <div className="font-medium bg-[var(--marian-blue-50)] py-3 px-4 border-b border-slate-200">
      Transparency
    </div>
    <div className="font-semibold py-3 px-4 border-b border-slate-200">
      100% Audit-Ready
    </div>
    </div>   
    <div className="grid grid-cols-2 text-md text-slate-800">
    <div className="font-medium bg-[var(--marian-blue-50)] py-3 px-4 border-b border-slate-200">
      Certification
    </div>
    <div className="font-semibold py-3 px-4 border-b border-slate-200">
      80G & 12A, CSR-1
    </div>

    <div className="font-medium bg-[var(--marian-blue-50)] py-3 px-4 border-b border-slate-200">
      Partners
    </div>
    <div className="font-semibold py-3 px-4 border-b border-slate-200">
      RM Chemicals Pvt. Ltd.
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
          </Container>

          {/* ================= Impact (deep-blue band) ================= */}
          <section className="bg-[var(--marian-blue-500)] w-full text-white py-16">
          
              <h2 className="text-2xl lg:text-3xl font-bold text-center">Our Impact (What your donation achieves)</h2>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-[var(--marian-blue-600)] rounded-xl p-8 shadow-lg text-center">
                  <div className="text-4xl lg:text-5xl font-extrabold">100+</div>
                  <div className="mt-2 text-sm">Children supported annually</div>
                </div>

                <div className="bg-[var(--marian-blue-600)] rounded-xl p-8 shadow-lg text-center">
                  <div className="text-4xl lg:text-5xl font-extrabold">95%</div>
                  <div className="mt-2 text-sm">Academic continuation rate</div>
                </div>

                <div className="bg-[var(--marian-blue-600)] rounded-xl p-8 shadow-lg text-center">
                  <div className="text-4xl lg:text-5xl font-extrabold">₹10,538</div>
                  <div className="mt-2 text-sm">Annual cost per child (Fully Loaded)</div>
                </div>
              </div>

              <p className="mt-8 text-center max-w-2xl mx-auto text-white/90">Your support directly prevents a child from dropping out and provides them with the opportunity to receive education with dignity.</p>
      
          </section>

          {/* ================= Final Boxed CTA ================= */}
          <section className="py-16">
            <Container>
              <div className="mx-auto max-w-3xl bg-white rounded-xl p-8 shadow-xl border-2 border-yellow-400 text-center">
                <h3 className="text-2xl font-bold text-[var(--marian-blue-500)]">Bring a New Dawn Today</h3>
                <p className="mt-3 text-slate-700">We require your support to meet our annual goal of ₹10,53,800.</p>
                <p className="mt-4 text-sm text-red-600">OEFMC is NITI Aayog registered and eligible for CSR (Corporate Social Responsibility).</p>

                <div className="mt-6">
                  <Link href="/donate-now" className="inline-block bg-[#2fb86f] hover:bg-[#28a65f] text-white font-semibold px-8 py-3 rounded-full shadow-lg">
                    DONATE NOW
                  </Link>
                </div>
              </div>
            </Container>
          </section>
   
      </main>

      <SiteFooter />
    </div>
  );
}
