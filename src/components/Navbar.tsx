"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, HandHeart, Phone, Mail, Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  return (
    <>
      {/* 🔹 Top Bar */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-sm ">
        <div className="container flex justify-between items-center text-sm mx-auto px-4">

          <div className="hidden md:flex gap-6 font-medium m-2">
            <a
              href="tel:+917508408205"
              className="hover:text-yellow-300 transition-colors flex items-center gap-2"
            >
              <Phone size={14} /> +91-7508408205
            </a>
            <a
              href="mailto:openeyesfoundationhr@gmail.com"
              className="hover:text-yellow-300 transition-colors flex items-center gap-2"
            >
              <Mail size={14} /> openeyesfoundationhr@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="sticky top-0 z-50 border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mx-10">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-28 w-28 p-2">
                <Image
                  src="/logos/open-eyes-logo.png"
                  alt="Open Eyes Foundation"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            
            </Link>

            {/* Desktop Nav */}
            <div
  className="backdrop-blur-md hidden lg:flex items-center gap-8 font-semibold p-2"
  style={{
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderBottom: "1.5px solid var(--light-green)",
  }}
>
              <NavLink href="/">Home</NavLink>

              <div className="relative group">
                <span className="cursor-pointer hover:text-blue-700 transition-colors">
                  About Us
                </span>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-48 border border-gray-100">
                  <Link
                    href="/about"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our Organization
                  </Link>
                  <Link
                    href="/founder"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our Founder
                  </Link>
                </div>
              </div>

              <NavLink href="/what-we-do">What We Do</NavLink>
              <NavLink href="/achievements">Achievements</NavLink>

              <div className="relative group">
                <span className="cursor-pointer hover:text-blue-700 transition-colors">
                  Get Involved
                </span>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-48 border border-gray-100">
                  <Link
                    href="/get-involved"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/volunteer"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Volunteer
                  </Link>
                  <Link
                    href="/join-as-a-member"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Become a Member
                  </Link>
                  <Link
                    href="/intern"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Internship
                  </Link>
                </div>
              </div>
              <NavLink href="/contact">Contact Us</NavLink>

              <Link
                href="/donate-now"
                className="ml-2 bg-red-900 hover:bg-yellow-400 text-white px-5 py-2 rounded-lg font-bold transition-transform hover:scale-105 shadow"
              >
                <div className="flex items-center gap-2">
                  Donate
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-gray-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* 🔹 Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-3 font-medium text-gray-700">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/what-we-do", label: "What We Do" },
                  { href: "/achievements", label: "Achievements" },
                  { href: "/get-involved", label: "Get Involved" },
                  { href: "/contact", label: "Contact Us" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 hover:text-blue-700"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/donate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 bg-yellow-500 hover:bg-yellow-400 text-white text-center py-2 rounded-md font-semibold"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

/* 🔹 Simple underline link component */
interface NavLinkProps {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="relative group hover:text-blue-700 transition-colors"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
    </Link>
  )
}
