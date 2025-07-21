import TeamGrid from "./teamgrid";
import { teamMembers, domainDescriptions } from "../../data/teamData";

export default function PrN(){
    return (
        <TeamGrid 
            sectionTitle="PR & Networking"
            members={teamMembers.prNetworking}
            description={domainDescriptions.prNetworking}
        />
    )
}