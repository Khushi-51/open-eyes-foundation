"use client"
import React from "react"
import Navbar from "@/components/Navbar"
import SiteFooter from "@/components/SiteFooter"

export default function BlogPage(): React.ReactElement {
  return (
    <main>
      <Navbar />
      <section className="py-12 max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-[#003366] mb-4">Blog</h1>
        <p className="text-sm text-[#374151]">News, updates and stories from our team.</p>
      </section>
      <SiteFooter />
    </main>
  )
}
