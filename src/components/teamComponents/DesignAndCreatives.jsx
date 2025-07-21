import TeamGrid from "./teamgrid";
import { teamMembers, domainDescriptions } from "../../data/teamData";

export default function DesignAndCreatives(){
    return (
        <TeamGrid 
            sectionTitle="Design & Creatives"
            members={teamMembers.designCreatives}
            description={domainDescriptions.designCreatives}
        />
    )
}