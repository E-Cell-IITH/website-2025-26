import ProfileCard from "./profileCard"

export default function OC(){
    return (
        <main className="min-h-screen bg-black text-white px-4 py-12 ">
            <div className="max-w-4xl mx-auto">
                <div key="Overall Coordinator"  className="flex flex-col items-center">
                    <h2 className="text-5xl font-bold mb-4 text-center">
                        Overall Coordinator
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <ProfileCard 
                            key="Overall Coordinator"
                            name="Tim Cook"
                            photoSrc="/timCook.jpg"
                            gmailAddress="thisIsTimCooking@gmail.com"
                            linkedinURL="https://www.linkedin.com/in/cooktim/?originalSubdomain=uk"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}