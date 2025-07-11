
'use client';

import Image from 'next/image';

const sponsors = [
  {
    
    img: null,
    alt: null,
  },
  
  {
    img: null
  },
  {
    img: null
  },
  {
    img: null
  }
];

export default function MediaPartnerSection() {
  const sponsorCount = sponsors.length;

 
  let layoutClass = '';
  if (sponsorCount === 1) {
    layoutClass = 'flex justify-center';
  } else if (sponsorCount === 2) {
    layoutClass = 'grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center';
  } else if (sponsorCount === 3) {
    layoutClass = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center';
  } else if (sponsorCount === 4) {
    layoutClass = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-items-center';
  } else {
    layoutClass = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center';
  }

  return (
    <section className="w-full bg-black py-12 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-wider">
          MEDIA PARTNER
        </h2>
        <div className="w-24 h-[3px] bg-white mx-auto mb-10 rounded-full" />

        <div className={`${layoutClass}`}>
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.08] transition-transform duration-300 ease-in-out flex items-center justify-center min-h-[200px] w-full max-w-xs"
            >
              {sponsor.img ? (
                <Image
                  src={sponsor.img}
                  alt={sponsor.alt}
                  width={300}
                  height={100}
                  className="object-contain"
                />
              ) : (
                <div className="w-full h-[100px] flex items-center justify-center text-gray-500 text-sm italic">
                  Image coming soon
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
