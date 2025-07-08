import Card from "./card";

export default function OurMottoSection(){
    return (
        <section className="w-full flex flex-col items-center mt-9">
            <h2 className="text-2xl md:text-4xl font-bold mb-10">OUR MOTTO</h2>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                <Card 
                    src = "/ourMotoThink.webp"
                    alt = "Think Image"
                    title="THINK"
                    text = "Successful Entrepreneurs are the ones who are great at thinking out solutions. Through various hackathons and workshop events, we promote the culture of thinking to prepare students for future entrepreneurial challenges."
                />

                <Card 
                    src="/ourMotoBuild.webp"
                    alt="Build Image"
                    title="BUILD"
                    text="All great startups are started by people who have a knack at building products. E-Cell IITH organizes events like Idea Validation camps to help bring out the best of builders among aspiring entrepreneurs"
                />
                <Card 
                    src="/ourMotoInspire.webp"
                    alt="Inspire Image"
                    title="INSPIRE"
                    text="The key to stick through tough times and not giving up is to be relentlessly inspired to take on challenges. By organizing various talks by successful entrepreneurs, E-Cell IITH aims to inspire students to take the path of entrepreneurship."
                />
            </div>
        </section>
    )
}