"use client"

import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import MissionSection from "@/components/MissionSection"
import ProgramsSection from "@/components/ProgramsSection"
import AwardsNewsSection from "@/components/AwardsNewsSection"
import TestimonialsGallerySection from "@/components/TestimonialsGallerySection"
import DonatePreviewSection from "@/components/DonatePreviewSection"
import TeamContactSection from "@/components/TeamContactSection"
import SiteFooter from "@/components/SiteFooter"
import DonationTable from "@/components/DonationTable"
import NewsSection from "@/components/NewsSection"


const donationItems = [
  {
    itemName: "School Bag",
    itemImage: "/images/bag.jpg",
    costPerItem: 500,
    totalGoal: 300,
    totalProjectGoal: 150000,
    raisedAmount: 105000,
  },
  {
    itemName: "Notebook",
    itemImage: "/images/notebook.png",
    costPerItem: 50,
    totalGoal: 1000,
    totalProjectGoal: 50000,
    raisedAmount: 35000,
  },
  {
    itemName: "Pen",
    itemImage: "/images/pen.png",
    costPerItem: 10,
    totalGoal: 1000,
    totalProjectGoal: 10000,
    raisedAmount: 7000,
  },
  {
    itemName: "Pencil",
    itemImage: "/images/pencil.jpg",
    costPerItem: 5,
    totalGoal: 1000,
    totalProjectGoal: 5000,
    raisedAmount: 3500,
  },
  {
    itemName: "Sharpener",
    itemImage: "/images/sharpener.png",
    costPerItem: 5,
    totalGoal: 500,
    totalProjectGoal: 2500,
    raisedAmount: 1500,
  },
  {
    itemName: "Eraser",
    itemImage: "/images/eraser.jpg",
    costPerItem: 5,
    totalGoal: 500,
    totalProjectGoal: 2500,
    raisedAmount: 1000,
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAFB]">
      {/* Navbar */}
      <Navbar />

      {/* Highlight Bar */}
      <div className="w-full bg-yellow-400 text-center text-sm font-medium text-black py-2">
        Recognized by the Prime Minister Shri Narendra Modi in “Mann Ki Baat” — The Book Man of Chandigarh, Mr. Sandeep Kumar.
      </div>

      {/* Page Sections */}
      <HeroSection />
      <MissionSection />
      <DonationTable />
      <NewsSection />
      <ProgramsSection />
      <AwardsNewsSection />
      <DonatePreviewSection />
      <TeamContactSection />

      {/* Share Buttons (clean JSX, no broken attributes) */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        {[
          { href: "https://www.facebook.com/sharer/sharer.php?u=https://www.unicef.org/", icon: "facebook_32.png", alt: "Facebook" },
          { href: "https://twitter.com/intent/tweet?url=https://www.unicef.org/", icon: "twitter_32.png", alt: "Twitter" },
          { href: "https://www.linkedin.com/shareArticle?url=https://www.unicef.org/", icon: "linkedin_32.png", alt: "LinkedIn" },
          { href: "https://api.whatsapp.com/send?text=https://www.unicef.org/", icon: "whatsapp_32.png", alt: "WhatsApp" },
        ].map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img
              src={`https://ws.sharethis.com/images/2017/${s.icon}`}
              alt={s.alt}
              width={32}
              height={32}
              className="shadow-md rounded-full"
            />
          </a>
        ))}
      </div>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
