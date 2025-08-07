import ProfileCard from "./profileCard";
import { viceOc } from "../../data/teamData";

export default function VICEOC( {vocInfo} ) {
  return (
    <main className="bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="animated-gradient-text">Vice OC</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="flex justify-center">
            <ProfileCard
              key="Vice OC"
              name={vocInfo[0]?.team_member_name}
              photoSrc={vocInfo[0]?.team_member_photo?.url}
              gmailAddress={vocInfo[0]?.team_member_mail}
              linkedinURL={vocInfo[0]?.team_member_linked_in}
              large
            />
          </div>
        </div>
      </div>
    </main>
  );
}
