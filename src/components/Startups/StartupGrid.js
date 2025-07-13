
'use client';
import Image from 'next/image';

const startups = [
  {
    name: 'Adiabatic',
    founder: 'Darshan Meher, Co-founder',
    image: null,
    site: 'https://adiabatic.in',
  },
  {
    name: 'HydrogenX',
    founder: '',
    image: null,
    site: 'https://hydrogenx.io',
  },
  {
    name: 'NeuroNest',
    founder: '',
    image: null,
    site: 'https://neurons.ai',
  },
  {
    name: 'EcoCharge',
    founder: '',
    image: null,
    site: 'https://ecocharge.tech',
  },
  {
    name: 'BioLink',
    founder: '',
    image: null,
    site: 'https://biolink.life',
  },
  {
    name: 'QuantumX',
    founder: '',
    image: null,
    site: 'https://quantumx.dev',
  },
];

export default function StartupGrid() {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto place-items-center px-4">
        {startups.map((startup, index) => (
          <div
            key={index}
            onClick={() => startup.site && window.open(startup.site, '_blank')}
            className="group w-full max-w-sm cursor-pointer rounded-xl border bg-white hover:shadow-2xl hover:scale-[1.1] transition-all duration-300 overflow-hidden transform"
          >
            <div className="w-full aspect-video flex items-center justify-center p-4 bg-gray-50">
              {startup.image ? (
                <Image
                  src={startup.image}
                  alt={startup.name}
                  width={200}
                  height={100}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <span className="text-black text-sm">No Image</span>
              )}
            </div>
            <div className="p-4 border-t">
              <h3 className="text-xl text-black font-semibold">{startup.name}</h3>
              <p className="text-sm text-black">{startup.founder}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
