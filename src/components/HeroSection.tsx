"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function HeroSection(): React.ReactElement {
  const slides = [
    {
      image: "/assets/hero1.png",
      title: "Polio eradication is within reach",
      description:
        "No child should suffer from a disease we know how to prevent.",
      primaryBtn: { text: "Donate Now", href: "/donate"},
      secondaryBtn: { text: "Learn More", href: "/about" },
    },
    {
      image: "/assets/hero2.png",
      title: "Together, We Can Empower Communities",
      description:
        "Be a part of the movement that uplifts lives through education and healthcare.",
      primaryBtn: { text: "Donate Now", href: "/donate" },
      secondaryBtn: { text: "Learn More", href: "/about" },
    },
    {
      image: "/assets/hero3.jpg",
      title: "Building a Brighter Future Together",
      description:
        "Join hands with us to nurture curiosity and creativity in young minds.",
      primaryBtn: { text: "Join Now", href: "/join" },
      secondaryBtn: { text: "Learn More", href: "/about" },
    },
    {
      image: "/assets/hero4.png",
      title: "Health for All, Hope for Everyone",
      description:
        "Support our health drives and ensure wellness for underprivileged families.",
      primaryBtn: { text: "Donate Now", href: "/donate" },
      secondaryBtn: { text: "Learn More", href: "/about" },
    },
    {
      image: "/assets/hero5.jpg",
      title: "Your Contribution Can Save Lives",
      description:
        "Every donation helps us take one more step toward a healthier society.",
      primaryBtn: { text: "Donate Now", href: "/donate" },
      secondaryBtn: { text: "Learn More", href: "/about" },
    },
    {
      image: "/assets/hero6.png",
      title: "Join Our Mission of Change",
      description:
        "We believe in building sustainable communities through care and compassion.",
      primaryBtn: { text: "Get Involved", href: "/join" },
      secondaryBtn: { text: "Learn More", href: "/about" },
    },
    {
      image: "/assets/hero7.jpg",
      title: "Education for Every Child",
      description:
        "Let's ensure every child gets the opportunity to learn, grow, and thrive.",
      primaryBtn: { text: "Contribute", href: "/donate" },
      secondaryBtn: { text: "Learn More", href: "/about" },
    },
    {
      image: "/assets/hero8.png",
      title: "Together, We Can Make a Difference",
      description:
        "Join hands with us to bring light, hope, and progress to every community.",
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
    <section className="relative h-screen md:h-[90vh] overflow-hidden">
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
<div className="absolute bottom-[160px] left-5 z-20 text-white">
  <div className="max-w-6xl mx-auto">
    <div className="max-w-3xl">
      {/* Main title */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
        <span className="bg-black px-2">
          {slides[current].title.split(' ').slice(0, 2).join(' ')}
        </span>{' '}
        <span className="text-[#FFD05A]">
          {slides[current].title.split(' ').slice(2).join(' ')}
        </span>
      </h1>

      {/* Subtitle / description */}
      <p className="mt-4 text-xl md:text-2xl font-medium bg-black inline-block px-3 py-2 rounded-md shadow-md leading-snug">
        <span className="text-[#FFD05A] font-semibold">
          {slides[current].description.split(' ')[0]}{' '}
        </span>
        {slides[current].description.split(' ').slice(1).join(' ')}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap gap-4">
        {slides[current].primaryBtn && (
          <a
            href={slides[current].primaryBtn.href}
            className="inline-block px-4 py-2 bg-[#FFD05A] text-[#003366] font-bold rounded-md shadow-lg hover:scale-110 transition-transform"
          >
            {slides[current].primaryBtn.text}
          </a>
        )}
        {slides[current].secondaryBtn && (
          <a
            href={slides[current].secondaryBtn.href}
            className="inline-block px-4 py-2 border-2 border-white/70 text-white rounded-md hover:bg-white/20 transition-all"
          >
            {slides[current].secondaryBtn.text}
          </a>
        )}
      </div>
    </div>
  </div>
</div>


      {/* Dots navigation */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current
                ? "bg-[#FFD05A] scale-110"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Partner Logos */}
      <div className="absolute bottom-0 left-0 w-full bg-white/40 backdrop-blur-sm py-4 z-30">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-10">
          <Image
            src="/assets/partners/sbi.png"
            alt="SBI"
            width={100}
            height={25}
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/assets/partners/eclerx.svg"
            alt="eClerx"
            width={100}
            height={25}
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/assets/partners/bebo.png"
            alt="bebo technologies"
            width={100}
            height={25}
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/assets/partners/escalon.svg"
            alt="Escalon"
            width={100}
            height={25}
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/assets/partners/tynor.svg"
            alt="Tynor"
            width={100}
            height={25}
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/assets/partners/baroda.svg"
            alt="Bank of Baroda"
            width={100}
            height={25}
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/assets/partners/nss.png"
            alt="NSS"
            width={100}
            height={25}
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
}
