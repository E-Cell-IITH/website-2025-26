"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function PreviousSpeakers() {
  const speakers = [
    {
      name: "DEVVRAT ARYA",
      title: "VP of Technology, Pepperfry",
      img: "/Speakers/DEVVRATARYA.webp",
    },
    {
      name: "AKHIL GUPTA",
      title: "Founder, Nobroker",
      img: "/Speakers/AKHILGUPTA.webp",
    },
    {
      name: "PANKAJ AGARWAL",
      title: "Founder and CEO, Taghive",
      img: "/Speakers/PANKAJAGARWAL.webp",
    },
    {
      name: "TAPAN MISHRA",
      title: "Former Director, Space Applications Center ISRO",
      img: "/Speakers/TAPANMISHRA.webp",
    },
    {
      name: "TN HARI",
      title: "HR Head, BigBasket",
      img: "/Speakers/TNHARI.webp",
    },
    {
      name: "DR. ONKAR ROI",
      title: "Director General, STPI",
      img: "/Speakers/DR.ONKARROI.webp",
    },
    {
      name: "BHAGWAN CHOWDARY",
      title: "Professor of Finance, ISB",
      img: "/Speakers/BHAGWANCHOWDARY.webp",
    },
    {
      name: "SHASHANK RANDEV",
      title: "Founder VC, 100X.VC",
      img: "/Speakers/SHASHANKRANDEV.webp",
    },
    {
      name: "V. KRISHNA MOHAN",
      title: "Executive Director, Bharat Biotech",
      img: "/Speakers/V.KRISHNAMOHAN.webp",
    },
    {
      name: "SK JANA",
      title: "Director R&D and Manufacutring, Serum Institute",
      img: "/Speakers/SKJANA.webp",
    },
    {
      name: "PADMA SRIVASTAVA",
      title: "Neurologist, AIMS",
      img: "/Speakers/PADMASRIVASTAVA.webp",
    },
  ];

  return (
    <div className="bg-black text-white flex flex-col items-center py-10 px-4 sm:px-6 md:px-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 font-semibold mb-8 mt-12 text-center">
        PREVIOUS SPEAKERS
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        className="w-full max-w-4xl"
      >
        {speakers.map((speaker) => (
          <SwiperSlide key={speaker.name}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-2 sm:px-4">
              <img
                src={speaker.img}
                alt={speaker.name}
                className="rounded-xl w-full sm:w-3/4 md:w-80 h-auto object-cover"
              />
              <div className="text-center md:text-left mt-6 md:mt-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{speaker.name}</h3>
                <p className="text-md sm:text-lg md:text-xl mt-2">{speaker.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
