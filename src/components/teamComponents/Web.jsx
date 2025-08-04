import TeamGrid from "./teamgrid";
import { teamMembers, domainDescriptions } from "../../data/teamData";

export default function Web( {members} ){
    return (
        <TeamGrid 
            sectionTitle="Web"
            members={teamMembers.web}
            description={domainDescriptions.web}
        />
    )
}