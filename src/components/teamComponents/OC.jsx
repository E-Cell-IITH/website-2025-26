import ProfileCard from "./profileCard";

export default function OC() {
  return (
    <main className="bg-black text-white px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            OVERALL HEAD
          </h2>
          <div className="flex justify-center">
            <ProfileCard
              key="Overall Coordinator"
              name="Tim Cook"
              photoSrc="/timCook.jpg"
              gmailAddress="thisIsTimCooking@gmail.com"
              linkedinURL="https://www.linkedin.com/in/cooktim/?originalSubdomain=uk"
              large // <-- optional: used to enlarge photo inside ProfileCard
            />
          </div>
        </div>
      </div>
    </main>
  );
}
