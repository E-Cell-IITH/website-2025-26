 'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const payload = [
  {
    title: 'TITLE SPONSOR',
    sponsors: [
      { img: null, alt: 'Title Sponsor 1' },
      {
        img:null,alt:'2'
      },
      {
        img:null,alt:'3'
      }
      
    ],
  },
];

export default function SponsorSection() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(payload);
  }, []);

  const getLayoutClass = (count) => {
    if (count === 1) return 'flex justify-center';
    if (count === 2) return 'grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center';
    if (count >= 3) return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center';
    return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center';
  };

  return (
    <section className="w-full bg-black py-12 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 tracking-wider">
              {section.title}
            </h2>
            <div className="w-24 h-[3px] bg-white mx-auto mb-10 rounded-full" />

            <div className={`${getLayoutClass(section.sponsors.length)} w-full`}>
              {section.sponsors.map((sponsor, idx) => {
                const isCompact = section.sponsors.length >= 3;

                return (
                  <div
                    key={idx}
                    className={`
                      bg-white rounded-xl overflow-hidden shadow-lg 
                      transition-all duration-300 ease-in-out hover:scale-[1.08] 
                      w-full ${isCompact ? 'max-w-[340px]' : 'max-w-[400px]'} 
                      p-4 sm:p-6 flex items-center justify-center
                    `}
                    style={{
                      height: isCompact ? '220px' : '250px',
                    }}
                  >
                    {sponsor.img ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <Image
                          src={sponsor.img}
                          alt={sponsor.alt || 'Sponsor Logo'}
                          width={isCompact ? 300 : 360}
                          height={isCompact ? 200 : 220}
                          className="object-contain w-full h-full"
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 360px"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm italic">
                        Image coming soon
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
