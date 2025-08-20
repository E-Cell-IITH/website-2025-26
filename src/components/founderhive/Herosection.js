'use client';
import { useEffect, useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsVisible((prev) => ({ ...prev, [id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center max-w-6xl mx-auto px-6">
        {/* Title */}
        <div
          id="hero-title"
          data-animate
          className={`transition-all duration-1000 transform ${
            isVisible['hero-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="custom-heading text-glow text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold mb-6 bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent transition-opacity duration-200">
            Founders Hive
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8 animate-pulse"></div>
        </div>

        {/* Subtitle + Button */}
        <div
          id="hero-subtitle"
          data-animate
          className={`transition-all duration-1000 delay-300 transform ${
            isVisible['hero-subtitle'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <button
            onClick={() => window.open('https://forms.gle/4eZC61f8fVBicd428')}
            className="register-btn hover:cursor-pointer bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-12 py-4 font-semibold text-sm sm:text-base rounded-lg glow-border transition-all duration-300 mb-8  "
          >
            <span>REGISTER HERE</span>
          </button>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Exclusive networking sessions bringing together top student founders,
            <br />
            experienced entrepreneurs, and mentors in intimate settings
          </p>
        </div>

        {/* Badge */}
        <div
          id="hero-badge"
          data-animate
          className={`transition-all duration-1000 delay-500 transform ${
            isVisible['hero-badge'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-900/50 to-purple-800/50 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <Star className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-200">E-Cell IIT Hyderabad</span>
          </div>
        </div>

        {/* Scroll Icon */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </div>

      {/* Extra styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');

        .custom-heading {
          font-family: 'Poppins', sans-serif;
        }

        .text-glow {
          background: linear-gradient(to right, white, #c084fc);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: blinkFade 1.5s ease-in-out infinite;
        }

        @keyframes blinkFade {
          0%, 100% {
            opacity: 1.2;
          }
          50% {
            opacity: 0.75;
          }
        }

        .glow-border {
          box-shadow: 0 0 8px 2px #a855f7aa;
        }

        
      `}</style>
    </section>
  );
}
