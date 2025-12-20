"use client";

import { useRef } from "react";

const members = [
  {
    name: "Aarav Sharma",
    role: "Donor",
    image: "/members/m1.jpg",
    description: "Supporting education initiatives for underprivileged children.",
  },
  {
    name: "Neha Verma",
    role: "Volunteer",
    image: "/members/m2.jpg",
    description: "Actively involved in healthcare awareness camps.",
  },
  {
    name: "Rohan Mehta",
    role: "Contributor",
    image: "/members/m3.jpg",
    description: "Helping fund community development programs.",
  },
  {
    name: "Priya Singh",
    role: "Donor",
    image: "/members/m4.jpg",
    description: "Believes education is the strongest tool for change.",
  },
  {
    name: "Kunal Jain",
    role: "Volunteer",
    image: "/members/m5.jpg",
    description: "Works closely with children in rural areas.",
  },
];

export default function OurMembers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-6">
          <h3 className=" text-center text-2xl font-bold text-gray-900">
            Our Contributors
          </h3>
          <p className="text-center text-gray-600 text-sm mt-1">
            People who make our mission possible
          </p>
        </div>

        {/* Scrolling container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden group"
        >
          <div className="flex gap-6 animate-scroll group-hover:[animation-play-state:paused]">

            {[...members, ...members].map((member, index) => (
              <div
                key={index}
                className="w-[220px] h-[220px] perspective"
              >
                <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">

                  {/* FRONT */}
                  <div className="absolute inset-0 bg-white rounded-full backface-hidden flex flex-col items-center justify-center p-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {member.name}
                    </h4>
                    <p className="text-xs text-emerald-600">
                      {member.role}
                    </p>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 bg-emerald-600 text-white rounded-2xl shadow-md backface-hidden rotate-y-180 flex items-center justify-center p-4 text-center text-sm">
                    {member.description}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
