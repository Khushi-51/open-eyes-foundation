"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UserCheck, CreditCard, Clock, Users, Package, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

type Step = {
  id: number;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  img: string;
};
const STEPS: Step[] = [
  {
    id: 1,
    title: "Monthly Library Outreach",
    subtitle: "Regular monthly visits to schools and NGO centers for issuing, returning, and reissuing books to enrolled children.",
    icon: <Users size={20} />,
    img: "/assets/projects/gyaan-ka-safar/s-1.png",
  },
  {
    id: 2,
    title: "Reading Engagement & Skill Building",
    subtitle: "Project Coordinators interact with children about the books they read to develop expression, confidence, and critical thinking.",
    icon: <UserCheck size={20} />,
    img: "/assets/projects/gyaan-ka-safar/s-2.png",
  },
  {
    id: 3,
    title: "Sustainable Book Recycling System",
    subtitle: "Books collected through Saturday donation drives are quality-checked and redistributed, creating a sustainable resource loop.",
    icon: <CreditCard size={20} />,
    img: "/assets/projects/gyaan-ka-safar/s-3.png",
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-6xl mx-auto px-6">{children}</div>;
}

function StepCircle({ step }: { step: Step }) {
  return (
    <div className="flex flex-col items-center w-56 transform transition hover:scale-105">
      <div className="relative">
        <div className="w-40 h-40 rounded-full border-4 border-dashed border-green-300 flex items-center justify-center bg-white shadow-md">
          <div className="w-36 h-36 rounded-full bg-green-100/10 flex items-center justify-center overflow-hidden">
            <Image src={step.img} alt={step.title} width={144} height={144} className="object-contain p-2 rounded-full" />
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <div className="text-sm font-semibold text-gray-800">{step.title}</div>
        {step.subtitle && <div className="text-xs text-gray-500 mt-1">{step.subtitle}</div>}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen text-gray-800 antialiased">
      <Navbar />

      {/* HERO */}
      <section className="relative">
        <div
          className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white"
          style={{
            backgroundImage: "url('/assets/hero8.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-7xl mx-auto text-center py-20 px-6">
            <div className="inline-flex items-center gap-3 justify-center">
              <div className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">Open Eyes Foundation Initiative</div>
              <div className="rounded-full bg-yellow-400/10 px-3 py-1 text-sm">Gyaan Ka Safar</div>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Bringing Education Closer — <span className="uppercase">Gyaan Ka Safar</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/95 max-w-3xl mx-auto">
              Daily learning support, mentorship & safe study spaces for children in underserved communities.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Link href="#get-involved" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + PROBLEM */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[var(--marian-blue-600)]">Gyaan Ka Safar</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
              We create community-based learning hubs that support children from slum and underserved areas through daily teaching, mentorship, and academic materials.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
             <div className="space-y-10 mt-[20px]">
              <div>
                <h3 className="text-2xl font-bold text-[var(--marian-blue-500)]">The Problem</h3>
                <br></br>
                <h3 className="text-1xl font-semibold">The Core Challenge: Lack of Reading Habits & Skills</h3>
                <p>Children in our target communities (rural schools, urban slums) lack physical access to diverse and inspiring books beyond their school texts. This prevents them from developing strong *reading habits* and broadens the knowledge gap.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[var(--marian-blue-500)]">Our Solution</h3>
                <p className="mt-3 text-slate-700 leading-relaxed text-justify">
                  Building Skills Through Access: The Gyaan Ka Safar Mobile Library provides children with free, *regular access* to books they choose. We encourage reading and facilitate discussion sessions to develop *critical thinking* and *public speaking* skills.
                </p>
              </div>
            </div>
             <div className="w-full max-w-md rounded-xl overflow-hidden p-2" >
      <div className="relative h-96">
        <img
          src="/assets/programs/gyaan-ka-safar.jpg"
          alt="Naya Savera"
          className="w-96 h-full object-cover object-top rounded-full object-center m-auto"
        />
        <div className="absolute rounded-50% inset-0 opacity-40"></div>
        <div className="absolute left-[150px] bottom-4 text-white font-bold text-xl m-auto">Gyaan Ka Safar</div>
      </div>

    </div>
          </div>

        </div>
      </section>

      {/* SOP / FLOW */}
      <section className="bg-white py-16 mx-auto max-w-6xl">
        <Container>
          <h2 className="text-2xl font-bold text-[var(--navy-900)] mb-12">
            How We Work (Our SOP)
          </h2>

          {/* Desktop SOP */}
          <div className="hidden lg:flex mt-10 relative overflow-visible">
            <div className="absolute inset-0 top-12 pointer-events-none">
              <svg className="w-full h-32" viewBox="10 10 700 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M60 60 C300 0, 600 120, 750, 60" stroke="var(--light-green-200)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.10" fill="none" />
              </svg>
            </div>

            <div className="relative z-10 flex items-center justify-between gap-6 w-full">
              {STEPS.map((s, idx) => (
                <div key={s.id} className="flex-1 flex flex-col items-center">
                  <StepCircle step={s} />
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
        </Container>
      </section>

      <section className="space-y-10 m-auto mt-10 max-w-6xl">
<h2 className="text-4xl font-bold text-center text-[hsl(var(--primary))]">Our Goals & Impact Measurement</h2>


<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="p-6 bg-white rounded-2xl shadow-md border">
<h3 className="font-semibold text-xl mb-2">Goal 1</h3>
<p>Increase children enrollment and outreach.</p>
</div>


<div className="p-6 bg-white rounded-2xl shadow-md border">
<h3 className="font-semibold text-xl mb-2">Goal 2</h3>
<p>Ensure regular book issuance and rotation.</p>
</div>


<div className="p-6 bg-white rounded-2xl shadow-md border">
<h3 className="font-semibold text-xl mb-2">Goal 3</h3>
<p>Sustain the resource collection and reuse cycle.</p>
</div>


<div className="p-6 bg-white rounded-2xl shadow-md border">
<h3 className="font-semibold text-xl mb-2">Goal 4</h3>
<p>Complete planned school and NGO visits.</p>
</div>
</div>


<div className="p-6 bg-[hsl(var(--accent))]/10 border rounded-2xl shadow-md">
<h3 className="font-semibold text-xl mb-3">Monitoring System</h3>
<p>
We track progress using daily activity logs, inventory management, and collect annual
Google Form feedback from children to measure improvements in reading comprehension and
skill development.
</p>
</div>
</section>


{/* Partner With Us Section */} 
<section className="space-y-10 mt-20 mb-20 max-w-6xl m-auto">
  <h2 className="text-4xl font-bold text-center text-[hsl(var(--primary))]">
    Partner With Us
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Donation Card */}
    <div className="p-6 bg-white rounded-2xl shadow-md border flex flex-col items-start justify-between">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Financial Donation</h3>
        <p>Your funds are primarily dedicated to children's program activities. 80G tax benefits available.</p>
      </div>
      <button className="mt-6 px-5 py-2 bg-[var(--marian-blue-400)] text-white rounded-xl shadow">
        Donate Securely
      </button>
    </div>

    {/* Book Donation Card */}
    <div className="p-6 bg-white rounded-2xl shadow-md border flex flex-col items-start justify-between">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Donate Your Books</h3>
        <p>Your donated books directly fuel the children's journey of knowledge.</p>
      </div>
      <button className="mt-6 px-5 py-2 bg-[var(--marian-blue-400)] text-white rounded-xl shadow">
        Schedule Pickup
      </button>
    </div>

    {/* Volunteer Card */}
    <div className="p-6 bg-white rounded-2xl shadow-md border flex flex-col items-start justify-between">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Volunteer Your Time</h3>
        <p>Assist with children's reading sessions, book sorting, and awareness campaigns.</p>
      </div>
      <button className="mt-6 px-5 py-2 bg-[var(--marian-blue-400)] text-white rounded-xl shadow">
        Fill Volunteer Form
      </button>
    </div>

  </div>
</section>


      <SiteFooter />
    </div>
  );
}
