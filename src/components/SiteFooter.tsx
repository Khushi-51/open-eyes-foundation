"use client"
import React from "react"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react"

export default function Footer(): React.ReactElement {
  return (
    <footer className="bg-[rgba(0,20,60,0.85)] text-white py-10">
      <div className="mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-8">
        
        {/* Logo & Foundation Info */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white p-2 rounded-md shadow-md">
              <Image
                src="/logos/open-eyes-logo.png"
                alt="Open Eyes Foundation Logo"
                width={50}
                height={50}
                className="rounded-md object-contain"
              />
            </div>
            <h3 className="text-xl font-bold leading-tight">
              Open Eyes <br /> Foundation
            </h3>
          </div>

          <p className="text-sm">
            Empowering education and change through community-driven initiatives.  
          </p>
        </div>

        {/* Get Involved */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white/30 pb-1">
            Get Involved
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Join as a Member</li>
            <li>Join as a Volunteer</li>
            <li>Join as an Intern</li>
           
          </ul>
        </div>

        {/* Legal Status */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white/30 pb-1">
            Legal Status
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Registered under Societies Registration Act, 1860</li>
            <li>Section 12AA - Income Tax Act, 1961</li>
            <li>Section 80G - Income Tax Act, 1961</li>
            <li>NITI Aayog & CSR-1 Registered</li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white/30 pb-1">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm mb-4">
            <li>#10, Khuda Jassu, Chandigarh - 160036</li>
            <li>📞 +91-7508408205</li>
            <li>✉️ openeyesfoundationhr@gmail.com</li>
            <a href="/contact-us" className="mt-4 inline-block text-sm text-white hover:text-[18px]">Full contact & CSR enquiries →</a>
          </ul>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/share/1KHE9BSnvp/" className="hover:text-[var(--light-green)] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/open_eyes_foundation_ngo" className="hover:text-[var(--light-green)] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.youtube.com/@openeyesfoundationngo" className="hover:text-[var(--light-green)] transition-colors">
              <Youtube size={20} />
            </a>
            <a href="https://www.linkedin.com/in/open-eyes-foundation-a683651a1" className="hover:text-[var(--light-green)] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.twitter.com/openeyesfdnchd" className="hover:text-[var(--light-green)] transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm">
        <p>
          Copyright © 2017–2025{" "}
          <span className="font-semibold">Open Eyes Foundation</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
