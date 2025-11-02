"use client"
import React from "react"
import Navbar from "@/components/Navbar"
import SiteFooter from "@/components/SiteFooter"

export default function TestimonialsPage(): React.ReactElement {
  return (
    <main>
      <Navbar />
      <section className="py-12 max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-[#003366] mb-4">Testimonials</h1>
        <p className="text-sm text-[#374151]">Stories from volunteers, parents and partners.</p>
      </section>
      <SiteFooter />
    </main>
  )
}
