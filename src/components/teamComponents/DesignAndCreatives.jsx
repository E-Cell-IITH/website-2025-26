import TeamGrid from "./teamgrid";
import { teamMembers, domainDescriptions } from "../../data/teamData";

export default function DesignAndCreatives( {members} ){
    return (
        <TeamGrid 
            sectionTitle="Design & Creatives"
            members={members}
            description={domainDescriptions.designCreatives}
        />
    )
}