import TeamGrid from "./teamgrid";

export default function CrF(){
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
            sectionTitle="Corporate Relations & Finance Managers"
            members={members}
        />
    )
}