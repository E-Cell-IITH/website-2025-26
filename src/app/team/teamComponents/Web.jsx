import TeamGrid from "./teamgrid";

export default function Web(){
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
            sectionTitle="Web"
            members={members}
        />
    )
}