"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

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
      <nav className="sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mx-10">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-28 w-28 p-2">
                <Image
                  src="/logos/open-eyes-logo.png"
                  alt="Open Eyes Foundation"
                  fill
                  className="object-contain group-hover:scale-110 border-none transition-transform duration-300"
                />
              </div>
            </Link>

            {/* Desktop Nav (Glassy Effect) */}
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

                <div
                  className="absolute left-0 top-full bg-white shadow-lg rounded-md w-48 border border-gray-100 
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                            transition-all duration-200 pointer-events-auto"
                >
                  <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                    Our Organization
                  </Link>
                  <Link href="/founder" className="block px-4 py-2 hover:bg-gray-100">
                    Our Founder
                  </Link>
                </div>
              </div>


              <NavLink href="/what-we-do">What We Do</NavLink>
              <NavLink href="/Gallery">Gallery</NavLink>

              <div className="relative group">
                <span className="cursor-pointer hover:text-blue-700 transition-colors">
                  Get Involved
                </span>

                <div
                  className="absolute left-0 top-full bg-white shadow-lg rounded-md w-48 border border-gray-100
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                            transition-all duration-200 pointer-events-auto"
                >
                 
                  <Link href="/join-as-a-member" className="block px-4 py-2 hover:bg-gray-100">
                    Become a Member
                  </Link>
                  <Link href="/volunteer" className="block px-4 py-2 hover:bg-gray-100">
                    Join as a Volunteer
                  </Link>
                  <Link href="/join-as-an-intern" className="block px-4 py-2 hover:bg-gray-100">
                    Apply for Internship
                  </Link>
                </div>
              </div>


              <NavLink href="/contact">Contact Us</NavLink>

              <Link
                href="/donate-now"
                className="ml-2 bg-red-900 hover:bg-yellow-400 text-white px-5 py-2 rounded-lg font-bold transition-transform hover:scale-105 shadow"
              >
                <div className="flex items-center gap-2">Donate</div>
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

          {/* 🔹 Mobile Sidebar (Solid Background) */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <span className="font-bold text-lg">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col mt-4 gap-2 font-medium text-gray-700 px-4">
      {/* Regular Links */}
      <Link
        href="/"
        onClick={() => setMobileMenuOpen(false)}
        className="py-2 hover:text-blue-700"
      >
        Home
      </Link>

      {/* About Us Dropdown */}
      <div>
        <button
          onClick={() => toggleDropdown("about")}
          className="w-full flex justify-between items-center py-2 hover:text-blue-700"
        >
          <span>About Us</span>
          <span className="text-gray-500">{openDropdown === "about" ? "−" : "+"}</span>
        </button>

        {openDropdown === "about" && (
          <div className="flex flex-col ml-4 border-l border-gray-300 pl-3 text-sm text-gray-600">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700"
            >
              About the Organisation
            </Link>
            <Link
              href="/about/about/founder"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700"
            >
              About the Founder
            </Link>
            
          </div>
        )}
      </div>

      {/* What We Do */}
      <Link
        href="/what-we-do"
        onClick={() => setMobileMenuOpen(false)}
        className="py-2 hover:text-blue-700"
      >
        What We Do
      </Link>

      {/* Achievements */}
      <Link
        href="/Gallery"
        onClick={() => setMobileMenuOpen(false)}
        className="py-2 hover:text-blue-700"
      >
        Gallery
      </Link>

      {/* Get Involved Dropdown */}
      <div>
        <button
          onClick={() => toggleDropdown("involved")}
          className="w-full flex justify-between items-center py-2 hover:text-blue-700"
        >
          <span>Get Involved</span>
          <span className="text-gray-500">{openDropdown === "involved" ? "−" : "+"}</span>
        </button>

        {openDropdown === "involved" && (
          <div className="flex flex-col ml-4 border-l border-gray-300 pl-3 text-sm text-gray-600">
            <Link
              href="/join-as-a-member"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700"
            >
              Become a Member
            </Link>
            
            <Link
              href="/volunteer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700"
            >
              Join as a Volunteer
            </Link>
            <Link
              href="/join-as-an-intern"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700"
            >
              Apply for Internship
            </Link>
          </div>
        )}
      </div>

      {/* Contact Us */}
      <Link
        href="/contact"
        onClick={() => setMobileMenuOpen(false)}
        className="py-2 hover:text-blue-700"
      >
        Contact Us
      </Link>

      {/* Donate Button */}
      <Link
        href="/donate"
        onClick={() => setMobileMenuOpen(false)}
        className="mt-3 bg-yellow-500 hover:bg-yellow-400 text-white text-center py-2 rounded-md font-semibold"
      >
        Donate Now
      </Link>
    </div>
          </div>

          {/* Overlay for Sidebar */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
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
