import TeamGrid from "./teamgrid";
import { teamMembers, domainDescriptions } from "../../data/teamData";

export default function Ideation( {members} ){
    return (
        <TeamGrid 
            sectionTitle="Ideation"
            members={members}
            description={domainDescriptions.ideation}
        />
    )
}