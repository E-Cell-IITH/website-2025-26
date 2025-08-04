import ProfileCard from "./profileCard";

export default function DomainHeads({ members }) {
  const domainHeads = members.reduce((acc, member) => {
    const domain = member.enter_domain;

    if (!acc[domain]) {
      acc[domain] = [];
    }

    acc[domain].push({
      name: member.team_member_name,
      photoSrc: member.team_member_photo?.url || "/fallback.jpg",
      gmailAddress: member.team_member_mail,
      linkedinURL: member.team_member_linked_in,
    });

    return acc;
  }, {});

  const groupedHeads = Object.entries(domainHeads).map(([domain, members]) => ({
    domain,
    members,
  }));

  return (
    <main className="bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="animated-gradient-text">DOMAIN HEADS</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {groupedHeads.map((domain) => (
            <div key={domain.domain} className="text-center">
              <h2 className="text-xl lg:text-2xl font-semibold text-white mb-8">
                {domain.domain}
              </h2>
              <div className="flex flex-row justify-center gap-4 lg:gap-6 flex-wrap">
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
