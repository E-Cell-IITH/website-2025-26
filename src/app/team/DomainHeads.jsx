import ProfileCard from "./teamComponents/profileCard";

export default function DomainHeads(){
    const domains = [
        {
            domain : "Operations",
            members: [
                {
                    name:"Tim Cook",
                    role:'Operations',
                    photoSrc:"/timCook.jpg",
                    gmailAddress:"thisIsTimCooking@gmail.com",
                    linkedinURL:"https://www.linkedin.com/in/cooktim/?originalSubdomain=uk"
                },
            ],
        },
        {
            domain:"Web",
            members:[
                {
                    name:"Tim Cook",
                    role:'Web',
                    photoSrc:"/timCook.jpg",
                    gmailAddress:"thisIsTimCooking@gmail.com",
                    linkedinURL:"https://www.linkedin.com/in/cooktim/?originalSubdomain=uk"
                },
            ],
        },
        {
            domain:"Ideation",
            members:[
                {
                    name:"Tim Cook",
                    role:'Ideation',
                    photoSrc:"/timCook.jpg",
                    gmailAddress:"thisIsTimCooking@gmail.com",
                    linkedinURL:"https://www.linkedin.com/in/cooktim/?originalSubdomain=uk"
                },
                {
                    name:"Tim Cook",
                    role:"Ideation",
                    photoSrc:"/timCook.jpg",
                    gmailAddress:"thisIsTimCooking@gmail.com",
                    linkedinURL:"https://www.linkedin.com/in/cooktim/?originalSubdomain=uk"
                }
            ],
        },
        {
            domain:"Events & Competitions",
            members:[
                {
                    name:"Tim Cook",
                    role:'Events & Competitions',
                    photoSrc:"/timCook.jpg",
                    gmailAddress:"thisIsTimCooking@gmail.com",
                    linkedinURL:"https://www.linkedin.com/in/cooktim/?originalSubdomain=uk"
                },
            ],
        },
        {
            domain:"Corporate Relations & Finance",
            members:[
                {
                    name:"Tim Cook",
                    role:'Corporate Relations & Finance',
                    photoSrc:"/timCook.jpg",
                    gmailAddress:"thisIsTimCooking@gmail.com",
                    linkedinURL:"https://www.linkedin.com/in/cooktim/?originalSubdomain=uk"
                },
            ],
        },
        {
            domain : "Design and Creatives",
            members : [
                {
                    name:"Tim Cook",
                    role:'Design and Creatives',
                    photoSrc:"/timCook.jpg",
                    gmailAddress:"thisIsTimCooking@gmail.com",
                    linkedinURL:"https://www.linkedin.com/in/cooktim/?originalSubdomain=uk"
                },
            ],
        },
        {
            domain : "PR & Networking",
            members:[
                {
                    name:"Tim Cook",
                    role:'PR & Networking',
                    photoSrc:"/timCook.jpg",
                    gmailAddress:"thisIsTimCooking@gmail.com",
                    linkedinURL:"https://www.linkedin.com/in/cooktim/?originalSubdomain=uk"
                },
                {
                    name:"Tim Cook",
                    role:'PR & Networking',
                    photoSrc:"/timCook.jpg",
                    gmailAddress:"thisIsTimCooking@gmail.com",
                    linkedinURL:"https://www.linkedin.com/in/cooktim/?originalSubdomain=uk"
                },
            ],
        },
        {
            domain : "Media and Outreach",
            members: [
                {
                    name:"Tim Cook",
                    role:'Media and Outreach',
                    photoSrc:"/timCook.jpg",
                    gmailAddress:"thisIsTimCooking@gmail.com",
                    linkedinURL:"https://www.linkedin.com/in/cooktim/?originalSubdomain=uk"
                },
            ],
        },
        {
            domain : "Marketing",
            members:[
                {
                    name:"Tim Cook",
                    role:'Marketing',
                    photoSrc:"/timCook.jpg",
                    gmailAddress:"thisIsTimCooking@gmail.com",
                    linkedinURL:"https://www.linkedin.com/in/cooktim/?originalSubdomain=uk"
                },
            ]
        }
    ];
    return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">DOMAIN HEADS</h1>

      <div className="flex flex-col gap-16 max-w-6xl mx-auto">
        {domains.map((domain) => (
          <div key={domain.domain} className="flex flex-col w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">{domain.domain}</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {domain.members.map((member) => (
                <ProfileCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  photoSrc={member.photoSrc}
                  gmailAddress={member.gmailAddress}
                  linkedInURL={member.linkedinURL}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
