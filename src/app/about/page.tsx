import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TeamSection from "@/components/TeamSection";

export default function AboutPage(): React.ReactElement {
  return (
    <main className="bg-white text-[#001B44]">
      <Navbar />

      {/* ======= ABOUT HEADING ======= */}
      <section className="py-12 sm:py-16 text-center relative overflow-hidden px-4 sm:px-6 md:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          About the Organisation
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
          Story Behind{" "}
          <span className="text-blue-700 font-semibold">
            Open Eyes Foundation
          </span>
        </p>
      </section>

      {/* ======= VIDEO SECTION ======= */}
      <section className="relative pb-10 px-4 sm:px-6 md:px-12">
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div
            className="relative w-full overflow-hidden shadow-lg rounded-xl"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/pHtVHYgWfhY"
              title="Open Eyes Foundation Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ======= ABOUT CONTENT ======= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="prose font-normal leading-relaxed text-gray-700 text-sm sm:text-base text-justify">
          <p>
            <span className="font-semibold text-[var(--marian-blue-200)] text-justify">
              Open Eyes Foundation Manimajra Chandigarh (OEFMC)
            </span>
            , a non-governmental organization (NGO), has been working tirelessly
            since 2017 to sustain the education of thousands of underprivileged
            students. The organization collects used books, stationery, and
            educational materials from households, colleges, schools, and
            institutions. After sorting and refurbishing these items, they are
            distributed free of cost to those in need. The foundation establishes
            mobile, community, and school libraries to enhance learning
            accessibility and supports the educational expenses of orphans,
            single-parent children, and other underprivileged students, ensuring
            their education continues without interruption. With a mission to
            bridge educational gaps, OEFMC strives to create a future where every
            child has access to knowledge and opportunities. Registered under the
            Societies Registration Act, 1860, and certified under Sections 80G &
            12A, OEFMC continues to drive lasting, meaningful change, empowering
            individuals to build a better tomorrow.
          </p>
        </div>

        {/* ======= OBJECTIVES ======= */}
        <div className="mt-10 border-l-4 border-[var(--marian-blue-200)] p-6 rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Our Objectives
          </h2>
          <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-[#374151] space-y-2 text-left">
            <li>
              The society has been organized as a public welfare society and
              shall work for the welfare of the public in various manners.
            </li>
            <li>
              The society shall guide the public by counseling and rallies
              against social issues and social evils.
            </li>
            <li>
              Organizing extracurricular activities like blood donation camps,
              cultural fairs, and educational fairs.
            </li>
            <li>
              Providing mediation support to help resolve voluntary family
              disputes within the community.
            </li>
            <li>
              Working with special children to spread awareness about education
              and improve their confidence in life.
            </li>
            <li>
              Distributing books and educational materials to poor students and
              running schools, coaching centers, and computer centers for the
              needy.
            </li>
            <li>
              Creating awareness about AIDS, drugs, and alcohol abuse through
              educational outreach.
            </li>
          </ul>
        </div>
      </section>

      {/* ======= IDEOLOGY ======= */}
      <section className="bg-[var(--marian-blue-900)] py-16 px-4 sm:px-6 md:px-12 mt-10 text-center text-[#001B44] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            Ideology
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            This initiative repurposes discarded books and stationery to support
            underprivileged students, bridging educational gaps and covering
            essential educational expenses to ensure accessible education for all.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mt-8">
            {/* Vision */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4">
                <Image
                  src="/images/ideology1.png"
                  alt="Vision Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Vision</h3>
              <p className="max-w-md text-sm sm:text-base">
                To create a society where every child, regardless of their
                socio-economic background, has the opportunity to pursue
                education and realize their full potential, contributing
                positively to their communities and the nation.
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4">
                <Image
                  src="/images/ideology2.png"
                  alt="Mission Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Mission</h3>
              <p className="max-w-md text-sm sm:text-base">
                To empower underprivileged children by ensuring access to quality
                education and essential resources, fostering a supportive
                environment that enables their academic and personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======= TEAM SECTION ======= */}
      <TeamSection />

      {/* ======= FOUNDER SECTION ======= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          About the Founder
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Learn about the founder and the story behind Open Eyes Foundation.
        </p>
        <Link
          href="/about/founder"
          className="inline-block px-5 py-2.5 bg-[#FFD05A] text-[#003366] rounded-lg font-semibold hover:bg-[#ffc940] transition-all duration-300"
        >
          About the Founder
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
