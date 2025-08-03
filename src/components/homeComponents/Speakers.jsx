"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function PreviousSpeakers({ previousSpeakers }) {


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
        {previousSpeakers.map((speaker) => (
          <SwiperSlide key={speaker.name}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-2 sm:px-4">
              <img
                src={speaker.speaker_image.url}
                alt={speaker.speaker_name}
                className="rounded-xl w-full sm:w-3/4 md:w-80 h-auto object-cover"
              />
              <div className="text-center md:text-left mt-6 md:mt-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{speaker.speaker_name}</h3>
                <p className="text-md sm:text-lg md:text-xl mt-2">{speaker.speaker_position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
