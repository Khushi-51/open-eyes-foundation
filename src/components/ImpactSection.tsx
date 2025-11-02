"use client"
import React from "react"

export default function ImpactSection(): React.ReactElement {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
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
  )
}
