"use client";

const videos = [
  { id: "-kRZK7oTktM", title: "Story of Bookman - Sandeep Kumar" },
  { id: "zolgmKrhOco", title: "Raddi Se Shiksha" },
  { id: "QNV_CeimuUY", title: "Mann Ki Baat by PM Narendra Modi" },
  { id: "pHtVHYgWfhY", title: "Sandeep kumar Bookman praised" },
  { id: "5vudT28wvf8", title: "Gyaan Ka Safar Mobile Library" },
  { id: "LH3-bsgcI9c", title: "Mission Literacy" },
  { id: "jBUNwSzq-hw", title: "Library Of Honesty" },
];


export default function FeaturedVideos() {
  return (
    <section className="py-10 bg-white mx-2">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Stories That Inspire Change
          </h2>
          <p className="text-gray-600 mt-3">
            Real stories showing the impact of OpenEyes Foundation.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* BIG FEATURED VIDEO */}
          <div className="md:row-span-2 overflow-hidden shadow-lg">
            <iframe
              className="w-full md:h-[625px] h-[300px]"
              src={`https://www.youtube-nocookie.com/embed/${videos[0].id}?rel=0`}
              title={videos[0].title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="p-2 bg-[#FACC15]">
              <h3 className="font-semibold">{videos[0].title}</h3>
            </div>
          </div>

          {/* OTHER 6 VIDEOS */}
          {videos.slice(1).map((video, index) => (
            <div
              key={index}
              className="overflow-hidden shadow-md bg-[#FACC15]"
            >
              <iframe
                className="w-full h-[280px]"
                src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-2 bg-[#FACC15]">
                <p className="text-sm font-medium">{video.title}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
