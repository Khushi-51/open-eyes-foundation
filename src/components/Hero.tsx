"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative py-20 px-6 md:px-16"
      style={{ backgroundColor: "hsl(var(--primary))" }}
    >
      //one focus line at top
      <div className=" w-full h-1 bg-yellow-400" />
      Recognized by the Prime Minister Shri Narendra Modi in “Mann Ki Baat” — The Book Man of Chandigarh, Mr. Sandeep Kumar.
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Empowering Communities, One Step at a Time
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto md:mx-0">
            We educate children, run health camps, and uplift local communities through
            sustainable projects. Join our mission and make a lasting impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 justify-center md:justify-start">
            <a
              href="/donate"
              className="inline-flex items-center justify-center bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition"
            >
              Donate Now
            </a>

            <a
              href="/about"
              className="inline-flex items-center justify-center border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Learn More
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center md:justify-start gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">12+</div>
              <div className="text-sm text-white/80">Years</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-white">5000+</div>
              <div className="text-sm text-white/80">Lives Touched</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-white">120+</div>
              <div className="text-sm text-white/80">Volunteers</div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-72 md:h-96 flex items-center justify-center">
          <div className="absolute -inset-4 rounded-2xl bg-white/5 blur-2xl" aria-hidden />
          <Image
            src="/assets/hero.png"
            alt="Students and Volunteers"
            width={1200}
            height={800}
            className="relative rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
