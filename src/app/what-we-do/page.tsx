"use client"
import React from "react"
import Navbar from "@/components/Navbar"
import SiteFooter from "@/components/SiteFooter"
import Image from "next/image"

const programs = [
  {
    title: "Raddi Se Shiksha",
    desc: "Collecting used books and redistributing to students.",
    img: "/assets/programs/raddi-se-shiksha.png",
    link: "/what-we-do/raddi-se-shiksha",
  },
  {
    title: "Mobile Library (Gyaan Ka Safar)",
    desc: "Mobile libraries bringing books to neighborhoods and schools.",
    img: "/assets/programs/gyaan-ka-safar.jpg",
    link: "/what-we-do/gyaan-ka-safar",
  },
  {
    title: "Library of Honesty",
    desc: "Community book boxes and self-service lending points.",
    img: "/assets/programs/Library-of-honesty.jpg",
    link: "/what-we-do/library-of-honesty",
  },
  {
    title: "Naya Savera",
    desc: "Scholarships and support for vulnerable children.",
    img: "/assets/programs/naya-savera.jpg",
    link: "/what-we-do/nayasavera",
  },
  {
    title: "Mission Literacy",
    desc: "Awareness drives and reading programs.",
    img: "/assets/programs/mission-literacy.jpg",
    link: "/what-we-do/mission-literacy",
  },
  {
    title: "Khushiyon ki Potli",
    desc: "Happiness kits and outreach events for children.",
    img: "/assets/programs/khushiyon-ki-potli.jpg",
    link: "/what-we-do/khushiyon-ki-potli",
  },
]


export default function WhatWeDoPage(): React.ReactElement {
  return (
    <main>
      <Navbar />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
           <section className="py-8 text-center relative overflow-hidden">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#001B44] mb-4 relative z-10">
          What We Do
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our work focuses on book distribution, mobile libraries, scholarships and community-driven <span className="text-blue-700 font-semibold">programs </span>
           that increase access to education.
        </p>

      </section>
          
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map(p => (
              <article key={p.title} className="bg-[#E6FBFB] rounded-lg shadow">
                <Image src={p.img} alt={p.title} width={600} height={360} className="w-full h-85 object-contain rounded" />
                <h3 className="mt-3 font-semibold text-[#003366] px-2">{p.title}</h3>
                <p className="text-sm mt-2 text-[#374151] px-2">{p.desc}</p>
                <div className="mt-3 p-2"><a href={p.link} target="_blank" rel="noopener noreferrer" className="text-[#0056B3]">Learn more →</a></div>
              </article>
            ))}
          </div>

          <section className="mt-12 bg-white border rounded p-6">
            <h2 className="text-xl font-semibold">Books Donation Box</h2>
            <p className="mt-2 text-sm text-[#374151]">We accept gently used books, stationery and educational materials. You can drop items at our donation points or schedule a pickup.</p>
            <ul className="mt-3 list-disc pl-6 text-sm text-[#374151]">
              <li>Accepted items: school books, story books, stationery, educational kits.</li>
              <li>Not accepted: damaged or waterlogged books.</li>
              <li>To schedule a pickup, email: openeyesfoundationhr@gmail.com</li>
            </ul>
            <div className="mt-4">
              <a href="/books-donation-box" className="inline-block px-4 py-2 bg-[#FFD05A] text-[#003366] rounded font-semibold">Donation Box Details</a>
            </div>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
