"use client"
import React from "react"

export default function TeamContactSection(): React.ReactElement {
  return (
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
  )
}
