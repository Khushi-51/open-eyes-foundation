"use client"
import React from "react"

export default function TestimonialsGallerySection(): React.ReactElement {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <p className="mt-2 text-sm text-[#6B7280]">Volunteer stories and parent testimonials.</p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <blockquote key={i} className="bg-gray-50 p-4 rounded shadow">
              <p className="italic">“This program changed my child's life — we now have books at home.”</p>
              <cite className="mt-2 block text-sm">— Parent, Chandigarh</cite>
            </blockquote>
          ))}
        </div>

        <h3 className="mt-10 text-2xl font-bold">Gallery</h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({length:8}).map((_,i) => (
            <div key={i} className="rounded overflow-hidden shadow-sm"><img src={`/assets/gallery-${i+1}.jpg`} alt={`gallery ${i+1}`} className="w-full h-28 object-cover"/></div>
          ))}
        </div>
      </div>
    </section>
  )
}
