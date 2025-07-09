"use client"
import { ChevronDown, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6  text-white relative">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-6">
        Founders Hive
      </h1>

      <div className="h-1 w-24 bg-purple-500 rounded-full mx-auto mb-8"></div>

      <button
        onClick={() => window.open("https://forms.gle/4eZC61f8fVBicd428")}
        className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 font-semibold text-sm sm:text-base rounded-lg shadow-lg hover:opacity-90 transition duration-300 mb-8 animate-pulse"
      >
        REGISTER HERE
      </button>

      <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mb-8">
        Exclusive networking sessions bringing together top student founders, <br />
        experienced entrepreneurs, and mentors in intimate settings
      </p>

      <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-900/60 to-purple-800/60 rounded-full border border-purple-500/40 backdrop-blur-md">
        <Star className="w-5 h-5 text-purple-300 mr-2" />
        <span className="text-purple-200 text-sm sm:text-base">E-Cell IIT Hyderabad</span>
      </div>

      <div className="absolute bottom-8">
        <ChevronDown className="w-6 h-6 text-purple-400 animate-bounce" />
      </div>
    </section>
  );
}
