import TeamGrid from "./src/components/teamComponents/teamgrid";

export default function Marketing(){
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
            sectionTitle="Marketing"
            members={members}
        />
    )
}