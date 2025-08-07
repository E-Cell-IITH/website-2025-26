import TeamGrid from "./teamgrid";
import { teamMembers, domainDescriptions } from "../../data/teamData";

export default function MediaAndOutreach( {members} ) {
    return (
        <TeamGrid
            sectionTitle="Media & Outreach"
            members={members}
            description={domainDescriptions.mediaOutreach}
        />
    )
}