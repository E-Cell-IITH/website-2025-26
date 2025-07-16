export default function UpcomingSessions() {
  const sessions = [
    { city: "Bengaluru", date: "5th July 2025" },
    { city: "Hyderabad", date: "To be announced" },
    { city: "Pune", date: "To be announced" },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-purple-500/20 backdrop-blur-sm p-8 md:p-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Upcoming Sessions
              </h2>
              <span className="text-xl font-primary mb-4 ml-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Bengaluru : 5th July 2025</span>
              <span className="text-xl font-primary mb-4 ml-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Hyderabad : To be announced
              </span>
              <span className="text-xl font-primary mb-4 ml-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Pune : To be announced
              </span>
            </div>
        </section>
  );
}
