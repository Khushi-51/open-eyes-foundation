"use client"
import React from "react"
import Navbar from "@/components/Navbar"
import SiteFooter from "@/components/SiteFooter"

const images = [
  "/assets/programs/gyaan-ka-safar.jpg",
  "/assets/programs/khushiyon-ki-potli.jpg",
  "/assets/programs/Library-of-honesty.jpg",
  "/assets/programs/mission-literacy.jpg",
  "/assets/programs/naya-savera.jpg",
  "/assets/programs/raddi-se-shiksha.png",
]

const videos = [
  { id: "kRZK7oTktM", title: "Education Drive" },
  { id: "zolgmKrhOco", title: "Community Awareness Program" },
  { id: "QNV_CeimuUY", title: "Volunteer Activities" },
]

export default function AchievementsPage(): React.ReactElement {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Header */}
      <section className="py-14 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-[#003366] mb-3">
          Our Gallery
        </h1>
        <p className="text-gray-600">
          Moments, milestones, and impact created by our NGO
        </p>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold text-[#003366] mb-6">
          Photo Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-56 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Video Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold text-[#003366] mb-6">
          Video Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div key={index} className=" overflow-hidden shadow">
              <iframe
                className="w-full h-64"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allowFullScreen
              />
              <p className="p-3 text-sm font-medium text-gray-700">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
