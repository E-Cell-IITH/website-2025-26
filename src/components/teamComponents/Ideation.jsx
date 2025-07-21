import TeamGrid from "./teamgrid";
import { teamMembers, domainDescriptions } from "../../data/teamData";

export default function Ideation(){
    return (
        <TeamGrid 
            sectionTitle="Ideation"
            members={teamMembers.ideation}
            description={domainDescriptions.ideation}
        />
    )
}