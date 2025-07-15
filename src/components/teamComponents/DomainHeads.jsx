import ProfileCard from "./profileCard";

export default function DomainHeads() {
  const domains = [
    { domain: "Operations", members: [/* ... */] },
    { domain: "Web", members: [/* ... */] },
    { domain: "Ideation", members: [/* ... */] },
    { domain: "Events & Competitions", members: [/* ... */] },
    { domain: "Corporate Relations & Finance", members: [/* ... */] },
    { domain: "Design and Creatives", members: [/* ... */] },
    { domain: "PR & Networking", members: [/* ... */] },
    { domain: "Media and Outreach", members: [/* ... */] },
    { domain: "Marketing", members: [/* ... */] },
  ];

  return (
    <main className="bg-black text-white px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        DOMAIN HEADS
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {domains.map((domain) => (
          <div key={domain.domain} className="flex flex-col items-center px-4">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {domain.domain}
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {domain.members.map((member) => (
                <ProfileCard
                  key={member.name + member.role}
                  name={member.name}
                  photoSrc={member.photoSrc}
                  gmailAddress={member.gmailAddress}
                  linkedinURL={member.linkedinURL}
                  large // <-- optional: used to enlarge photo inside ProfileCard
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
