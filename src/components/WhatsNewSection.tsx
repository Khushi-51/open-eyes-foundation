"use client"

import React from "react"

export default function WhatsNewSection() {
  const updates = [
    {
      date: "07 August 2025",
      time: "11:30 AM",
      venue:
        "Government Girls Model Sr. Sec. School, Sector 18, Chandigarh",
      beneficiaries: "30 children",
    },
    {
      date: "08 August 2025",
      time: "11:30 AM",
      venue:
        "Government Model Sr. Sec. School, Sector 35, Chandigarh",
      beneficiaries: "30 children",
    },
  ]

  return (
    <section className="bg-[#FFFDF8] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[var(--primary-color)] mb-8">
          What’s New
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {updates.map((u, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 text-left hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-lg font-semibold text-[var(--secondary-color)] mb-2">
                Date: <span className="text-gray-700">{u.date}</span>
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Time:</strong> {u.time}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Venue:</strong> {u.venue}
              </p>
              <p className="text-gray-700">
                <strong>Beneficiary:</strong> {u.beneficiaries}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
