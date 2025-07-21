import ProfileCard from "./profileCard";
import { domainHeads } from "../../data/teamData";

export default function DomainHeads() {
  return (
    <main className="bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Clean section title */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="animated-gradient-text">DOMAIN HEADS</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        {/* Clean grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16">
          {domainHeads.map((domain, index) => (
            <div key={domain.domain} className="text-center">
              {/* Simple domain title */}
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-white mb-3">
                  {domain.domain}
                </h2>
                <div className="w-12 h-0.5 bg-white/30 mx-auto"></div>
              </div>
              
              {/* Members */}
              <div className="flex flex-wrap justify-center gap-6">
                {domain.members.map((member, memberIndex) => (
                  <ProfileCard
                    key={`${member.name}-${memberIndex}`}
                    name={member.name}
                    photoSrc={member.photoSrc}
                    gmailAddress={member.gmailAddress}
                    linkedinURL={member.linkedinURL}
                    large
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}