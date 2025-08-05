import TeamGrid from "./teamgrid";
import { teamMembers, domainDescriptions } from "../../data/teamData";

export default function PrN({ members }) {
    return (
        <TeamGrid
            sectionTitle="PR & Networking"
            members={members}
            description={domainDescriptions.prNetworking}
        />
    )
}