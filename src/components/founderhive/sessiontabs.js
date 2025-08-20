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
  AlertCircle,
} from 'lucide-react';
import AnimatedSection from '../homeComponents/animatedSection';

export default function SessionTabs({ sessionsData }) {
  // Null check for sessionsData
  if (!sessionsData || !Array.isArray(sessionsData) || sessionsData.length === 0) {
    return (
      <AnimatedSection className="w-full flex flex-col items-center mt-9 font-sans">
        <section className="px-4 sm:px-6 lg:px-10 py-20 text-white w-full">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/60 to-black/50 rounded-3xl border border-purple-500/20 p-8 md:p-12 text-center">
              <AlertCircle className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-4">
                No Sessions Available
              </h2>
              <p className="text-lg text-purple-200">
                We're currently preparing our upcoming sessions. Please check back soon for updates!
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    );
  }

  const [activeTab, setActiveTab] = useState(sessionsData[0]?.city?.toLowerCase() || '');
  
  // Find active session data based on selected city
  const data = sessionsData.find(session => session?.city?.toLowerCase() === activeTab);
  
  // If no data found, fallback to first session
  const sessionData = data || sessionsData[0];
  
  // Default itinerary if none provided
  const itinerary = sessionData?.itinerary || [
    { title: 'Opening & Welcome', duration: '10', icon: Group },
    { title: 'Guided Group Discussion', duration: '40', icon: Star },
    { title: 'Founder Simulation/Breakout Groups', duration: '40', icon: Lightbulb },
    { title: 'Closing Reflections', duration: '10', icon: Award },
  ];

  return (
    <AnimatedSection className="w-full flex flex-col items-center mt-9 font-sans">
      <section className="px-4 sm:px-6 lg:px-10 py-20 text-white w-full">
        <div className="max-w-6xl mx-auto space-y-14">
          {/* Tab Buttons */}
          <div className="flex justify-center">
            <div className="bg-purple-900/40 p-2 sm:p-3 rounded-full flex flex-wrap gap-3 border border-purple-600/20">
              {sessionsData.map((session, index) => (
                <button
                  key={session?.id || index}
                  onClick={() => setActiveTab(session?.city?.toLowerCase() || '')}
                  className={`px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold capitalize text-base sm:text-lg transition-all duration-200 ${
                    activeTab === session?.city?.toLowerCase()
                      ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md'
                      : 'text-purple-200 hover:bg-purple-800/40'
                  }`}
                >
                  {session?.city || `Session ${index + 1}`}
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
                  {sessionData?.city || 'Session'} Session
                </h2>

                <div className="space-y-3 text-base sm:text-lg text-purple-100">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span>
                      {sessionData?.date 
                        ? new Date(sessionData.date).toLocaleDateString() 
                        : 'Date TBD'
                      }
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>{sessionData?.venue || 'Venue TBD'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span>{sessionData?.registrations || 0} Registrations</span>
                  </div>
                </div>
              </div>

              {/* Mentor Card */}
              <div className="bg-purple-900/30 border border-purple-500/20 rounded-2xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-200 mb-2">Featured Mentor</h3>
                <h4 className="text-xl sm:text-2xl font-bold">
                  {sessionData?.mentor_name || 'TBD'}
                </h4>
                <p className="text-purple-300 text-base sm:text-lg mb-2">
                  {sessionData?.mentor_role || 'Role TBD'}
                </p>
                <p className="text-sm sm:text-base text-purple-100">
                  {sessionData?.mentor_bio || 'Bio information coming soon...'}
                </p>
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
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl border border-purple-500/10 hover:border-purple-500/30 hover:scale-[1.05] transition-transform duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <h4 className="font-semibold text-base sm:text-lg">
                          {item.title || 'Session Activity'}
                        </h4>
                      </div>
                      <div className="flex items-center text-purple-300 text-sm sm:text-base whitespace-nowrap">
                        <Clock className="w-4 h-4 mr-1 shrink-0" />
                        {item.duration || '0'} min
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