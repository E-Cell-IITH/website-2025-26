"use client";

import { useState } from "react";

const events = [
  {
    id: "E-SUMMIT",
    title: "E-SUMMIT",
    description: `
    E-Summit is the flagship event of E-Cell IITH which aims to bring early entrepreneurs, students, corporates, venture capitalists and start-ups with burgeoning ideas from all over the country to one platform to share their entrepreneur ventures and wisdom.\n\n
    This summit provides a medium for healthy discussions and inculcates an entrepreneurial mindset into minds through a plethora of events like debates and panel discussions. We aim to provide a competitive environment for start-ups via events like Elevator Pitch, Pitch Showdown and many more events to commemorate the spirit of entrepreneurship
    `,
  },
  {
    id: "START-UP FAIR",
    title: "START-UP FAIR",
    description: `An initiative to serve as a platform at IIT Hyderabad for bringing together budding entrepreneurs, venture capitalists, investors, and start-ups. It creates a networking hub for people from various domains by involving corporations, working professionals, and students of IIT Hyderabad and across the nation at our very own institute. We aim to promote entrepreneurial spirit among students of IIT Hyderabad with this event.`,
  },
  {
    id: "E-NETWORKING",
    title: "E-NETWORKING",
    description: `We at E-Cell IIT Hyderabad firmly believe in growing together. E-Networking aims to provide a bridge to all the E-Cells in our country where they can communicate, learn and solve problems together. Currently, the E-Networking family consists of 52 E-Cells. The official meeting of all the member E-Cells is known as the E-Connect. In E-Connect, fellow E-Cell members can share their concerns, pitch initiatives, and help other E-Cells solve their problems.`,
  },
  {
    id: "POWER TALKS",
    title: "POWER TALKS & PANEL DISCUSSIONS",
    description: `E-Summit brings a series of talks and panel discussions from the best minds in business and entrepreneurship, from the top-tier leagues, and question the most critical issues. We conduct power talk sessions by some of the most esteemed and experienced personalities of the field- ranging from entrepreneurs to influencers throughout the year. The sessions are interactive as well as entertaining.`,
  },
  {
    id: "CAMPUS AMBASSADOR",
    title: "CAMPUS AMBASSADOR PROGRAM",
    description: `ECell of IIT Hyderabad hosts a Campus Ambassador program for students outside of IIT Hyderabad looking to inculcate entrepreneurial ideas within them and spread such ideas at their campus. This program usually starts around 1.5-2 months before the E-Summit. In 2022, we had around 800 Campus Ambassadors as a part of the ECell IIT Hyderabad family. Each CA has a chance to learn effective communication through engaging events and various tasks. You will be awarded points based on the events and games you complete. These points decide your position on the overall leaderboard. The toppers of the leaderboard win exciting prizes!`,
  },
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  return (
    <main className="min-h-screen bg-black text-white flex items-start justify-center px-4 md:px-8 lg:px-16 py-10">
      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        {/* Left side */}
        <div className="w-full md:w-1/3 mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-8">EVENTS</h1>
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold mb-4">{selectedEvent.title}</h2>
          <div className="flex flex-col space-y-4">
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className={`text-base sm:text-lg md:text-xl pr-4 py-2 rounded transition relative text-left
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
        <div className="w-full md:w-2/3 md:pt-[100px] md:pl-16 flex flex-col justify-center">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl animate-slide-in-left-limited whitespace-pre-line">
            {selectedEvent.description}
          </p>
        </div>
      </div>
    </main>
  );
}
