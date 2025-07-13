
"use client";
import { ChevronDown, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 text-white relative overflow-hidden">
      <style jsx>{`
        /* Slide up animation */
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .delay-1 {
          animation-delay: 0.2s;
        }
        .delay-2 {
          animation-delay: 0.4s;
        }
        .delay-3 {
          animation-delay: 0.6s;
        }

        /* Smooth gradient shimmer effect (white to violet) */
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .text-glow {
          background: linear-gradient(270deg, white, #c084fc, white);
          background-size: 400% 400%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradientMove 4s ease-in-out infinite;
        }

        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');
        .orbitron {
          font-family: 'Orbitron', sans-serif;
        }

        .glow-border {
          box-shadow: 0 0 8px 2px #a855f7aa;
        }

        .register-btn span {
          background-color: transparent;
          // padding: 0.2rem 0.5rem;
          // border-radius: 0.375rem;
          transition: background-color 0.3s ease;
        }

        .register-btn:hover span {
          background-color: black;
        }
      `}</style>

      {/* Title with blinking shimmer gradient glow */}
      <h1 className="orbitron text-glow text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold mb-6 animate-slide-up delay-1">
        Founders Hive
      </h1>

      {/* Underline */}
      <div className="h-1 w-24 bg-purple-500 rounded-full mx-auto mb-8 animate-slide-up delay-1"></div>

      {/* Glowing border register button */}
      <button
        onClick={() => window.open("https://forms.gle/4eZC61f8fVBicd428")}
        className="register-btn animate-slide-up delay-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-12 py-4 font-semibold text-sm sm:text-base rounded-lg glow-border hover: bg-black  transition-all duration-300 mb-8"
      >
        <span>REGISTER HERE</span>
      </button>

      {/* Description */}
      <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mb-8 animate-slide-up delay-3">
        Exclusive networking sessions bringing together top student founders, <br />
        experienced entrepreneurs, and mentors in intimate settings
      </p>

      {/* E-Cell tag */}
      <div className="animate-slide-up delay-3 inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-900/60 to-purple-800/60 rounded-full border border-purple-500/40 backdrop-blur-md">
        <Star className="w-5 h-5 text-purple-300 mr-2" />
        <span className="text-purple-200 text-sm sm:text-base">E-Cell IIT Hyderabad</span>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-8">
        <ChevronDown className="w-6 h-6 text-purple-400 animate-bounce" />
      </div>
    </section>
  );
}
