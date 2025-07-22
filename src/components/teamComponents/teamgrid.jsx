import Image from "next/image";

export default function TeamGrid({ sectionTitle, members, description }) {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
          {/* Enhanced section title with better text sizing */}
          <div className="lg:w-2/5 mb-16 lg:mb-0 lg:sticky lg:top-24">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-8">
              {sectionTitle}
            </h1>
            <div className="w-20 h-1 bg-white/40 mb-8"></div>

            {/* Enhanced domain description */}
            {description && (
              <p className="text-gray-300 text-base lg:text-lg xl:text-xl leading-relaxed font-light">
                {description}
              </p>
            )}
          </div>

          {/* Enhanced member grid */}
          <div className="lg:w-3/5">
            {/* Managers heading */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 text-center">
              Managers
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
              {members.map((member, idx) => (
                <div key={idx} className="text-center">
                  {/* Smaller photo layout */}
                  <div className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-800/50 ring-2 ring-gray-700/30">
                    <Image
                      src={member.imgSrc}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-base lg:text-lg xl:text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
