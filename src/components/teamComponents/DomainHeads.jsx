import ProfileCard from "./profileCard";
import { domainHeads } from "../../data/teamData";

export default function DomainHeads() {
  return (
    <main className="bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="animated-gradient-text">DOMAIN HEADS</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        {/* Grid layout matching the reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {domainHeads.map((domain) => (
            <div key={domain.domain} className="text-center">
              {/* Domain title */}
              <h2 className="text-xl lg:text-2xl font-semibold text-white mb-8">
                {domain.domain}
              </h2>
              
              {/* Side by side layout for domain heads with better spacing */}
              <div className="flex flex-row justify-center gap-4 lg:gap-6">
                {domain.members.map((member, memberIndex) => (
                  <div 
                    key={`${member.name}-${memberIndex}`}
                    className="w-full max-w-[140px]"
                  >
                    <ProfileCard
                      name={member.name}
                      photoSrc={member.photoSrc}
                      gmailAddress={member.gmailAddress}
                      linkedinURL={member.linkedinURL}
                      large
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}