"use client";

import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import Image from "next/image";
import React from "react";

export default function FounderPage(): React.ReactElement {
  return (
    <main className="bg-gradient-to-b from-[#ffffff] to-[#f5f9ff]">
      <Navbar />

      {/* Hero Section */}
      <section className="py-8 text-center relative overflow-hidden">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#001B44] mb-2 relative z-10">
          About the Founder
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Story Behind <span className="text-blue-700 font-semibold">Open Eyes Foundation</span>
        </p>

        {/* Subtle background text */}
        <h2 className="absolute top-[5.7rem] left-1/2 -translate-x-1/2 text-[5vw] font-extrabold text-[#001B44]/10 select-none uppercase">
          Sandeep kumar
        </h2>
      </section>

      {/* Video + Story Section */}
      <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-5">
          {/* Video Section */}
          <div className="md:w-full w-full overflow-hidden shadow-xl">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/zolgmKrhOco?start=1"
                title="Meet Book Man Sandeep Kumar"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 w-full space-y-5 text-gray-700 leading-relaxed pb-2 text-justify mb-2">
            <p>
              All of us go through life, but some moments have a greater impact than others.
              Sometimes we see problems in our surroundings and we do one of three things:
              we ignore them, we notice but do nothing, or we decide to act. Our founder,
              <span className="font-semibold text-blue-700"> Sandeep Kumar</span>, belonged
              to the third category he took action to educate underprivileged children around him.
            </p>

            <p>
              Born to a farmer in Dhani Mahu, a small village in Haryana’s Bhiwani district,
              Sandeep completed his schooling up to Class 12 before moving to Chandigarh. He
              pursued a Junior Basic Training (JBT) course, which enabled him to teach students
              in government schools.
            </p>
          </div>
          </div>
          <div className="md:w-full w-full space-y-5 text-gray-700 leading-relaxed text-justify">
            <p>
              During his internship in a government school, he discovered a harsh truth
              many intelligent students couldn’t take notes because they lacked basic
              stationery. “We don’t have books, pens, or pencils, masterji,” they said.
            </p>

            <p>
              Initially, Sandeep used his own pocket money to buy books and pens for these
              students. But soon, as word spread, more children sought help. This led him to
              explore why “free education” was not truly free. He learned that while funds
              were allocated, many families couldn’t afford to use them for education
              amidst poverty.
            </p>

            <p>
              Returning to Chandigarh, he observed similar issues students struggling due
              to a lack of books and resources. Determined to help, he began collecting
              half-used notebooks, old textbooks, and stationery from his own home.
            </p>

            <p>
              He bound unused pages into new notebooks, refilled old pens, and realized that
              if more people joined in, many students could be helped. This simple idea
              sparked a movement.
            </p>

            <p className="font-medium text-[#001B44]">
              Encouraged by friends and mentors to formalize his efforts, Sandeep founded
              the <span className="text-blue-700 font-semibold">Open Eyes Foundation</span> —
              a mission-driven NGO repurposing books and stationery to empower
              underprivileged students and ensure education for all.
            </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
