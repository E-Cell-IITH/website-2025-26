import Image from 'next/image';

export default function TeamGrid({ sectionTitle, members }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      {/* Left Section: Title */}
      <div className="w-full md:w-[25rem] flex items-center justify-center py-8 md:py-0">
        <h1 className="text-4xl md:text-5xl font-bold">{sectionTitle}</h1>
      </div>
      {/* Right Section: Grid */}
      <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 p-6 md:py-12 md:px-8">
        {members.map((member, idx) => (
          <div key={idx} className="text-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto rounded-xl overflow-hidden mb-3">
              <Image
                src={member.imgSrc}
                alt={member.name}
                width={150}
                height={150}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-base sm:text-lg">{member.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
