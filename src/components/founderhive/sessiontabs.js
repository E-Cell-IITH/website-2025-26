'use client';

import { useState } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Users as Group,
  Star,
  Lightbulb,
  Award,
} from 'lucide-react';
import AnimatedSection from '../homeComponents/animatedSection';

const sessions = {
  bengaluru: {
    date: '2 February 2025',
    venue: 'Tea Villa Cafe, Jayanagar',
    registrations: 15,
    mentor: {
      name: 'Ojas Ulhas Dighe',
      role: 'CTO & Co-founder of FinE',
      bio: `Chief Technology Officer and Co-founder of FinE (Financial Empowerment for Everyone), 
      leading engineering initiatives focused on AI, machine learning, and data analytics. 
      With prior experience at Salesforce and Morgan Stanley.`,
    },
  },
  hyderabad: {
    date: '18 January 2025',
    venue: 'Sage Farm Cafe, Jubilee Hills',
    registrations: 9,
    mentor: {
      name: 'Akhil Gabbeta',
      role: 'CEO of Hackerinthehouse',
      bio: `Indian entrepreneur and cybersecurity consultant, serving as Chairperson and CEO of HITH Technologies. 
      Recognized globally for contributions to cybersecurity innovation and fostering cyber-aware ecosystem.`,
    },
  },
};

const itinerary = [
  { title: 'Opening & Welcome', duration: '10 min', icon: Group },
  { title: 'Guided Group Discussion', duration: '40 min', icon: Star },
  { title: 'Founder Simulation/Breakout Groups', duration: '40 min', icon: Lightbulb },
  { title: 'Closing Reflections', duration: '10 min', icon: Award },
];

export default function SessionTabs() {
  const [activeTab, setActiveTab] = useState('bengaluru');
  const data = sessions[activeTab];

  return (
    <AnimatedSection className="w-full flex flex-col items-center mt-9 font-sans">
      <section className="px-4 sm:px-6 lg:px-10 py-20 text-white w-full">
        <div className="max-w-6xl mx-auto space-y-14">
          {/* Tab Buttons */}
          <div className="flex justify-center">
            <div className="bg-purple-900/40 p-2 sm:p-3 rounded-full flex flex-wrap gap-3 border border-purple-600/20">
              {Object.keys(sessions).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold capitalize text-base sm:text-lg transition-all duration-200 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md'
                      : 'text-purple-200 hover:bg-purple-800/40'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Session Details Grid */}
          <div className="bg-gradient-to-br from-gray-900/60 to-black/50 rounded-3xl border border-purple-500/20 p-5 sm:p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
            {/* Left Column */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-4">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Session
                </h2>

                <div className="space-y-3 text-base sm:text-lg text-purple-100">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span>{data.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>{data.venue}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span>{data.registrations} Registrations</span>
                  </div>
                </div>
              </div>

              {/* Mentor Card */}
              <div className="bg-purple-900/30 border border-purple-500/20 rounded-2xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-200 mb-2">Featured Mentor</h3>
                <h4 className="text-xl sm:text-2xl font-bold">{data.mentor.name}</h4>
                <p className="text-purple-300 text-base sm:text-lg mb-2">{data.mentor.role}</p>
                <p className="text-sm sm:text-base text-purple-100">{data.mentor.bio}</p>
              </div>
            </div>

            {/* Right Column - Itinerary */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Session Itinerary
              </h3>

              <div className="space-y-5">
                {itinerary.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl border border-purple-500/10 hover:border-purple-500/30 hover:scale-[1.02] transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-base sm:text-lg">{item.title}</h4>
                      </div>
                      <div className="flex items-center text-purple-300 text-sm sm:text-base whitespace-nowrap">
                        <Clock className="w-4 h-4 mr-1 shrink-0" />
                        {item.duration}
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
