import TeamGrid from "./teamgrid";
import { domainDescriptions } from "../../data/teamData";

export default function Web({ members }) {


    return (
        <TeamGrid
            sectionTitle="Web"
            members={members}
            description={domainDescriptions.web}
        />
    )
}