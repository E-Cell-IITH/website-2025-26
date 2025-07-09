"use client";

import Image from "next/image";

const collaborators = [
    {name: "yhills", src:"/Collaborators/yhills.webp"},
    {name: "henryharvin", src:"/Collaborators/henryharvin.webp"},
    {name: "amazon", src:"/Collaborators/amazon.webp"},
    {name: "uber", src:"/Collaborators/uber.webp"},
    {name: "aglasem", src:"/Collaborators/aglasem.webp"},
    {name: "unstop", src:"/Collaborators/unstop.webp"},
    {name: "stumagz", src:"/Collaborators/stumagz.webp"},
    {name: "tiehyderabad", src:"/Collaborators/tiehyderabad.webp"},
    {name: "exfinity", src:"/Collaborators/exfinity.webp"},
];

export default function Collaborators() {
    return (
        <section className="bg-black text-gray-300 py-10 overflow-hidden">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
                OUR COLLABORATORS
            </h2>

            <div className="relative w-full overflow-hidden bg-[#1f1f1f] py-4">
                <div className="flex w-max animate-marquee gap-6 md:gap-12 px-8">
                    {[...collaborators, ...collaborators].map((logo, index) => (
                        <div key={`${logo.name}-${index}`} className="flex-shrink-0">
                            <Image 
                                src={logo.src}
                                alt={logo.name}
                                width={120}
                                height={80}
                                className="object-contain w-28 h-28 md:w-40"
                                
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}