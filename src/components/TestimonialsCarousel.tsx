"use client"

import { useState, useEffect } from "react"

interface Testimonial {
  name: string
  role: string
  message: string
}

const testimonials: Testimonial[] = [
  {
    name: "Rahul Sharma",
    role: "Volunteer",
    message: "Working with Open Eyes Foundation has been a life-changing experience!",
  },
  {
    name: "Priya Singh",
    role: "Beneficiary",
    message: "Thanks to their education program, I could pursue my dream career.",
  },
  {
    name: "Amit Verma",
    role: "Donor",
    message: "I trust Open Eyes Foundation to make a real impact in the community.",
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000) // change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const { name, role, message } = testimonials[current]

  return (
    <section className="py-16 bg-[var(--secondary-color)] text-white text-center">
      <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
      <div className="max-w-3xl mx-auto p-8 bg-[rgba(0,0,0,0.1)] rounded-lg shadow-lg">
        <p className="text-lg italic mb-4">"{message}"</p>
        <p className="font-semibold">{name}</p>
        <p className="text-sm">{role}</p>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
