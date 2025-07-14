import TeamGrid from "./teamgrid";

export default function Operations(){
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
            sectionTitle="Operations Managers"
            members={members}
        />
    )
}