"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Mr. Sandeep Kumar",
    role: "Founder & President",
    bio: "Meet Mr. Sandeep Kumar, a dynamic Business Development Officer at Future Eye Company. Mr. Kumar, a renowned social worker and founder of the Open Eyes Foundation, is widely known as “The Bookman of Chandigarh.”",
    image: "/assets/team/sandeep-kumar.jpeg",
  },
  {
    id: 2,
    name: "Ms. Priyanka",
    role: "Vice President",
    bio: "Ms. Priyanka holds a master’s degree in Sociology from Punjab University, Chandigarh. She works as a Product Associate at San Ram’s in the diamond jewelry sector and serves as the Vice President of the Open Eyes Foundation.",
    image: "/assets/team/priyanka.jpg",
  },
  {
    id: 3,
    name: "Ms. Nisha",
    role: "General Secretary",
    bio: "Meet Ms. Nisha, currently pursuing her Master of Philosophy in Economics from Punjab University, Chandigarh. She also serves as the General Secretary at Open Eyes Foundation.",
    image: "/assets/team/nisha.jpeg",
  },
  {
    id: 4,
    name: "Mr. Mohammad Aslam",
    role: "Accountant",
    bio: "Meet Mr. Mohammad Aslam, currently serving as the Placement Officer at Chitkara University. He also holds the position of Accountant at the Open Eyes Foundation.",
    image: "/assets/team/mohammad-aslam.jpg",
  },
  {
    id: 5,
    name: "Ms. Naina",
    role: "Executive Member",
    bio: "Meet Ms. Naina, who has completed her Masters in Psychology and currently works as Deputy Manager at Extramarks Education. She also serves as the Project Coordinator for ‘Bank for Child Education’.",
    image: "/assets/team/naina.jpg",
  },
  {
    id: 6,
    name: "Ms. Chandni",
    role: "Executive Member",
    bio: "Meet Ms. Chandni Thakur, who has completed her Bachelors in Psychology and is currently pursuing her Masters in Psychology.",
    image: "/assets/team/chandni.jpg",
  },
  {
    id: 7,
    name: "Mrs. Astinder Kaur",
    role: "Advisor",
    bio: "Meet Mrs. Astinder Kaur, a retired teacher from the Chandigarh Education Department and a National Awardee for her excellence in education. She now serves as an advisor to the Open Eyes Foundation.",
    image: "/assets/team/astinder-kaur.jpeg",
  },
  {
    id: 8,
    name: "Ms. Aanchal Sharma",
    role: "Advisor",
    bio: "Mrs. Aanchal Sharma holds a master’s degree in Mass Communication from SD College, Chandigarh. She currently works as a PR Consultant at SPORTSCOMM, a Delhi-based PR company.",
    image: "/assets/team/aanchal-sharma.jpg",
  },
  {
    id: 9,
    name: "Ms. Yukta Sharma",
    role: "HR Manager",
    bio: "Meet Ms. Yukta Sharma, the HR Manager at Open Eyes Foundation. She is pursuing her Ph.D. in Physics and manages HR operations, ensuring smooth collaboration among volunteers and team members.",
    image: "/assets/team/yukta-sharma.jpg",
  },
];

export default function TeamSection(): React.ReactElement {
  return (
    <section className="relative py-20 text-center overflow-hidden">
      {/* Background Title */}
      <h1 className="absolute top-1 left-1/2 -translate-x-1/2 text-[9vw] font-extrabold text-[#E63946]/10 select-none tracking-tighter uppercase">
        Team
      </h1>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001B44] mb-10">
          Meet Our Dedicated Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="w-[22rem] bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-[22rem] h-[22rem] object-cover bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain object-top hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#001B44] mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-[#0056A6] mb-3">{member.role}</p>
                <p className="text-sm text-[#374151] leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <p className="text-[#374151] mb-5 text-lg">
            Together, we strive to make education accessible for every child.
          </p>
          <button className="bg-[#001B44] hover:bg-[#003366] text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
