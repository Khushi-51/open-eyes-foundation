"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  image: string;
  date: string;
  category: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Sandeep Kumar and 200 volunteers of his NGO go door-to-door to collect books that UT residents do not require",
    image: "/assets/news/news1.jpg",
    date: "August 7, 2023",
    category: "Events",
    link: "#",
  },
  {
    id: 2,
    title: "Mobile Library: A Van Turned into a Library to Distribute Books.",
    image: "/assets/news/news2.png",
    date: "August 8, 2025",
    category: "Spotlights",
    link: "#",
  },
  {
    id: 3,
    title: "Hon’ble Prime Minister Narendra Modi praised Chandigarh’s Sandeep Kumar during Mann Ki Baat.",
    image: "/assets/news/news3.png",
    date: "August 15, 2025",
    category: "Articles",
    link: "#",
  },
  {
    id: 4,
    title: "Hope on Wheels: Sandeep Kumar’s initiative ‘Raddi Se Shiksha’.",
    image: "/assets/news/news4.png",
    date: "August 21, 2025",
    category: "Articles",
    link: "#",
  },
  {
    id: 5,
    title: "This library has no lock whoever needs a book may take it and return it honestly.",
    image: "/assets/news/news5.png",
    date: "August 27, 2025",
    category: "Programs",
    link: "#",
  },
  {
    id: 6,
    title: "Collected 10,000 old books in 2 years; helping 200 poor children study",
    image: "/assets/news/news6.png",
    date: "September 1, 2025",
    category: "Health",
    link: "#",
  },
];

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    
    <section className="">
      {/* Header */}
      {/* ✅ Auto-adjusting Professional Masonry Layout */}
      <div className="bg-cover bg-center py-10 px-2 inset-0"
        style={{
    backgroundImage: "url('/assets/programs/mission-literacy.jpg')", // ✅ your image path
    backgroundColor: "rgba(8, 1, 1, 0.85)", // ✅ soft overlay tint
    backgroundBlendMode: "overlay", // ✅ blends image + color
  }}>
        <div className=" mb-2 mx-20 px-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest <span className="text-white">News</span>
          </h2>
          <br/>
        <button className="bg-[#FACC15] text-black px-3 py-1 rounded-full text-sm hover:bg-red-600 transition">
          All News
        </button>
        </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 px-2 py-2 mx-5 md:mx-20">
        {newsData.map((news, index) => {
          const color =
            index % 2 === 0 ? "bg-red-600" : "bg-red-500";

          return (
            <motion.div
              key={news.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedNews(news)}
              className="relative overflow-hidden group cursor-pointer break-inside-avoid"
            >
              <div className="relative w-full h-auto">
                <Image
                  src={news.image}
                  alt={news.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-4 text-white z-10">
                <span
                  className={`${color} text-[10px] px-2 py-0.5 rounded-full uppercase font-semibold tracking-wide`}
                >
                  {news.category}
                </span>
                {/* <p className="text-xs text-gray-300 mt-1">{news.date}</p> */}
              </div>
            </motion.div>
          );
        })}
      </div>
      </div>

      {/* ✅ Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-8 text-white hover:text-red-500 transition text-3xl z-50"
              onClick={() => setSelectedNews(null)}
            >
              <X size={32} />
            </button>

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-5xl mx-auto flex flex-col items-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-6 text-white px-6">
                <h2 className="text-2xl font-bold">{selectedNews.title}</h2>
                {/* <p className="text-gray-400 mt-2">{selectedNews.date}</p> */}
                <span className="bg-red-600 text-xs px-3 py-1 mt-3 inline-block rounded-full uppercase font-semibold tracking-wide">
                  {selectedNews.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
