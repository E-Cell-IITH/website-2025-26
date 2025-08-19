import TeamGrid from "./teamgrid";
import { teamMembers, domainDescriptions } from "../../data/teamData";

export default function DesignAndMultimedia( {members} ) {
    return (
        <TeamGrid
            sectionTitle="Design And Multimedia"
            members={members}
            description={domainDescriptions.mediaOutreach}
        />
    )
}