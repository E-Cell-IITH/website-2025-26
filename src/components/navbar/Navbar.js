'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'E SUMMIT', href: '/esummit' },
  { label: 'STARTUP FAIR', href: '/startupfair' },
  { label: 'FOUNDERS HIVE', href: '/foundershive' },
  { label: 'MUN', href: '/mun' },
  { label: 'PARTNERS', href: '/partners' },
  { label: 'WORKSHOPS', href: '/workshops' },
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
    }, 700); // Match animation duration
  };

  return (
    <>
      {/* Hamburger & Cross */}
      <div className="fixed top-[10vh] right-[10vh] z-[60]">
        <button
          onClick={() => (isOpen ? handleClose() : setIsOpen(true))}
          className="w-10 h-10 relative"
        >
          {/* Hamburger -> Cross lines */}
          <span
            className={`absolute w-6 h-[2px] bg-white top-1/2 left-1/2 transition-transform duration-500 ${
              isOpen ? 'rotate-45 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 -translate-y-2'
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-white top-1/2 left-1/2 transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : '-translate-x-1/2 -translate-y-1/2'
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-white top-1/2 left-1/2 transition-transform duration-500 ${
              isOpen ? '-rotate-45 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 translate-y-2'
            }`}
          />
        </button>
      </div>

      {/* Black Circular Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 animate-expandCircle bg-black/70 backdrop-blur-md pointer-events-none"></div>
      )}
      {isClosing && (
        <div className="fixed inset-0 z-40 animate-contractCircle bg-black/70 backdrop-blur-md pointer-events-none"></div>
      )}

      {/* Nav Links (separate layer) */}
      {showLinks && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-8 text-3xl font-semibold text-white pointer-events-auto">
          {navItems.map((item, index) => (
            <div
              key={item.href}
              className={`transition-all duration-700 ease-in-out transform ${
                isClosing
                  ? '-translate-x-32 opacity-0'
                  : 'translate-x-0 opacity-100 delay-300'
              }`}
            >

              <Link
                href={item.href}
                onClick={handleClose}
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 transition-transform hover:translate-x-2 hover:scale-105"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
