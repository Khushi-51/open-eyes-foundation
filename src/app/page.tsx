"use client"
import { useEffect } from "react"
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import MissionSection from "@/components/MissionSection"
import ProgramsSection from "@/components/ProgramsSection"
import AwardsNewsSection from "@/components/AwardsNewsSection"
import SiteFooter from "@/components/SiteFooter"
import DonationTable from "@/components/DonationTable"
import NewsSection from "@/components/NewsSection"
import FeaturedVideo from "@/components/FeaturedVideos"
import OurMembers from "@/components/OurMembers"


// scrollToHash will run on client after the page mounts (moved into component)


export default function HomePage() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // If not rendered yet, retry after short delay
        setTimeout(scrollToHash, 300);
      }
    };

    // Try after the first render
    setTimeout(scrollToHash, 400);
  }, []);

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
      <div id="donation-table">
        <DonationTable/>
      </div>
        
      <NewsSection />
      <ProgramsSection />
      <AwardsNewsSection />
      <FeaturedVideo />
      <OurMembers />

      {/* Share Buttons (clean JSX, no broken attributes) */}
   <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
  {[
    { href: "https://www.facebook.com/share/1KHE9BSnvp/", icon: Facebook },
    { href: "https://www.instagram.com/open_eyes_foundation_ngo", icon: Instagram },
    { href: "https://www.twitter.com/openeyesfdnchd", icon: Twitter },
    { href: "https://www.linkedin.com/in/open-eyes-foundation-a683651a1", icon: Linkedin },
    { href: "https://www.youtube.com/@openeyesfoundationngo", icon: Youtube },
  ].map((s, i) => (
    <a
      key={i}
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
    >
      <s.icon size={20} className="text-gray-700" />
    </a>
  ))}
</div>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
