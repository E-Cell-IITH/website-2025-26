
'use client';
import { ChevronDown, Star } from 'lucide-react';

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

        /* Static gradient with slight blinking (fade in/out) */
        .text-glow {
          background: linear-gradient(to right, white, #c084fc);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          opacity: 1;
          animation: blinkFade 1.5s ease-in-out infinite;
        }

        @keyframes blinkFade {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.75;
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');
        .orbitron {
          font-family: 'Orbitron', sans-serif;
        }

        .glow-border {
          box-shadow: 0 0 8px 2px #a855f7aa;
        }

        .register-btn span {
          transition: background-color 0.3s ease;
        }

          /* Pulsing glow animation for the button */
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 10px 2px #a855f7aa;
          }
          50% {
            box-shadow: 0 0 20px 4px #c084fc;
          }
          100% {
            box-shadow: 0 0 10px 2px #a855f7aa;
          }
        }

        .register-btn:hover {
          background-color: #0a0a0a !important; /* deep black bg */
          background-image: none !important; /* remove gradient on hover */
          // animation: pulseGlow 1.2s ease-in-out infinite;
          border: 1px solid #c084fc;
        }


      `}</style>

      {/* Glowing + dimming title */}
      <h1 className="orbitron text-glow text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold mb-6 animate-slide-up delay-1">
        Founders Hive
        <br></br>
      </h1>
      <div className='text-glow'>
      <div className="w-50 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-10"></div>
      </div>

      {/* Register button */}
     <button
      onClick={() => window.open('https://forms.gle/4eZC61f8fVBicd428')}
      className="register-btn animate-slide-up delay-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-12 py-4 font-semibold text-sm sm:text-base rounded-lg glow-border transition-all duration-300 mb-8"
      >
      <span>REGISTER HERE</span>
      </button>



      {/* Description */}
      <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mb-8 animate-slide-up delay-3">
        Exclusive networking sessions bringing together top student founders, <br />
        experienced entrepreneurs, and mentors in intimate settings
      </p>

      {/* Badge */}
      <div className="animate-slide-up delay-3 inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-900/60 to-purple-800/60 rounded-full border border-purple-500/40 backdrop-blur-md">
        <Star className="w-5 h-5 text-purple-300 mr-2" />
        <span className="text-purple-200 text-sm sm:text-base">E-Cell IIT Hyderabad</span>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8">
        <ChevronDown className="w-6 h-6 text-purple-400 animate-bounce" />
      </div>
    </section>
  );
}
