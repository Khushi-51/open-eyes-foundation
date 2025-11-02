"use client"

import Image from "next/image"
import React from "react"

export default function HomePage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-[#F9FAFB] text-[#1F2937]">
      {/* HERO */}
      <header className="relative">
        <div className="h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/assets/hero.png')`,
            }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center h-full">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Together, we open eyes to a brighter future
              </h1>
              <p className="mt-4 text-lg md:text-xl opacity-90">
                Empowering children and communities through education, mobile libraries, and community programs across Chandigarh & surrounding areas.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="/donate" className="inline-block px-6 py-3 rounded-lg bg-[#FFD05A] text-[#003366] font-semibold shadow hover:scale-105 transform transition">
                  Donate Now
                </a>
                <a href="/join" className="inline-block px-6 py-3 rounded-lg border border-white/40 text-white hover:bg-white/10 transition">
                  Become a Volunteer
                </a>
              </div>
            </div>
            {/* Quick impact card */}
            <div className="hidden md:block ml-auto bg-white/90 text-[#1F2937] rounded-xl p-5 shadow-lg w-72">
              <h4 className="font-semibold">Our Impact</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>📚 <strong>Books distributed:</strong> 5,000+</li>
                <li>👧 <strong>Children helped:</strong> 1,250+</li>
                <li>🚐 <strong>Mobile library runs:</strong> 120</li>
              </ul>
              <a href="/impact" className="mt-4 inline-block text-sm text-[#0056B3]">See full impact →</a>
            </div>
          </div>
        </div>
      </header>

      {/* MISSION */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-3 text-lg text-[#374151]">
            To ensure access to education for underprivileged children through book banks, mobile libraries, community programs and targeted initiatives.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-semibold">Education</h3>
              <p className="text-sm mt-1">Book banks & libraries</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-semibold">Community</h3>
              <p className="text-sm mt-1">Volunteer & awareness programs</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-semibold">Sustainability</h3>
              <p className="text-sm mt-1">Book reuse & mobile libraries</p>
            </div>
          </div>
        </div>
        <div>
          <Image src="/assets/hero.jpg" alt="Mobile Library" width={800} height={520} className="rounded-xl shadow-md w-full object-cover h-64" />
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold">Our Programs</h2>
          <p className="mt-2 text-sm text-[#6B7280]">(Click program to learn more)</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title: "Raddi Se Shiksha", desc: "Book bank and distribution", img: "/assets/program1.jpg"},
              {title: "Gyaan Ka Safar (Mobile Library)", desc: "Mobile library runs", img: "/assets/program2.jpg"},
              {title: "Library of Honesty", desc: "Community book boxes", img: "/assets/program3.jpg"},
              {title: "Naya Savera", desc: "Scholarships & support", img: "/assets/program4.jpg"},
              {title: "Mission Literacy", desc: "Awareness drives", img: "/assets/program5.jpg"},
              {title: "Khushiyon ki Potli", desc: "Happiness kits for kids", img: "/assets/program6.jpg"},
            ].map((p) => (
              <article key={p.title} className="rounded-lg overflow-hidden shadow-lg bg-gray-50">
                <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm mt-2 text-[#6B7280]">{p.desc}</p>
                  <div className="mt-3 flex gap-2">
                    <a href={`/programs/${p.title.replace(/\s+/g,'-').toLowerCase()}`} className="text-sm text-[#0056B3]">Read more</a>
                    <a href="/donate" className="ml-auto text-sm bg-[#FFD05A] px-3 py-1 rounded">Donate</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT COUNTERS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-extrabold">+1,250</div>
            <div className="mt-1 text-sm text-[#6B7280]">Children Educated</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-extrabold">+5,000</div>
            <div className="mt-1 text-sm text-[#6B7280]">Books Distributed</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-extrabold">120</div>
            <div className="mt-1 text-sm text-[#6B7280]">Mobile Library Runs</div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#F9FAFB] py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold">Gallery</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({length:8}).map((_,i) => (
              <button key={i} className="rounded overflow-hidden shadow-sm">
                <img src={`/assets/gallery-${i+1}.jpg`} alt={`gallery ${i+1}`} className="w-full h-28 object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow p-6 md:flex gap-6 items-center">
          <div className="flex-1">
            <h3 className="text-lg font-bold">Support Our Work</h3>
            <p className="mt-2 text-sm text-[#6B7280]">Make a direct impact — donate via UPI/PhonePe or send books at our donation centers.</p>
            <div className="mt-4 flex gap-3">
              <a href="/donate" className="px-4 py-2 rounded bg-[#FFD05A] font-semibold">Donate via PhonePe</a>
              <a href="/books-donation-box" className="px-4 py-2 rounded border">Donate Books</a>
            </div>
          </div>
          <div className="w-48">
            {/* QR placeholder */}
            <div className="bg-gray-100 rounded p-4 text-center">
              <img src="/assets/qr-placeholder.png" alt="PhonePe QR" className="mx-auto w-32 h-32 object-contain" />
              <div className="text-xs mt-2 text-[#6B7280]">Scan with PhonePe / UPI</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM + CONTACT */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold">Our Team</h3>
            <p className="text-sm mt-2 text-[#6B7280]">Meet our volunteers and advisors — led by Sandeep Kumar and supported by a dedicated team.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>📌 Sandeep Kumar — Founder</li>
              <li>📌 Nisha — General Secretary</li>
              <li>📌 Astinder Kaur — Advisor</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="text-sm mt-2 text-[#6B7280]">
              Open Eyes Foundation, #10 Khuda Jassu, Chandigarh 160036<br/>
              Phone: +91-7508408205<br/>
              Email: openeyesfoundationhr@gmail.com
            </p>
            <a href="/contact-us" className="mt-4 inline-block text-sm text-[#0056B3]">Full contact & CSR enquiries →</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#003366] text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">© 2017-2025 Open Eyes Foundation. All Rights Reserved.</div>
          <div className="mt-3 md:mt-0 text-sm flex gap-4">
            <a href="https://www.facebook.com/openeyesfoundationchd/" className="underline">Facebook</a>
            <a href="/donate" className="underline">Donate</a>
            <a href="/contact-us" className="underline">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
