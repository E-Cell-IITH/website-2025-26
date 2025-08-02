import TeamGrid from "./teamgrid";
import { teamMembers, domainDescriptions } from "../../data/teamData";

export default function MediaAndOutreach() {
    return (
        <TeamGrid
            sectionTitle="Media & Outreach"
            members={teamMembers.mediaOutreach}
            description={domainDescriptions.mediaOutreach}
        />
    )
}