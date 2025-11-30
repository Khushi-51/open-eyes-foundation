"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const awards = [
  {
    title: "Honoured by Rotary Chandigarh Shivalik",
    desc: "The Open Eyes Foundation was honoured by Rotary Chandigarh Shivalik and second Innings association (2019).",
    img: "/assets/awards/award1.jpg",
  },
  {
    title: "Hounered by NYKS Chandigarh",
    desc: "The Open Eyes Foundation was honored by Nehru Yuva Kendra Sanghthan, Chandigarh, Government of India, Ministry of Youth Affairs and Sports at the District Youth Convention at RGNIYD for its significant contribution in the social sector on 20th January 2018.",
    img: "/assets/awards/award2.jpg",
  },
  {
    title: "Featured in 'Mann Ki Baat' by PM Modi",
    desc: "Awarded for empowering 10,000+ students through reading programs.",
    img: "/assets/awards/award3.png",
  },
  {
    title: "Winner of JIYO DIL SE AWARD S-7",
    desc: "The founder of the Open Eyes Foundation, winner of JIYO DIL SE AWARD SESSION-7 receiving award from Member of Parliament Smt. Kiran kher and Mayor of Chandigarh Mr. Rajesh Kalia at Chandigarh club sector - 1 Chandigarh. (16 March 2019).",
    img: "/assets/awards/award4.png",
  },
  {
    title: "Honoured by SBI Chandigarh Circle",
    desc: "Mr. Sandeep Kumar was honored by the Chief General Manager of Chandigarh Circle, State Bank of India, Mr. Anukool Bhatnagar, for his commendable work (October 2020).",
    img: "/assets/awards/award5.png",
  },
  {
    title: "SBI gifted a tempo traveller",
    desc: "SBI Chairman Mr. Dinesh Kumar Khera commended Open Eyes Foundation, gifting a tempo traveller and books worth Rs. 50,000 at Chandigarh under CSR ( March 2021).",
    img: "/assets/awards/award6.jpg",
  },
  {
    title: "Hounered by Mayor of Chandigarh",
    desc: "The Mayor of Chandigarh, Mr. Divesh Modgil, honored the Open Eyes Foundation for its outstanding work in the field of education in 2018.",
    img: "/assets/awards/award7.png",
  },
];

export default function AwardsCarousel(): React.ReactElement {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentAward, setCurrentAward] = useState<{ title: string; desc: string; img: string } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  const openLightbox = (award: { title: string; desc: string; img: string }) => {
    setCurrentAward(award);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // small delay to clear image for smoother UX
    setTimeout(() => setCurrentAward(null), 200);
  };
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
      <div className="max-w-7xl mx-auto px-6 relative">
        <Slider {...settings}>
          {awards.map((award, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-4"
            >
              <div
                className="relative rounded-xl overflow-hidden shadow-lg border border-[#FACC15]/30 hover:border-[#FACC15] transition-all duration-500 cursor-pointer"
                onClick={() => openLightbox(award)}
              >
                {/* Award Image */}
                <img src={award.img} alt={award.title} className="w-full h-96 object-cover" />

                {/* Overlay (allow clicks through) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001233]/90 to-transparent pointer-events-none"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 p-5">
                  <h3 className="font-semibold text-lg text-[#FACC15] mb-1">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-200 text-justify">{award.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
        {/* Lightbox modal (AnimatePresence + Next Image like News modal) */}
        <AnimatePresence>
          {lightboxOpen && currentAward && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-8 text-white hover:text-red-500 transition text-3xl z-50"
                onClick={closeLightbox}
              >
                <X size={32} />
              </button>

              {/* Modal Content */}
              <motion.div
                className="relative w-full max-w-5xl mx-auto flex flex-col items-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
              >
                <div className="relative w-full h-[70vh]">
                  <Image
                    src={currentAward.img}
                    alt={currentAward.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center mt-6 text-white px-6">
                  <h2 className="text-2xl font-bold">{currentAward.title}</h2>
                  <p className="text-gray-400 mt-2 text-justify">{currentAward.desc}</p>
                  <span className="bg-[#FACC15] text-xs px-3 py-1 mt-3 inline-block rounded-full font-semibold tracking-wide text-black">
                    Award
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
