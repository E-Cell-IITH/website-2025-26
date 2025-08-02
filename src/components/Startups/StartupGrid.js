
'use client';
import Image from 'next/image';
import Link from "next/link"

export default function StartupGrid({ startUpList }) {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto place-items-center px-4">
        {startUpList.map((startup, index) => (
          <div
            key={index}
            className="group w-full max-w-sm rounded-xl border bg-white hover:shadow-2xl hover:scale-[1.1] transition-all duration-300 overflow-hidden transform "
          >
            <Link href={startup.start_up_website}>
              <div className="w-full aspect-video flex items-center hover:cursor-pointer  justify-center p-4 bg-gray-50">
                {startup.image ? (
                  <Image
                    src={startup.start_up_logo.url}
                    alt={startup.start_up_name}
                    width={200}
                    height={100}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-black text-sm">No Image</span>
                )}
              </div>
              <div className="p-4 border-t">
                <h3 className="text-xl text-black font-semibold">{startup.start_up_name}</h3>
                <p className="text-sm text-black">{startup.start_up_founder}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
