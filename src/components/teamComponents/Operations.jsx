import TeamGrid from "./teamgrid";
import { teamMembers, domainDescriptions } from "../../data/teamData";

export default function Operations(){
    return (
        <TeamGrid 
            sectionTitle="Operations"
            members={teamMembers.operations}
            description={domainDescriptions.operations}
        />
    )
}