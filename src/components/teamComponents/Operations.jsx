import TeamGrid from "./teamgrid";
import { domainDescriptions } from "../../data/teamData";

export default function Operations({members}){
    return (
        <TeamGrid 
            sectionTitle="Operations"
            members={members}
            description={domainDescriptions.operations}
        />
    )
}