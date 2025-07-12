export default function UpcomingSessions() {
  const sessions = [
    { city: "Bengaluru", date: "5th July 2025" },
    { city: "Hyderabad", date: "To be announced" },
    { city: "Pune", date: "To be announced" },
  ];

  return (
    <section className="px-4 py-16 md:py-24 text-white">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
          Upcoming Sessions
        </h2>

        <ul className="space-y-4 pl-4 md:pl-8">
          {sessions.map((session, idx) => (
            <li
              key={idx}
              className="text-lg md:text-2xl text-purple-200 leading-relaxed"
            >
              <span className="text-white font-medium">{session.city}</span> : {session.date}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
