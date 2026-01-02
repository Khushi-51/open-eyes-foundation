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
  { type: "image", src: "/assets/hero1.png", caption: "Smiles of learning children receiving educational kits through our Mobile Library initiative" },
  { type: "image", src: "/assets/hero2.png", caption: "Community support in action volunteers and educators collecting donated books for redistribution" },
  { type: "image", src: "/assets/hero3.jpg", caption: "Library of Honesty launch promoting free access to books and trust-based learning" },
  { type: "image", src: "/assets/hero4.png", caption: "Empowering students school bags and study essentials distributed to children in need" },
  { type: "image", src: "/assets/hero5.jpg", caption: "Hope on Wheels our mobile library bringing free books directly to communities" },
  { type: "image", src: "/assets/hero6.png", caption: "Books for all shelves filled with donated books ready to inspire young readers" },
  { type: "image", src: "/assets/hero7.jpg", caption: "Learning beyond classrooms children engaging with books at the mobile library" },
  { type: "image", src: "/assets/hero8.png", caption: "Reading together creating joyful learning spaces through our mobile library program" },
  { type: "image", src: "/assets/hero.png", caption: "Smiles Through Education" },

  // AWARDS
  { type: "image", src: "/assets/awards/award1.jpg", caption: "Honoured by Rotary Chandigarh Shivalik" },
  { type: "image", src: "/assets/awards/award2.jpg", caption: "Honoured by NYKS Chandigarh" },
  { type: "image", src: "/assets/awards/award3.png", caption: "Featured in 'Mann Ki Baat' by PM Modi" },
  { type: "image", src: "/assets/awards/award4.png", caption: "Winner of JIYO DIL SE AWARD S-7" },
  { type: "image", src: "/assets/awards/award5.png", caption: "Honoured by SBI Chandigarh Circle" },
  { type: "image", src: "/assets/awards/award6.jpg", caption: "SBI gifted a tempo traveller" },
  { type: "image", src: "/assets/awards/award7.png", caption: "Hounered by Mayor of Chandigarh" },

  // NEWS
  { type: "image", src: "/assets/news/news1.jpg", caption: "Sandeep Kumar and 200 volunteers of his NGO go door-to-door to collect books that UT residents do not require" },
  { type: "image", src: "/assets/news/news2.png", caption: "Mobile Library: A Van Turned into a Library to Distribute Books" },
  { type: "image", src: "/assets/news/news3.png", caption: "Hon’ble Prime Minister Narendra Modi praised Chandigarh’s Sandeep Kumar during Mann Ki Baat" },
  { type: "image", src: "/assets/news/news4.png", caption: "Hope on Wheels: Sandeep Kumar’s initiative ‘Raddi Se Shiksha’" },
  { type: "image", src: "/assets/news/news5.png", caption: "This library has no lock whoever needs a book may take it and return it honestly" },
  { type: "image", src: "/assets/news/news6.png", caption: "Collected 10,000 old books in 2 years; helping 200 poor children study" },

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
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#001B44] mb-4 relative z-10">
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
                  src={`https://www.youtube.com/embed/${activeItem.id}?controls=1&modestbranding=1&rel=0&showinfo=0`}
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
