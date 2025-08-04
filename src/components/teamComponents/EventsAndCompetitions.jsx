import TeamGrid from "./teamgrid";
import { teamMembers, domainDescriptions } from "../../data/teamData";

export default function EventsAndCompetitions({ members }) {
    return (
        <TeamGrid
            sectionTitle="Events And Competitions"
            members={members}
            description={domainDescriptions.eventsAndCompetition}
        />
    )
}