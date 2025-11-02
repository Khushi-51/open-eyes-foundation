"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import SectionHeader from "./SectionHeaders"

interface DonationItem {
  id: string
  name: string
  image: string
  totalNeeded: number
  childrenBenefited: number
  currentContributions: number
  contributorCount: number
  price: number
}

const donationItems: DonationItem[] = [
  {
    id: "bag",
    name: "School Bag",
    image: "/images/bag.jpg",
    totalNeeded: 500,
    childrenBenefited: 500,
    currentContributions: 120,
    contributorCount: 45,
    price: 300,
  },
  {
    id: "notebook",
    name: "Notebook",
    image: "/images/notebook.png",
    totalNeeded: 1000,
    childrenBenefited: 500,
    currentContributions: 350,
    contributorCount: 78,
    price: 50,
  },
  {
    id: "pen",
    name: "Pen Set",
    image: "/images/pen.png",
    totalNeeded: 800,
    childrenBenefited: 500,
    currentContributions: 280,
    contributorCount: 92,
    price: 100,
  },
  {
    id: "pencil",
    name: "Pencil Pack",
    image: "/images/pencil.jpg",
    totalNeeded: 1200,
    childrenBenefited: 500,
    currentContributions: 420,
    contributorCount: 110,
    price: 80,
  },
  {
    id: "sharpener",
    name: "Sharpener",
    image: "/images/sharpener.png",
    totalNeeded: 600,
    childrenBenefited: 500,
    currentContributions: 180,
    contributorCount: 55,
    price: 40,
  },
  {
    id: "eraser",
    name: "Eraser Pack",
    image: "/images/eraser.jpg",
    totalNeeded: 700,
    childrenBenefited: 500,
    currentContributions: 210,
    contributorCount: 68,
    price: 60,
  },
]

export default function DonationItems() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getProgressPercentage = (current: number, total: number) => {
    return Math.min((current / total) * 100, 100)
  }

  return (

    <div className="min-h-screen bg-white">
<section
  className="relative py-16 text-gray-200"
  style={{
    backgroundImage: "url(assets/imapact_files/8.png)", // replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}

  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "rgba(127, 57, 29, 0.75)",
    }}
  ></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-2 z-10 md:grid-cols-4 text-center gap-10 md:gap-8">
      {[
        {
          label: "Total Campaigns",
          value: donationItems.length,
        },
        {
          label: "Total Fund Raised",
          value:
            "₹" +
            donationItems
              .reduce((sum, item) => sum + item.currentContributions, 0)
              .toLocaleString(),
        },
        {
          label: "Happy Volunteers",
          value: donationItems.reduce(
            (sum, item) => sum + item.contributorCount,
            0
          ),
        },
        {
          label: "Years of Fund Raising",
          value: new Date().getFullYear() - 2018, // since 2018 example
        },
      ].map((stat, index) => (
        <div key={index}>
          <p className="text-5xl font-extrabold mb-1 drop-shadow-lg">
            {stat.value}
          </p>
          <p className="text-base uppercase tracking-wide text-gray-200">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
        
      {/* Donation Items Table */}
<section className="px-2 my-8">
  <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--marian-blue-200)]">
            Donate <span className="text-[var(--marian-blue)]">Now</span>
          </h2>
        </div>
  <div className="max-w-6xl mx-auto overflow-x-auto relative z-10">

    <table className="min-w-full bg-white/60 shadow-lg overflow-hidden px-2 py-2">
      <thead>
        <tr className="bg-[var(--marian-blue-100)] text-white uppercase tracking-wide text-sm text-center">
          <th className="py-2 px-2 text-left font-semibold">Item</th>
          <th className="py-2 px-2 font-semibold">Total Needed</th>
          <th className="py-2 px-2 font-semibold">Children Benefited</th>
          <th className="py-2 px-2 font-semibold">Current Contributions</th>
          <th className="py-2 px-2 font-semibold">Contributors</th>
          <th className="py-2 px-2 font-semibold">Progress</th>
          <th className="py-2 px-2 font-semibold">Price</th>
          <th className="py-2 px-2 font-semibold">Action</th>
        </tr>
      </thead>

      <tbody>
        {donationItems.map((item, index) => {
          const progress = getProgressPercentage(
            item.currentContributions,
            item.totalNeeded
          );
          const rowBg =
            index % 2 === 0
              ? "bg-[var(--marian-blue-900)]"
              : "bg-white/80";

          return (
            <tr
              key={item.id}
              className={`${rowBg} border-t border-gray-200 hover:bg-[var(--light-green)]/10 transition-all duration-200`}
            >
              {/* Item Column */}
              <td className="py-2 px-2 flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 overflow-hidden border border-gray-300 shadow-sm">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700 text-center">{item.name}</p>
                </div>

              </td>

              {/* Values */}
              <td className="py-2 px-2 font-semibold text-gray-800  text-center">
                {item.totalNeeded}
              </td>
              <td className="py-2 px-2 font-semibold text-gray-800  text-center">
                {item.childrenBenefited}
              </td>
              <td className="py-2 px-2 font-bold text-green-700  text-center">
                ₹{item.currentContributions.toLocaleString()}
              </td>
              <td className="py-2 px-2 font-semibold text-gray-800  text-center">
                {item.contributorCount}
              </td>

              {/* Progress Bar */}
              <td className="py-2 px-2">
                <div className="bg-gray-200 rounded-full h-2.5 overflow-hidden  text-center">
                  <div
                    className="bg-[var(--light-green-100)] h-full transition-all"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-1 text-center">
                  {Math.round(progress)}%
                </p>
              </td>

              {/* Price */}
              <td className="py-2 px-2 font-semibold text-gray-900">
                ₹{item.price.toLocaleString()}
              </td>

              {/* Action */}
              <td className="py-2 px-2 text-center">
                <Link
                  href={`/donate?item=${item.id}&name=${item.name}&price=${item.price}`}
                  className="bg-[var(--marian-blue-200)] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[var(--light-green)] transition-all duration-200 shadow-sm"
                >
                  Donate
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
</section>


{/* Summary Section */}

    </div>
  )
}
