'use client';

import Image from 'next/image';

const sponsors = [
  {
    
    img: null,
    alt: null,
  },
  // Add more sponsors here
];

export default function LodgingPartnerSection() {
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
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-wider">
          LODGING PARTNER
        </h2>
        <div className="w-24 h-[3px] bg-white mx-auto mb-10 rounded-full" />

        <div className={`${layoutClass} w-full`}>
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.08] w-full max-w-sm sm:max-w-[320px] md:max-w-[400px] p-4 sm:p-6 flex items-center justify-center"
            >
              {sponsor.img ? (
                <div className="w-full">
                  <Image
                    src={sponsor.img}
                    alt={sponsor.alt}
                    width={600}
                    height={200}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 400px"
                  />
                </div>
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
