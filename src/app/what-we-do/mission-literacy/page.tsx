"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  UserCheck,
  CreditCard,
  Clock,
  Users,
  Package,
  Activity
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

type Step = {
  id: number;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  img: string;
};

type KitItem = {
  name: string;
  quantity?: string | number;
  cost: number;
};

const STEPS: Step[] = [
  { id: 1, title: "Procurement", subtitle: "Purchase materials & kits", icon: <Users size={20} />,img: "/assets/projects/mission-literacy/s-1.png" },
  { id: 2, title: "Enrolment", subtitle: "Identify & register students", icon: <UserCheck size={20} />,img: "/assets/projects/mission-literacy/s-2.png" },
  { id: 3, title: "Distribution", subtitle: "Provide kits & fee support", icon: <CreditCard size={20} />,img: "/assets/projects/mission-literacy/s-3.png" },
  { id: 4, title: "Monitoring", subtitle: "Quarterly checks & audits", icon: <Clock size={20} />,img: "/assets/projects/mission-literacy/s-4.png" },
];
const defaultKit: KitItem[] = [
  { name: "School Bag", quantity: 1, cost: 450 },
  { name: "Registers (12)", quantity: 12, cost: 1020 },
  { name: "Pens (10)", quantity: 10, cost: 100 },
  { name: "Geometry Box", quantity: 1, cost: 100 },
  { name: "Pencils (5)", quantity: 5, cost: 25 },
  { name: "Erasers (5)", quantity: 5, cost: 25 },
  { name: "Sharpeners (5)", quantity: 5, cost: 25 },
];
function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-6xl mx-auto px-6">{children}</div>;
}

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
              className="object-contain p-2 rounded-full"
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

