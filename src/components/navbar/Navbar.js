'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'TEAM', href: '/team' },
  { label: 'E SUMMIT', href: '/esummit' },
  { label: 'STARTUP FAIR', href: '/startupfair' },
  { label: 'FOUNDERS HIVE', href: '/foundershive' },
  { label: 'MUN', href: '/mun' },
  { label: 'PARTNERS', href: '/partners' },
  // { label: 'WORKSHOPS', href: '/workshops' },
  { label: 'IITH STARTUPS', href: '/startups' },
];

export default function Navbarlayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowLinks(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setShowLinks(false);
    }, 400); // Faster animation duration
  };

  return (
    <>
      {/* Hamburger Button */}
      <div className="fixed top-[10vh] right-[10vh] z-[60]">
        <button
          onClick={() => (isOpen ? handleClose() : setIsOpen(true))}
          className="w-14 h-14 relative group hover:scale-110 transition-transform duration-300"
        >
          <span
            className={`absolute w-8 h-[3px] bg-white top-1/2 left-1/2 transition-all duration-400 ease-out rounded-full ${
              isOpen
                ? 'rotate-45 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-cyan-400'
                : '-translate-x-1/2 -translate-y-3 group-hover:w-9'
            }`}
          />
          <span
            className={`absolute w-8 h-[3px] bg-white top-1/2 left-1/2 transition-all duration-400 ease-out rounded-full ${
              isOpen ? 'opacity-0 scale-0' : '-translate-x-1/2 -translate-y-1/2 group-hover:w-6'
            }`}
          />
          <span
            className={`absolute w-8 h-[3px] bg-white top-1/2 left-1/2 transition-all duration-400 ease-out rounded-full ${
              isOpen
                ? '-rotate-45 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-cyan-400'
                : '-translate-x-1/2 translate-y-3 group-hover:w-9'
            }`}
          />
        </button>
      </div>

      {/* Animated Circle Background */}
      {isOpen && (
        <div className="fixed inset-0 z-40 animate-expandCircle bg-black/80 backdrop-blur-lg pointer-events-none"></div>
      )}
      {isClosing && (
        <div className="fixed inset-0 z-40 animate-contractCircle bg-black/80 backdrop-blur-lg pointer-events-none"></div>
      )}

      {/* Nav Links Container */}
      {showLinks && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
          <div className="relative flex flex-col items-center max-h-[80vh] overflow-y-auto py-20 space-y-10 pointer-events-auto scrollbar-hide px-8">
            {/* Background Blobs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Navigation Items */}
            {navItems.map((item, index) => (
              <div key={item.href + index}>
                <Link
                  href={item.href}
                  onClick={handleClose}
                  className="group relative block text-4xl text-white tracking-wider hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-cyan-400 hover:to-purple-400 transition-all duration-300 ease-out hover:scale-110 hover:translate-x-4"
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl rounded-lg transform scale-110"></div>
                  </div>

                  {/* Underline */}
                  <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-400 ease-out rounded-full"></div>

                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Animations & Scrollbar Hiding */}
      <style jsx>{`
        @keyframes expandCircle {
          from {
            clip-path: circle(0% at 90% 20%);
          }
          to {
            clip-path: circle(150% at 90% 20%);
          }
        }

        @keyframes contractCircle {
          from {
            clip-path: circle(150% at 90% 20%);
          }
          to {
            clip-path: circle(0% at 90% 20%);
          }
        }

        .animate-expandCircle {
          animation: expandCircle 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-contractCircle {
          animation: contractCircle 0.4s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
