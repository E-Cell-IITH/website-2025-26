import TeamGrid from "./teamgrid";

export default function EventsAndCompetitions(){
    const members = [
        {
            name:"Tim Cook",
            imgSrc:"/timCook.jpg"
        },
        {
            name:"Tim Cook",
            imgSrc:"/timCook.jpg"
        },
        {
            name:"Tim Cook",
            imgSrc:"/timCook.jpg"
        },
        {
            name:"Tim Cook",
            imgSrc:"/timCook.jpg"
        },
        {
            name:"Tim Cook",
            imgSrc:"/timCook.jpg"
        },
    ]
    return (
        <TeamGrid 
            sectionTitle="EventsAndCompetitions"
            members={members}
        />
    )
}