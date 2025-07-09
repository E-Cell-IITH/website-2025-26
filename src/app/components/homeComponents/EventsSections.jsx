"use client";

import { useState } from "react";

const events = [
  {
    id: "E-SUMMIT",
    title: "E-SUMMIT",
    description:
    `
    E-Summit is the flagship event of E-Cell IITH which aims to bring early entrepreneurs, students, corporates, venture capitalists and start-ups with burgeoning ideas from all over the country to one platform to share their entrepreneur ventures and wisdom.\n\n
    This summit provides a medium for healthy discussions and inculcates an entrepreneurial mindset into minds through a plethora of events like debates and panel discussions. We aim to provide a competitive environment for start-ups via events like Elevator Pitch, Pitch Showdown and many more events to commemorate the spirit of entrepreneurship
    `
  },
  {
    id: "START-UP FAIR",
    title: "START-UP FAIR",
    description:
      "Start-Up Fair connects budding entrepreneurs with investors and industry experts, creating a fertile ground for networking and funding opportunities.",
  },
  {
    id: "E-NETWORKING",
    title: "E-NETWORKING",
    description:
      "E-Networking facilitates meaningful interactions among entrepreneurs, mentors, and professionals to foster collaboration and knowledge sharing.",
  },
  {
    id: "POWER TALKS",
    title: "POWER TALKS & PANEL DISCUSSIONS",
    description:
      "Engage with industry leaders through insightful power talks and panel discussions covering diverse entrepreneurial topics.",
  },
  {
    id: "CAMPUS AMBASSADOR",
    title: "CAMPUS AMBASSADOR PROGRAM",
    description:
      "Join our Campus Ambassador Program to become the face of E-Cell at your institute and promote the spirit of entrepreneurship.",
  },
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  return (
    <main className="min-h-screen bg-black text-white flex items-start justify-center p-16 m-10">
      <div className="flex w-full max-w-6xl">
        {/* Left side */}
        <div className="w-1/3">
          <h1 className="text-6xl font-bold text-blue-400 mb-8">EVENTS</h1>
          <h2 className="text-3xl font-extrabold mb-4">{selectedEvent.title}</h2>
          <div className="flex flex-col space-y-4 mr-0">
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className={`text-xl px-4 py-2 rounded transition relative text-left
                  ${
                    selectedEvent.id === event.id
                      ? "hover:cursor-pointer rounded-full"
                      : "hover:cursor-pointer rounded-full"
                  }`}
              >
                {event.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="w-2/3 pl-16 flex flex-col justify-center">
          <p className="text-lg leading-relaxed max-w-2xl">
            {selectedEvent.description}
          </p>
        </div>
      </div>
    </main>
  );
}
