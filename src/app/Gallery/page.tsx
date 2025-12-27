"use client"
import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import SiteFooter from "@/components/SiteFooter"

type GalleryItem =
  | { type: "image"; src: string; caption: string }
  | { type: "video"; id: string; title: string }

const gallery: GalleryItem[] = [
  // PROGRAMS
  { type: "image", src: "/assets/programs/gyaan-ka-safar.jpg", caption: "Gyaan Ka Safar – Mobile Library Initiative" },
  { type: "image", src: "/assets/programs/khushiyon-ki-potli.jpg", caption: "Khushiyon Ki Potli – Spreading Joy" },
  { type: "image", src: "/assets/programs/Library-of-honesty.jpg", caption: "Library of Honesty" },
  { type: "image", src: "/assets/programs/mission-literacy.jpg", caption: "Mission Literacy" },
  { type: "image", src: "/assets/programs/naya-savera.jpg", caption: "Naya Savera – New Beginnings" },
  { type: "image", src: "/assets/programs/raddi-se-shiksha.png", caption: "Raddi Se Shiksha – Book Bank Project" },

  // HERO / ACTIVITIES
  { type: "image", src: "/assets/hero.png", caption: "Community Outreach Program" },
  { type: "image", src: "/assets/hero1.png", caption: "Children Engaged in Reading" },
  { type: "image", src: "/assets/hero2.png", caption: "Volunteer Interaction Session" },
  { type: "image", src: "/assets/hero3.jpg", caption: "Education for All Initiative" },
  { type: "image", src: "/assets/hero4.png", caption: "Learning Beyond Classrooms" },
  { type: "image", src: "/assets/hero5.jpg", caption: "Books Changing Lives" },
  { type: "image", src: "/assets/hero6.png", caption: "Empowering Young Minds" },
  { type: "image", src: "/assets/hero7.jpg", caption: "Community Library Activity" },
  { type: "image", src: "/assets/hero8.png", caption: "Smiles Through Education" },

  // AWARDS
  { type: "image", src: "/assets/awards/award1.jpg", caption: "Award for Social Impact" },
  { type: "image", src: "/assets/awards/award2.jpg", caption: "Recognition for Literacy Work" },
  { type: "image", src: "/assets/awards/award3.png", caption: "Honored for Community Service" },
  { type: "image", src: "/assets/awards/award4.png", caption: "National Level Appreciation" },
  { type: "image", src: "/assets/awards/award5.png", caption: "Excellence in Education" },
  { type: "image", src: "/assets/awards/award6.jpg", caption: "Awarded for Grassroots Impact" },
  { type: "image", src: "/assets/awards/award7.png", caption: "Recognition by Esteemed Platform" },

  // NEWS
  { type: "image", src: "/assets/news/news1.jpg", caption: "Featured in News Media" },
  { type: "image", src: "/assets/news/news2.png", caption: "Our Work in Headlines" },
  { type: "image", src: "/assets/news/news3.png", caption: "Media Coverage of NGO Activities" },
  { type: "image", src: "/assets/news/news4.png", caption: "Open Eyes Foundation in News" },
  { type: "image", src: "/assets/news/news5.png", caption: "Impact Stories Shared Publicly" },
  { type: "image", src: "/assets/news/news6.png", caption: "Recognized for Social Contribution" },

  // VIDEOS
  { type: "video", id: "-kRZK7oTktM", title: "Story of Bookman - Sandeep Kumar" },
  { type: "video", id: "zolgmKrhOco", title: "Raddi Se Shiksha" },
  { type: "video", id: "QNV_CeimuUY", title: "Mann Ki Baat by PM Narendra Modi" },
  { type: "video", id: "pHtVHYgWfhY", title: "Sandeep Kumar Bookman Praised" },
  { type: "video", id: "5vudT28wvf8", title: "Gyaan Ka Safar Mobile Library" },
  { type: "video", id: "LH3-bsgcI9c", title: "Mission Literacy" },
  { type: "video", id: "jBUNwSzq-hw", title: "Library of Honesty" },
]

export default function AchievementsPage(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const openItem = (index: number) => setActiveIndex(index)
  const close = () => setActiveIndex(null)

  const next = () =>
    setActiveIndex((prev) =>
      prev !== null ? (prev + 1) % gallery.length : prev
    )

  const prev = () =>
    setActiveIndex((prev) =>
      prev !== null ? (prev - 1 + gallery.length) % gallery.length : prev
    )

  const activeItem = activeIndex !== null ? gallery[activeIndex] : null

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

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <div
              key={index}
              onClick={() => openItem(index)}
              className="cursor-pointer overflow-hidden shadow hover:shadow-lg bg-white"
            >
              {item.type === "image" ? (
                <>
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition"
                  />
                  <p className="p-3 text-sm font-medium text-gray-700">
                    {item.caption}
                  </p>
                </>
              ) : (
                <>
                  <iframe
  className="w-full h-40 sm:h-48 md:h-56 pointer-events-none"
  src={`https://www.youtube.com/embed/${item.id}?controls=1&modestbranding=1&rel=0&showinfo=0`}
/>
                  
                  <p className="p-3 text-sm font-medium text-gray-700">
                    {item.title}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-3 sm:px-6">
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-4xl bg-black/40 rounded-full px-3 py-1"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 text-white text-5xl bg-black/40 rounded-full px-3 py-1"
          >
            ‹
          </button>

          {/* Content */}
          <div className="max-w-5xl w-full px-2 sm:px-6 text-center">
            {activeItem.type === "image" ? (
              <>
                <img
                  src={activeItem.src}
                  alt={activeItem.caption}
                  className="max-h-[75vh] mx-auto"
                />
                <p className="text-white mt-4">{activeItem.caption}</p>
              </>
            ) : (
              <>
                <iframe
                  className="w-full h-[40vh] sm:h-[60vh]"
                  src={`https://www.youtube.com/embed/${activeItem.id}`}
                  allowFullScreen
                />
                <p className="text-white mt-4">{activeItem.title}</p>
              </>
            )}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-2 sm:right-4 text-white text-5xl bg-black/40 rounded-full px-3 py-1"
          >
            ›
          </button>
        </div>
      )}

      <SiteFooter />
    </main>
  )
}
