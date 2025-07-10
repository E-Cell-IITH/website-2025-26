'use client';

import Image from 'next/image';

const sponsors = [
  {
    img: '/EcellLogo.png', // Replace with your actual image path
    alt: 'Scient Logo',
  },
  // Add more sponsors as needed
];

export default function TitleSponsorSection() {
  const isSingleSponsor = sponsors.length === 1;

  return (
    <section className="w-full bg-black py-12 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wider mb-4">
          TITLE SPONSOR
        </h2>
      <div className="w-24 h-[3px] bg-white mx-auto mb-10 rounded-full" />


        <div
          className={`${
            isSingleSponsor
              ? 'flex justify-center'
              : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'
          }`}
        >
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.1] transition-all duration-300 ease-in-out flex items-center justify-center min-h-[200px] max-w-md w-full"
            >
              {sponsor.img ? (
                <Image
                  src={sponsor.img}
                  alt={sponsor.alt}
                  width={250}
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
