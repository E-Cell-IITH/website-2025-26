import ProfileCard from "./profileCard";

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
  <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
    DOMAIN HEADS
  </h1>
  <div className="max-w-4xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
      {domains.map((domain) => (
        <div
          key={domain.domain}
          className="flex flex-col items-center"
        >
          <h2 className="text-xl font-bold mb-4 text-center">
            {domain.domain}
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {domain.members.map((member) => (
              <ProfileCard
                key={member.name + member.role}
                name={member.name}
                photoSrc={member.photoSrc}
                gmailAddress={member.gmailAddress}
                linkedinURL={member.linkedinURL}
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
