import TeamGrid from "./teamgrid";
import { teamMembers, domainDescriptions } from "../../data/teamData";

export default function Web(){
    return (
        <TeamGrid 
            sectionTitle="Web"
            members={teamMembers.web}
            description={domainDescriptions.web}
        />
    )
}