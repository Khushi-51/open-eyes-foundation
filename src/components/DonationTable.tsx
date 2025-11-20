"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// -------------------------------------------------------
// Types
// -------------------------------------------------------

type DonationItem = {
  id: string;
  image: string;
  totalNeeded: number;
  price: number;
  raised: number;
};

type ProgramItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
};

// -------------------------------------------------------
// Data
// -------------------------------------------------------

const donationItems: DonationItem[] = [
  { id: "bag", image: "/images/bag.jpg", totalNeeded: 500, price: 300, raised: 120 },
  { id: "notebook", image: "/images/notebook.png", totalNeeded: 1000, price: 50, raised: 350 },
  { id: "pen", image: "/images/pen.png", totalNeeded: 800, price: 100, raised: 280 },
  { id: "pencil", image: "/images/pencil.jpg", totalNeeded: 1200, price: 80, raised: 420 },
  { id: "sharpener", image: "/images/sharpener.png", totalNeeded: 600, price: 40, raised: 180 },
  { id: "eraser", image: "/images/eraser.jpg", totalNeeded: 700, price: 60, raised: 210 },
];

const programs: ProgramItem[] = [
  {
    id: "raddi-se-shiksha",
    title: "Raddi Se Shiksha – Book Bank",
    image: "/images/programs/bookbank.jpg",
    price: 500,
    description: "Supporting underprivileged children with recycled books.",
  },
  {
    id: "library-of-honesty",
    title: "Library of Honesty",
    image: "/images/programs/honsesty-library.jpg",
    price: 300,
    description: "Open-access library system promoting trust and self-learning.",
  },
  {
    id: "gyaan-ka-safar",
    title: "Gyaan Ka Safar – Mobile Library",
    image: "/images/programs/mobile-library.jpg",
    price: 800,
    description: "A mobile library bringing books to remote communities.",
  },
  {
    id: "naya-savera",
    title: "Naya Savera – Scholarships",
    image: "/images/programs/naya-savera.jpg",
    price: 8125,
    description: "Scholarships for deserving students to continue education.",
  },
  {
    id: "mission-literacy",
    title: "Mission Literacy – Kits",
    image: "/images/programs/mission-literacy.jpg",
    price: 600,
    description: "Educational kits that empower children's learning journey.",
  },
  {
    id: "khushiyon-ki-potli",
    title: "Khushiyon Ki Potli",
    image: "/images/programs/k-potli.jpg",
    price: 200,
    description: "A happiness bag supporting basic learning needs.",
  },
];

// -------------------------------------------------------
// CountUp Component
// -------------------------------------------------------

function CountUp({ end, isCurrency = false }: { end: number; isCurrency?: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [end]);

  return <span>{isCurrency ? `₹${count.toLocaleString()}` : `${count}+`}</span>;
}

// -------------------------------------------------------
// MAIN COMPONENT (All in ONE)
// -------------------------------------------------------

export default function DonationTablesSingle() {
  const getProgress = (raised: number, total: number) =>
    Math.min(Math.round((raised / total) * 100), 100);

  // --- Impact Stats (5 items)
  const impactStats = [
    { label: "Books Distributed", value: "20,000" },//donationItems.length },
    {
      label: "Mobile Libraries",
      value: 2,// donationItems.reduce((sum, i) => sum + i.price * i.raised, 0),
      isCurrency: true,
    },
    {
      label: "Library of Honesty",
      value: 6,
    },
    {
      label: "Education Scholarships",
      value: 110,
    },
    {
      label: "Educational Kits Distributed",
      value: 5000,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* -----------------------------------------------------
          OUR IMPACT SECTION
      ------------------------------------------------------ */}
      <section
        className="relative py-8 md:py-10 text-white"
        style={{
          backgroundImage: "url('/assets/imapact_files/8.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 tracking-wide">
            Our Impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {impactStats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <p className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">
                  <CountUp end={stat.value} isCurrency={stat.isCurrency} />
                </p>
                <p className="uppercase tracking-wide text-sm md:text-base text-gray-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------
          DONATION ITEMS (table-only, polished)
      ------------------------------------------------------ */}
      <div className="text-center mt-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--light-green-100)]">
            Donate <span className="text-[var(--light-green-200)]">Now</span>
          </h2>
        </div>
      <div className="max-w-6xl mx-auto space-y-10 px-4 py-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Donation Items</h2>
            <p className="text-sm text-gray-600">Support supplies that change lives</p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="text-white" style={{ background: 'var(--light-green-200' }}>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Item</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">Required</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">Price</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">Progress</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">Action</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-100">
                {donationItems.map((item) => {
                  const progress = getProgress(item.raised, item.totalNeeded);

                  return (
                    <tr key={item.id} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-4">
                          <img src={item.image} className="w-12 h-12 object-cover border" />
                          <div>
                            <div className="text-sm font-semibold text-gray-900 capitalize">{item.id.replace(/-|_/g, ' ')}</div>
                           
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-center text-gray-800 font-medium">{item.totalNeeded}</td>

                      <td className="px-4 py-4 text-center text-gray-800 font-medium">₹{item.price}</td>

                      <td className="px-4 py-4">
                        <div className="max-w-xs mx-auto">
                          <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full"
                                style={{ background: 'linear-gradient(90deg, var(--light-green-200), var(--light-green))' }}
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                              />
                          </div>
                          <p className="text-xs text-gray-500 text-center mt-2">{progress}% • ₹{(item.price * item.raised).toLocaleString()}</p>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-center">
                        <Link
                          href={`/donate?item=${item.id}`}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-white text-sm transition"
                          style={{ backgroundColor: 'var(--light-green-200)' }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21s-6.716-4.35-9.316-7.038C-.29 10.622 1.11 6 5.333 6c2.07 0 3.21 1.183 3.667 1.753C9.457 7.183 10.6 6 12.667 6 16.89 6 18.289 10.622 21.316 13.962 18.716 16.65 12 21 12 21z" />
                          </svg>
                          Donate
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* PROGRAMS - table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Our Programs</h2>
            <p className="text-sm text-gray-600">Choose a program to support</p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="text-white" style={{ background: 'var(--light-green-200)' }}>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Program</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">Price</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-100">
                {programs.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-4">
                      <div className="flex items-start gap-4">
                        <img src={p.image} className="w-24 h-16 rounded-lg object-cover border" />
                        <div>
                          <p className="font-semibold text-gray-900">{p.title}</p>
                          <p className="text-gray-600 text-sm mt-1 leading-relaxed">{p.description}</p>
                        </div>
                      </div>
                    </td>

                      <td className="px-4 py-4 text-center text-gray-800 font-medium">₹{p.price}</td>

                    <td className="px-4 py-4 text-center space-x-2">
                      <Link
                        href={`/programs/${p.id}`}
                        className="px-3 py-1.5 rounded-md border text-sm text-gray-700 hover:bg-gray-100 transition"
                      >
                        View
                      </Link>
                      <Link
                        href={`/donate?program=${p.id}`}
                        className="px-3 py-1.5 rounded-md text-white text-sm transition inline-block"
                        style={{ backgroundColor: 'var(--light-green-200)' }}
                      >
                        Donate
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>

    </div>
  );
}
