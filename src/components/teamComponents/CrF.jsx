import TeamGrid from "./teamgrid";
import {  domainDescriptions } from "../../data/teamData";

export default function CrF({members}){
    return (
        <TeamGrid 
            sectionTitle="Corporate Relations & Finance"
            members={members}
            description={domainDescriptions.corporateFinance}
        />
    )
}