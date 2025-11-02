"use client"
import React from "react"
import Navbar from "@/components/Navbar"
import SiteFooter from "@/components/SiteFooter"

export default function BooksDonationBoxPage(): React.ReactElement {
  return (
    <main>
      <Navbar />
      <section className="py-12 max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-[#003366] mb-4">Books Donation Box</h1>
        <p className="text-sm text-[#374151]">Find donation drop points, schedules and pickup options here.</p>
      </section>
      <SiteFooter />
    </main>
  )
}
