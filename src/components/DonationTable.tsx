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
  { id: "geometry", image: "/images/geometry.jpg", totalNeeded: 700, price: 60, raised: 210 },
];

const itemMeta: Record<string, { name: string; requiredLabel: string; priceLabel: string }> = {
  bag: { name: "School Bag", requiredLabel: "500 Children", priceLabel: "₹300 / Bag" },
  notebook: { name: "Notebook", requiredLabel: "1000 Children", priceLabel: "₹50 / Notebook" },
  pen: { name: "Pen", requiredLabel: "800 Students", priceLabel: "₹100 / Pen" },
  pencil: { name: "Pencil", requiredLabel: "1200 Students", priceLabel: "₹80 / Pencil" },
  sharpener: { name: "Sharpener", requiredLabel: "600 Students", priceLabel: "₹40 / Sharpener" },
  eraser: { name: "Eraser", requiredLabel: "700 Students", priceLabel: "₹60 / Eraser" },
  geometry: { name: "Geometry", requiredLabel: "700 Students", priceLabel: "₹60 / Box" }
};

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

  return (
    <span>
      {isCurrency
        ? `₹${count.toLocaleString("en-IN")}`
        : `${count.toLocaleString("en-IN")}+`}
    </span>
  );
}

// -------------------------------------------------------
// MAIN COMPONENT (All in ONE)
// -------------------------------------------------------

export default function DonationTablesSingle() {
  const getProgress = (raised: number, total: number) =>
    Math.min(Math.round((raised / total) * 100), 100);
type ImpactStat = { label: string; value: number; isCurrency?: boolean };

const impactStats: ImpactStat[] = [
  { label: "Books Distributed", value: 20000 },
  { label: "Mobile Libraries", value: 2 },
  { label: "Library of Honesty", value: 6 },
  { label: "Education Scholarships", value: 110 },
  { label: "Educational Kits Distributed", value: 5000 },
];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* OUR IMPACT SECTION */}
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
      {/* DONATION ITEMS */}
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
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Donation Items
            </h2>
            <p className="text-sm text-gray-600">Support supplies that change lives</p>
          </div>

          {/* decorative geometry box (subtle) */}
          <div className="pointer-events-none absolute -top-8 -right-8 opacity-10 hidden sm:block">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="100" height="100" rx="16" transform="rotate(15 60 60)" fill="var(--light-green-200)" />
            </svg>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead
                className="text-white"
                style={{ background: "var(--light-green-200)" }}
              >
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Item
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    Required
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    Price
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    Progress
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {donationItems.map((item) => {
                  const progress = getProgress(item.raised, item.totalNeeded);
                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.id}
                            className="w-12 h-12 object-cover border"
                          />
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              {itemMeta[item.id]?.name ?? item.id.replace(/-|_/g, " ")}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center text-gray-800 font-medium">
                        {itemMeta[item.id]?.requiredLabel ?? item.totalNeeded}
                      </td>
                      <td className="px-4 py-4 text-center text-gray-800 font-medium">
                        {itemMeta[item.id]?.priceLabel ?? `₹${item.price}`}
                      </td>
                      <td className="px-4 py-4">
                        <div className="max-w-xs mx-auto">
                          <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full"
                              style={{
                                background:
                                  "linear-gradient(90deg, var(--light-green-200), var(--light-green))",
                              }}
                              initial={{ width: 0 }}
                              animate={{ width: `${progress}%` }}
                            />
                          </div>
                          <p className="text-xs text-gray-500 text-center mt-2">
                            {progress}% • ₹
                            {(item.price * item.raised).toLocaleString("en-IN")}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Link
                          href={`/donate?item=${item.id}`}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-white text-sm font-medium transition"
                          style={{ backgroundColor: "var(--light-green-200)" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 21s-6.716-4.35-9.316-7.038C-.29 10.622 1.11 6 5.333 6c2.07 0 3.21 1.183 3.667 1.753C9.457 7.183 10.6 6 12.667 6 16.89 6 18.289 10.622 21.316 13.962 18.716 16.65 12 21 12 21z" />
                          </svg>
                          Donate
                        </Link>
                      </td>
                    </tr>
                  );
                })}
                {/** Append 3 program rows inside the same table to match requested layout */}
                {programs.slice(3, 6).map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-4">
                        <img src={p.image} alt={p.title} className="w-12 h-12 object-cover border" />
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{p.title === 'Naya Savera – Scholarships' ? 'Scholarship Support' : p.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center text-gray-800 font-medium">
                      {p.id === 'naya-savera' ? '100 Children' : p.id === 'mission-literacy' ? '2000 Children' : '500 Potlis'}
                    </td>
                    <td className="px-4 py-4 text-center text-gray-800 font-medium">
                      {p.id === 'naya-savera' ? '₹10,000 / Student' : p.id === 'mission-literacy' ? '₹2,000 / Student' : '₹200 / Potli'}
                    </td>
                    <td className="px-4 py-4 text-center text-gray-600">—</td>
                    <td className="px-4 py-4 text-center">
                      <Link href={`/donate?program=${p.id}`} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-white text-sm font-medium transition" style={{ backgroundColor: 'var(--light-green-200)' }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 21s-6.716-4.35-9.316-7.038C-.29 10.622 1.11 6 5.333 6c2.07 0 3.21 1.183 3.667 1.753C9.457 7.183 10.6 6 12.667 6 16.89 6 18.289 10.622 21.316 13.962 18.716 16.65 12 21 12 21z" />
                          </svg>
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