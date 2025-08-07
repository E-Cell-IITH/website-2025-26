import ProfileCard from "./profileCard";
import { overallHead } from "../../data/teamData";

export default function OC( {ocinfo} ) {
  return (
    <main className="bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Clean section title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="animated-gradient-text">OVERALL HEAD</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          {/* Profile card with better spacing */}
          <div className="flex justify-center">
            <ProfileCard
              key="Overall Coordinator"
              name={ocinfo[0].team_member_name}
              photoSrc={ocinfo[0].team_member_photo?.url}
              gmailAddress={ocinfo[0].team_member_mail}
              linkedinURL={ocinfo[0].team_member_linked_in}
              large
            />
          </div>
        </div>
      </div>
    </main>
  );
}
