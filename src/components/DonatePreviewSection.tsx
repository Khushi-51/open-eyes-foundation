"use client"
import React from "react"

export default function DonatePreviewSection(): React.ReactElement {
  return (
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
          <div className="bg-gray-100 rounded p-4 text-center">
            <img src="/assets/qr-placeholder.png" alt="PhonePe QR" className="mx-auto w-32 h-32 object-contain" />
            <div className="text-xs mt-2 text-[#6B7280]">Scan with PhonePe / UPI</div>
          </div>
        </div>
      </div>
    </section>
  )
}
