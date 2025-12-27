"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function HeroSection(): React.ReactElement {
const slides = [
  {
    image: "/assets/hero1.png",
    title: "Community Outreach Through Education",
    description:
      "Taking books and learning support directly to communities that need it most.",
    primaryBtn: { text: "Donate Now", href: "/donate" },
    secondaryBtn: { text: "Learn More", href: "/about" },
  },
  {
    image: "/assets/hero2.png",
    title: "Children Engaged in Learning",
    description:
      "Encouraging reading habits and curiosity among young learners.",
    primaryBtn: { text: "Support Education", href: "/donate" },
    secondaryBtn: { text: "Learn More", href: "/about" },
  },
  {
    image: "/assets/hero3.jpg",
    title: "Volunteers Making a Difference",
    description:
      "Dedicated volunteers interacting with children and guiding them through books.",
    primaryBtn: { text: "Join as Volunteer", href: "/join" },
    secondaryBtn: { text: "Learn More", href: "/about" },
  },
  {
    image: "/assets/hero4.png",
    title: "Learning Beyond Classrooms",
    description:
      "Creating informal learning spaces where education feels joyful and accessible.",
    primaryBtn: { text: "Get Involved", href: "/join" },
    secondaryBtn: { text: "Learn More", href: "/about" },
  },
  {
    image: "/assets/hero5.jpg",
    title: "Books Creating Smiles",
    description:
      "Every book shared brings happiness, confidence, and hope to a child.",
    primaryBtn: { text: "Donate Books", href: "/donate" },
    secondaryBtn: { text: "Learn More", href: "/about" },
  },
  {
    image: "/assets/hero6.png",
    title: "Empowering Young Minds",
    description:
      "Helping children discover the power of reading and imagination.",
    primaryBtn: { text: "Support Our Work", href: "/donate" },
    secondaryBtn: { text: "Learn More", href: "/about" },
  },
  {
    image: "/assets/hero7.jpg",
    title: "Community Library Activities",
    description:
      "Building reading communities through shared spaces and trust.",
    primaryBtn: { text: "Join the Mission", href: "/join" },
    secondaryBtn: { text: "Learn More", href: "/about" },
  },
  {
    image: "/assets/hero8.png",
    title: "Education That Inspires Change",
    description:
      "Small efforts coming together to create a lasting impact through education.",
    primaryBtn: { text: "Donate Now", href: "/donate" },
    secondaryBtn: { text: "Learn More", href: "/about" },
  },
];


  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[30vh] md:h-[90vh] overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title || `Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      ))}

      {/* Text overlay */}
      <div className="absolute bottom-20 sm:bottom-[12%] md:bottom-[20%] left-5 sm:left-10 md:left-16 z-20 text-white w-[80%] sm:w-[80%] md:w-auto">
  <div className="max-w-3xl">
    {/* Main title */}
    <h1 className="text-xl sm:text-3xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
      <span className="bg-black px-1 sm:px-2">
        {slides[current].title.split(' ').slice(0, 2).join(' ')}
      </span>{' '}
      <span className="text-[#FFD05A]">
        {slides[current].title.split(' ').slice(2).join(' ')}
      </span>
    </h1>

    {/* Subtitle / description */}
    <p className="mt-2 sm:mt-4 hidden md:block sm:text-lg md:text-2xl font-medium bg-black inline-block px-2 sm:px-3 py-1 sm:py-2 rounded-md shadow-md leading-snug">
      <span className="text-[#FFD05A] font-semibold">
        {slides[current].description.split(' ')[0]}{' '}
      </span>
      {slides[current].description.split(' ').slice(1).join(' ')}
    </p>

    {/* Buttons */}
    <div className="mt-3 w-max-3px sm:mt-6 flex sm:flex-row gap-4 sm:gap-4">
      {slides[current].primaryBtn && (
        <a
          href={slides[current].primaryBtn.href}
          className="sm:px-4 px-0.5 sm:py-2 bg-[#FFD05A] text-[#003366] font-bold shadow-lg hover:scale-105 transition-transform text-sm sm:text-base text-center"
        >
          {slides[current].primaryBtn.text}
        </a>
      )}
      {slides[current].secondaryBtn && (
        <a
          href={slides[current].secondaryBtn.href}
          className="sm:px-4 px-0.5 sm:py-2 border-2 border-white/70 text-white hover:bg-white/20 transition-all text-sm sm:text-base text-center"
        >
          {slides[current].secondaryBtn.text}
        </a>
      )}

    </div>
  </div>
</div>


      {/* Dots navigation */}
      <div className="absolute bottom-[24%] md:bottom-40 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1 h-1 md:w-2 md:h-2 rounded-full transition-all ${
              index === current
                ? "bg-[#FFD05A] scale-110"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Partner Logos */}
      <div className="absolute bottom-0 left-0 w-full bg-white/40 backdrop-blur-sm py-3 sm:py-4 z-30">
  <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-10">
    {[
      { src: "/assets/partners/sbi.png", alt: "SBI" },
      { src: "/assets/partners/eclerx.svg", alt: "eClerx" },
      { src: "/assets/partners/bebo.png", alt: "bebo technologies" },
      { src: "/assets/partners/escalon.svg", alt: "Escalon" },
      { src: "/assets/partners/tynor.svg", alt: "Tynor" },
      { src: "/assets/partners/baroda.svg", alt: "Bank of Baroda" },
      { src: "/assets/partners/nss.png", alt: "NSS" },
    ].map((partner, i) => (
      <Image
        key={i}
        src={partner.src}
        alt={partner.alt}
        width={100}
        height={25}
        className="w-8 sm:w-20 md:w-20 h-25 opacity-80 hover:opacity-100 transition-opacity"
      />
    ))}
  </div>
      </div>
    </section>
  );
}