export default function Page() {
  const totalFundingRequired = 2462900;
  const kitItems = defaultKit;
  
  const kitTotal = kitItems.reduce((s, it) => s + it.cost, 0);

  return (
    <div className="min-h-screen  text-slate-800 antialiased">
      <Navbar />

      {/* HERO */}
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
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>

          <div className="relative max-w-7xl mx-auto text-center py-20 px-6">
            <div className="inline-flex items-center gap-3 justify-center">
              <div className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">An Initiative by Open Eyes Foundation — Manimajra, Chandigarh</div>
              <div className="rounded-full bg-yellow-400/10 px-3 py-1 text-sm">Mission Literacy: Classes 9–12</div>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Don't Let Education Stop After <span className="uppercase">Class 8</span></h1>
            <p className="mt-4 text-lg sm:text-xl text-white/95 max-w-3xl mx-auto">Complete academic kits & fee support for orphan, single-parent and needy children (Classes 9–12).</p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Link href="/donate-now" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md">
                Donate Now
              </Link>

              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Package size={16} />
                <div className="text-sm">We guarantee: <span className="font-bold ml-1">90% Pass Rate</span></div>
              </div>
            </div>

            <div className="mt-8">
              <div className="inline-flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2">
                <Activity size={16} />
                <div className="text-sm">Funding request: <span className="font-bold">₹24,62,900</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + PROBLEM */}
      <section className="bg-[var(--bg-soft)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[var(--marian-blue-600)]">Mission Literacy</h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-lg">
              We ensure that no child from an orphan or single-parent home drops out after Class 8 due to lack of basic academic supplies or fee support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT: Problem + Solution */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-[var(--marian-blue-500)]">The Problem</h3>
                <p className="mt-3 text-slate-700 leading-relaxed text-justify">
                  Government support under Sarva Shiksha Abhiyan ends at Class 8. Beyond that, many families cannot afford simple items like registers, pens, bags, or tuition forcing students to leave school.
                </p>
                <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
                  <li>Interrupted Studies: Students face year-long gaps without study materials.</li>
                  <li>Poor Outcomes: Academic performance drops and exam attendance falls.</li>
                  <li>Dropout Spiral: Short-term costs become permanent disengagement.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[var(--marian-blue-500)]">Our Solution</h3>
                <p className="mt-3 text-slate-700 leading-relaxed text-justify">
                  We provide a durable, year-long academic kit and targeted fee support to ensure continuity of education for Classes 9–12. Every child receives a kit designed to last the academic year and access to fee relief where needed.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 bg-white shadow-md rounded-xl border-l-4 border-[var(--marian-blue-500)] hover:shadow-lg transition">
                    <h4 className="text-lg font-semibold text-[var(--marian-blue-500)]">Complete Academic Kits</h4>
                    <p className="mt-2 text-slate-600 text-sm">Registers, pens, geometry box, bag everything for the academic year.</p>
                  </div>
                  <div className="p-6 bg-white shadow-md rounded-xl border-l-4 border-[var(--marian-blue-500)] hover:shadow-lg transition">
                    <h4 className="text-lg font-semibold text-[var(--marian-blue-500)]">Direct Fee Support</h4>
                    <p className="mt-2 text-slate-600 text-sm">Fees paid directly to institutions to avoid misuse and ensure continuity.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Image Card */}
            <div className="relative w-full flex justify-center">
              <div className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl mt-10">
                <div className="relative h-[380px]">
                  <img src="/assets/programs/mission-literacy.jpg" alt="Mission Literacy" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 opacity-40 mt-10"></div>
                  <div className="absolute bottom-6 left-[150px] text-white font-bold text-xl">Mission Literacy</div>
                </div>
                <div className="bg-white p-4 grid grid-cols-2 text-sm text-slate-700">
                  <div>Duration</div>
                  <div className="font-semibold">1 year</div>
                  <div>Transparency</div>
                  <div className="font-semibold">100% audit-ready</div>
                  <div>Certification</div>
                  <div className="font-semibold">80G & 12A</div>
                  <div>Partners</div>
                  <div className="font-semibold">eClerx, Bebo Technologies</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SOP / FLOW */}
      <section className="bg-white py-16 mx-auto max-w-6xl">
        <Container>
          <h2 className="text-2xl font-bold text-[var(--navy-900)] mb-12">
            How We Provide Aid (Our SOP)
          </h2>

          {/* Metrics / Key Goals */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16 text-center">
            <div>
              <div className="text-xl font-bold text-[var(--marian-blue-500)]">All Kits for the Needy</div>
              <div className="mt-1 text-sm text-slate-600">Needy Youth (Classes 9–12)</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[var(--marian-blue-500)]">90%</div>
              <div className="mt-1 text-sm text-slate-600">Success Rate - Guarantee of passing annual exams</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[var(--marian-blue-500)]">100%</div>
              <div className="mt-1 text-sm text-slate-600">Transparency - Strict SOP & Audit Checklist</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[var(--marian-blue-500)]">12 Months</div>
              <div className="mt-1 text-sm text-slate-600">Project Duration - June 2024 to April 2025</div>
            </div>
          </div>

          {/* Desktop SOP */}
          <div className="hidden lg:flex mt-10 relative overflow-visible">
            <div className="absolute inset-0 top-12 pointer-events-none">
              <svg className="w-full h-32" viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M60 60 C300 0, 600 120, 1140 60" stroke="var(--light-green-200)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.10" fill="none" />
              </svg>
            </div>

            <div className="relative z-10 flex items-center justify-between gap-6 w-full">
              {STEPS.map((s, idx) => (
                <div key={s.id} className="flex-1 flex flex-col items-center">
                  <StepCircle step={s} />
                  {idx === 1 && (
                    <div className="mt-4 text-center text-sm text-slate-600 max-w-[240px]">
             
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile SOP */}
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

          <p className="mt-12 text-center text-slate-600 max-w-2xl mx-auto">
            Each stage is audit-ready, including direct approval of all major payments by the President.
          </p>
        </Container>
      </section>

   

  

<div className="bg-white p-6">
       <section className="max-w-6xl mx-auto rounded-1xl mt-12">
        <div className="md:flex md:items-center md:justify-equally gap-64">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Financial Need & Transparency
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Clear breakdown of the funding required to run{" "}
              <span className="font-medium">Mission Literacy</span> and the academic kit contents.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-14 py-3 rounded-lg shadow-lg">
              <p className="text-xs uppercase">Total Funding Required</p>
              <p className="text-xl font-bold">
                ₹{totalFundingRequired.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>

        {/* Kit Table */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 bg-gray-50 p-5 rounded-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-800">Academic Kit Details</h3>
              <p className="text-sm text-gray-600">
                Cost per kit: <span className="font-semibold">₹{kitTotal}</span>
              </p>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-gray-600">
                    <th className="py-2">Item</th>
                    <th className="py-2">Quantity</th>
                    <th className="py-2">Cost (₹)</th>
                  </tr>
                </thead>
                <tbody>

                  {kitItems.map((it, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="py-3 text-gray-800">{it.name}</td>
                      <td className="py-3 text-gray-700">{it.quantity ?? "—"}</td>
                      <td className="py-3 font-medium">{it.cost}</td>
                    </tr>
                  ))}

                  <tr className="border-t bg-white">
                    <td className="py-3 font-semibold">Total</td>
                    <td />
                    <td className="py-3 font-semibold">{kitTotal}</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

          {/* Donation CTA */}
          <aside className="bg-white p-5 rounded-xl shadow-sm flex flex-col gap-4">
            <h4 className="text-sm text-gray-600">Transparency</h4>
            <p className="text-sm text-gray-700">
              Every rupee goes directly to academic kits & fee support. Full audit reports shared.
            </p>

            <button
              onClick={() => window.location.href = "/donate-now"}
              className="w-full py-2 rounded-lg bg-indigo-600 text-white font-medium hover:opacity-95 transition"
            >
              Donate Now
            </button>

            {/* <p className="text-xs text-gray-500">
              Tip: Link this to Razorpay / Instamojo / your donation page.
            </p> */}
          </aside>
        </div>
      </section>
</div>
    <SiteFooter />
    </div>
  );
}
