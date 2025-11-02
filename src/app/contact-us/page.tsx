"use client"

import type React from "react"

import Navbar from "@/components/Navbar"
import Footer from "@/components/SiteFooter"
import { MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90">Feel free to reach out to us with any queries or suggestions</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Address</h3>
            </div>
            <p className="text-gray-700">
              Open Eyes Foundation #10, Khuda Jassu, Chandigarh
              <br />
              Pincode – 160036
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-600 p-3 rounded-lg">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Phone</h3>
            </div>
            <p className="text-gray-700">
              <a href="tel:+917508408205" className="hover:text-blue-600">
                +91-7508408205
              </a>
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-600 p-3 rounded-lg">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Email</h3>
            </div>
            <p className="text-gray-700">
              <a href="mailto:openeyesfoundationhr@gmail.com" className="hover:text-blue-600">
                openeyesfoundationhr@gmail.com
              </a>
              <br />
              <a href="mailto:openeyesfoundation1@gmail.com" className="hover:text-blue-600 text-sm">
                (CSR Partnerships)
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                Contact No.
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="+91-XXXXXXXXXX"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Question/Query/Suggestion
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Connect on Social Hub</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://www.facebook.com/openeyesfoundationchd/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2">Facebook</h3>
              <p className="text-gray-600 mb-4">Follow us for updates and news</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                Follow
              </button>
            </a>

            <a
              href="https://www.instagram.com/open_eyes_foundation_ngo/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-pink-600 mb-2">Instagram</h3>
              <p className="text-gray-600 mb-4">See our latest activities</p>
              <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition-colors">
                Follow
              </button>
            </a>

            <a
              href="https://www.youtube.com/channel/UC7tPyKen1sof2trJDmkCnfg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-red-600 mb-2">YouTube</h3>
              <p className="text-gray-600 mb-4">Watch our videos</p>
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/open-eyes-foundation-a683651a1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-2">LinkedIn</h3>
              <p className="text-gray-600 mb-4">Connect with us professionally</p>
              <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors">
                Follow
              </button>
            </a>

            <a
              href="https://x.com/openeyesfdnchd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">X (Twitter)</h3>
              <p className="text-gray-600 mb-4">Follow our tweets</p>
              <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition-colors">
                Follow
              </button>
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=%2B917508408205"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-green-600 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Message us directly</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
                Message
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
