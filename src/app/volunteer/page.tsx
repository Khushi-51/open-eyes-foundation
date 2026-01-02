"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function JoinAsVolunteer() {
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "Volunteer",
        name,
        bloodGroup,
        email,
        phone,
        address,
        emergencyContact,
      }),
    });

    alert("Application submitted successfully!");

    // reset
    setName("");
    setBloodGroup("");
    setEmail("");
    setPhone("");
    setAddress("");
    setEmergencyContact("");
    setAgree(false);
  };

  return (
    <div className="font-sans">
      <Navbar />

      {/* HERO */}
     <section className="relative py-14 px-6 text-center overflow-hidden">
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary)/0.08)] to-transparent" />

  <div className="relative max-w-5xl mx-auto space-y-4">
    {/* Main Heading */}
   <h1 className="text-3xl md:text-5xl font-extrabold text-[#001B44] mb-4 relative z-10">
          Volunteer Leadership
        </h1>

    {/* Tagline */}
    <p className="text-gray-600">
      Be the Change · Inspire Lives · Lead With Purpose
    </p>

    {/* Optional smaller heading */}
    <h6 className="text-2xl font-semibold pt-4">
      Be the Hero, Make a Difference
    </h6>

    {/* Supporting text */}
    <p className="text-lg leading-relaxed text-justify max-w-3xl mx-auto">
      Every small act of kindness can create a ripple of positive impact. Volunteer your time, skills, and energy to help those in need, inspire change, and be the hero in someone’s story.
    </p>

  </div>
</section>


       <section className="bg-[hsl(var(--muted))] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            What You’ll Gain as an Intern
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
  {
    title: "Volunteering Experience",
    desc: "Receive an official Certificate of Volunteering upon successful completion, aligned with our SOPs and ethical standards."
  },
  {
    title: "Skill & Leadership Development",
    desc: "Build real-world skills in project execution, teamwork, communication, and community engagement."
  },
  {
    title: "Ethical & Policy-Based Exposure",
    desc: "Gain structured understanding of Child Protection, POSH compliance, confidentiality, and responsible social work."
  }
]
.map((item, i) => (
              <div
                key={i}
                className="bg-[hsl(var(--card))] p-8 rounded-2xl shadow-md border-t-4 border-[hsl(var(--primary))] text-center"
              >
                <h3 className="font-semibold text-lg mb-5">{item.title}</h3>
                <p className="text-muted-foreground text-justify ">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="enroll" className="py-28 px-6">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl border">
          <h2 className="text-3xl font-bold mb-10">
            Volunteer Enrollment Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="w-full p-3 border rounded-xl"
              />

              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                required
                className="w-full p-3 border rounded-xl"
              >
                <option value="">Blood Group</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB+</option>
                <option>Others</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full p-3 border rounded-xl"
              />

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                required
                className="w-full p-3 border rounded-xl"
              />
            </div>

            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              rows={3}
              required
              className="w-full p-3 border rounded-xl"
            />

            <input
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              placeholder="Emergency Contact (Name & Relation)"
              required
              className="w-full p-3 border rounded-xl"
            />

            <div className="bg-slate-100 p-5 rounded-xl text-sm text-justify">
              <p>
                I agree to contribute minimum <b>120 hours annually</b> and
                follow all Foundation SOPs & policies.
              </p>
              <label className="flex gap-3 mt-4 items-center">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                />
                <span className="font-semibold">
                  I accept all terms & conditions
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[var(--marian-blue-100)] text-white font-semibold text-lg"
            >
              SUBMIT APPLICATION
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
