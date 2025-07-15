// components/MotionCard.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MotionCard(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center h-full w-full max-w-sm mx-auto px-4 group"
    >
      {/* Circle Image */}
      <div className="w-20 h-20 md:w-24 md:h-24 mb-4 relative">
        <Image
          src={props.src}
          alt={props.alt}
          fill
          className="object-cover rounded-full"
        />
      </div>

      {/* Outer border */}
      <div className="flex flex-col flex-1 w-full p-[2px] bg-gradient-to-br from-purple-500/50 via-purple-600 to-purple-700 rounded-2xl transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-purple-400/40 group-hover:shadow-lg">
        <div className="flex flex-col flex-1 bg-black rounded-2xl p-6 text-white">
          <h3 className="text-lg font-bold mb-2 tracking-wide uppercase">{props.title}</h3>
          <p className="text-justify leading-relaxed text-sm sm:text-base text-white/90">{props.text}</p>
        </div>
      </div>
    </motion.div>
  );
}
