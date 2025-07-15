import Image from "next/image";

export default function TeamGrid({ sectionTitle, members }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white px-4 py-16">
      {/* Overall Section Title */}
      <div className="w-full flex items-center justify-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Managers</h2>
      </div>

      {/* One container per domain */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:gap-12">
        {/* Domain Title on the left */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0 flex justify-center md:justify-start">
          <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left self-center w-48 md:w-60 leading-tight">
            {sectionTitle}
          </h1>
        </div>

        {/* Members on the right */}
        <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
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
    </div>
  );
}
