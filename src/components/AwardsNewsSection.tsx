"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const awards = [
  {
    title: "Local NGO Excellence Award",
    desc: "Recognized for our outstanding Mobile Library initiative and literacy drives.",
    img: "/assets/awards/award1.jpg",
  },
  {
    title: "CSR Partnership Award",
    desc: "Honored for impactful collaborations with corporate CSR programs.",
    img: "/assets/awards/award2.jpg",
  },
  {
    title: "Education Impact Recognition",
    desc: "Awarded for empowering 10,000+ students through reading programs.",
    img: "/assets/awards/award3.png",
  },
  {
    title: "Community Service Award",
    desc: "For consistent dedication to community-based educational outreach.",
    img: "/assets/awards/award4.png",
  },
  {
    title: "Innovation in Learning",
    desc: "For creative education models and child-friendly learning spaces.",
    img: "/assets/awards/award5.png",
  },
  {
    title: "Volunteer Spirit Award",
    desc: "For inspiring a generation of volunteers across regions.",
    img: "/assets/awards/award6.jpg",
  },
  {
    title: "Humanitarian Impact Award",
    desc: "Recognized for making education accessible to marginalized children.",
    img: "/assets/awards/award7.png",
  },
];

export default function AwardsCarousel(): React.ReactElement {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="relative py-10 text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 20, 60, 0.85), rgba(0, 20, 60, 0.85)), url('/assets/bg/awards-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#FACC15]">
          Awards & Recognition
        </h2>
        <p className="text-gray-200 text-base">
          Celebrating our journey of impact and excellence
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto px-6 relative">
        <Slider {...settings}>
          {awards.map((award, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-4"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#FACC15]/30 hover:border-[#FACC15] transition-all duration-500">
                {/* Award Image */}
                <img
                  src={award.img}
                  alt={award.title}
                  className="w-full h-64 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001233]/90 to-transparent"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 p-5">
                  <h3 className="font-semibold text-lg text-[#FACC15] mb-1">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-200">{award.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
