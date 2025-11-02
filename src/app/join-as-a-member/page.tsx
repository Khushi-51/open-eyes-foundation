"use client"
import React from "react"
import Navbar from "@/components/Navbar"
import SiteFooter from "@/components/SiteFooter"

export default function JoinAsMemberPage(): React.ReactElement {
  return (
    <main>
      <Navbar />
      <section className="py-12 max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-[#003366] mb-4">Join as a Member / Volunteer</h1>
        <p className="text-sm text-[#374151]">Sign up to volunteer or become a member — form coming soon.</p>
      </section>
      <SiteFooter />
    </main>
  )
}
