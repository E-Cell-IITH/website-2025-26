import TeamGrid from "./teamgrid";
import { teamMembers, domainDescriptions } from "../../data/teamData";

export default function CrF(){
    return (
        <TeamGrid 
            sectionTitle="Corporate Relations & Finance"
            members={teamMembers.corporateFinance}
            description={domainDescriptions.corporateFinance}
        />
    )
}