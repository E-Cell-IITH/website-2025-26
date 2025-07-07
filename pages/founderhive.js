"use client"
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Calendar, MapPin, Users, Clock, ChevronDown, Star, Lightbulb, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FoundersHivePage = () => {
  const [activeTab, setActiveTab] = useState('bengaluru');
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // GSAP Context for cleanup
    const ctx = gsap.context(() => {
      // Hero section animations
      const tl = gsap.timeline();
      
      tl.fromTo('.hero-title', 
        { 
          opacity: 0, 
          y: 100, 
          scale: 0.8 
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 1.5, 
          ease: 'power3.out' 
        }
      )
      .fromTo('.hero-line', 
        { 
          width: 0, 
          opacity: 0 
        },
        { 
          width: '8rem', 
          opacity: 1, 
          duration: 1, 
          ease: 'power2.out' 
        }, '-=0.5'
      )
      .fromTo('.hero-subtitle', 
        { 
          opacity: 0, 
          y: 50 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power2.out' 
        }, '-=0.3'
      )
      .fromTo('.hero-button', 
        { 
          opacity: 0, 
          scale: 0.8 
        },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          ease: 'back.out(1.7)' 
        }, '-=0.2'
      )
      .fromTo('.hero-badge', 
        { 
          opacity: 0, 
          y: 30 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power2.out' 
        }, '-=0.2'
      );

      // Scroll-triggered animations for sections
      gsap.utils.toArray('.animate-section').forEach((section, index) => {
        gsap.fromTo(section,
          {
            opacity: 0,
            y: 80,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Stagger animations for cards
      gsap.utils.toArray('.stagger-card').forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 60,
            rotationX: 45
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
          }
        );
      });

      // Gallery animations
      gsap.utils.toArray('.gallery-item').forEach((item, index) => {
        gsap.fromTo(item,
          {
            opacity: 0,
            scale: 0.8,
            rotationY: 45
          },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.05
          }
        );
      });

      // Floating animation for background elements
      gsap.to('.floating-bg-1', {
        y: -30,
        x: 20,
        rotation: 5,
        duration: 4,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
      });

      gsap.to('.floating-bg-2', {
        y: 20,
        x: -15,
        rotation: -3,
        duration: 5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1
      });

      gsap.to('.floating-bg-3', {
        y: -15,
        x: 10,
        rotation: 2,
        duration: 6,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Tab change animation
  useEffect(() => {
    gsap.fromTo('.tab-content',
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
    );
  }, [activeTab]);

  const sessions = {
    bengaluru: {
      date: '2 February 2025',
      venue: 'Tea Villa Cafe, Jayanagar',
      registrations: 15,
      mentor: {
        name: 'Ojas Ulhas Dighe',
        role: 'CTO & Co-founder of FinE',
        bio: 'Chief Technology Officer and Co-founder of FinE (Financial Empowerment for Everyone), leading engineering initiatives focused on AI, machine learning, and data analytics. With prior experience at Salesforce and Morgan Stanley.'
      },
      startups: [
        'A social ticketing platform for events, concerts, and gigs that integrates WhatsApp-like features',
        'An AI-driven social platform that connects users based on shared music preferences'
      ]
    },
    hyderabad: {
      date: '18 January 2025',
      venue: 'Sage Farm Cafe, Jubilee Hills',
      registrations: 9,
      mentor: {
        name: 'Akhil Gabbeta',
        role: 'CEO of Hackerinthehouse',
        bio: 'Indian entrepreneur and cybersecurity consultant, serving as Chairperson and CEO of HITH Technologies. Recognized globally for contributions to cybersecurity innovation and fostering cyber-aware ecosystem.'
      },
      startups: [
        'A platform that connects new startup founders directly with industry experts',
        'A healthcare platform offering access to high-cost medical equipment at reduced rates'
      ]
    }
  };

  const itinerary = [
    { title: 'Opening & Welcome', duration: '10 min', icon: Users },
    { title: 'Guided Group Discussion', duration: '40 min', icon: Star },
    { title: 'Founder Simulation/Breakout Groups', duration: '40 min', icon: Lightbulb },
    { title: 'Closing Reflections', duration: '10 min', icon: Award }
  ];

  return (
    <>
      <Head>
        <title>Founders Hive - E-Cell IIT Hyderabad</title>
        <meta name="description" content="Exclusive networking sessions bringing together top student founders, experienced entrepreneurs, and mentors in intimate settings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <div ref={heroRef} className="min-h-screen bg-black text-white overflow-hidden font-['Montserrat']">
        {/* Enhanced Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="floating-bg-1 absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
            <div className="floating-bg-2 absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="floating-bg-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-700/15 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative z-10">
          {/* Enhanced Hero Section */}
          <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
            <div className="text-center max-w-6xl mx-auto">
              <div className="hero-title">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
                  Founders Hive
                </h1>
                <div className="hero-line h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
              </div>
              
              <div className="hero-subtitle space-y-6">
                <div className="hero-button">
                  <button 
                    className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-4 sm:px-12 sm:py-5 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 mb-6"
                    onClick={() => window.open("https://forms.gle/4eZC61f8fVBicd428", "_blank")}
                  >
                    Register Here
                  </button>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed px-4">
                  Exclusive networking sessions bringing together top student founders,<br className="hidden sm:block" />
                  experienced entrepreneurs, and mentors in intimate settings
                </p>
              </div>

              <div className="hero-badge mt-8">
                <div className="inline-flex items-center px-4 py-3 sm:px-6 bg-gradient-to-r from-purple-900/50 to-purple-800/50 rounded-full border border-purple-500/30 backdrop-blur-sm">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-2" />
                  <span className="text-sm sm:text-base text-purple-200">E-Cell IIT Hyderabad</span>
                </div>
              </div>

              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
              </div>
            </div>
          </section>

          {/* Enhanced Sessions Tabs */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 animate-section">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center mb-8 sm:mb-12">
                <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 p-2 rounded-full border border-purple-500/30 backdrop-blur-sm">
                  {Object.keys(sessions).map((city) => (
                    <button
                      key={city}
                      onClick={() => setActiveTab(city)}
                      className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 capitalize font-semibold text-sm sm:text-base ${
                        activeTab === city
                          ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/25'
                          : 'text-purple-200 hover:text-white hover:bg-purple-800/30'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              {/* Enhanced Session Details */}
              <div className="tab-content bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-purple-500/20 backdrop-blur-sm p-6 sm:p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left Column - Session Info */}
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Session
                      </h2>
                      
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center text-gray-300 text-sm sm:text-base">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-3 flex-shrink-0" />
                          <span>{sessions[activeTab].date}</span>
                        </div>
                        <div className="flex items-center text-gray-300 text-sm sm:text-base">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-3 flex-shrink-0" />
                          <span>{sessions[activeTab].venue}</span>
                        </div>
                        <div className="flex items-center text-gray-300 text-sm sm:text-base">
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-3 flex-shrink-0" />
                          <span>{sessions[activeTab].registrations} Registrations</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Mentor Info */}
                    <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-2xl p-4 sm:p-6 border border-purple-500/20">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 text-purple-200">Featured Mentor</h3>
                      <h4 className="text-lg sm:text-xl font-semibold mb-2">{sessions[activeTab].mentor.name}</h4>
                      <p className="text-purple-300 mb-3 text-sm sm:text-base">{sessions[activeTab].mentor.role}</p>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{sessions[activeTab].mentor.bio}</p>
                    </div>
                  </div>

                  {/* Right Column - Enhanced Itinerary */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      Session Itinerary
                    </h3>
                    
                    <div className="space-y-3 sm:space-y-4">
                      {itinerary.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <div 
                            key={index}
                            className="stagger-card flex items-center p-3 sm:p-4 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                          >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-white text-sm sm:text-base">{item.title}</h4>
                            </div>
                            <div className="flex items-center text-purple-300 flex-shrink-0">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              <span className="text-xs sm:text-sm">{item.duration}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Upcoming Sessions */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 animate-section">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-purple-500/20 backdrop-blur-sm p-6 sm:p-8 md:p-12">
                <div className="flex flex-col gap-4 sm:gap-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    Upcoming Sessions
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    <span className="block text-lg sm:text-xl ml-4 sm:ml-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      Bengaluru : 5th July 2025
                    </span>
                    <span className="block text-lg sm:text-xl ml-4 sm:ml-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      Hyderabad : To be announced
                    </span>
                    <span className="block text-lg sm:text-xl ml-4 sm:ml-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      Pune : To be announced
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Startup Concepts */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 animate-section">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Innovative Startup Concepts
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {sessions[activeTab].startups.map((startup, index) => (
                  <div 
                    key={index}
                    className="stagger-card bg-gradient-to-br from-purple-900/20 to-black/20 rounded-2xl p-6 sm:p-8 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                      <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{startup}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Gallery Section */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 animate-section">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Event Gallery
              </h2>
              <p className="text-center text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
                Capturing moments of innovation, collaboration, and entrepreneurial spirit from our Founders Hive sessions
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                {[
                  '/ccs photos/ccs-1.jpeg',
                  '/ccs photos/ccs-2.jpeg', 
                  '/ccs photos/ccs-3.jpeg',
                  '/ccs photos/ccs-4.jpeg',
                  '/ccs photos/ccs-7.jpeg',
                ].map((image, index) => (
                  <div 
                    key={index}
                    className="gallery-item group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-900/20 to-black/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 cursor-pointer aspect-square"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    
                    <img 
                      src={`/${image}`}
                      alt={`Founders' Hive Event ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = `linear-gradient(135deg, 
                          ${index % 3 === 0 ? '#6B46C1' : index % 3 === 1 ? '#7C3AED' : '#8B5CF6'}20, 
                          ${index % 3 === 0 ? '#4C1D95' : index % 3 === 1 ? '#5B21B6' : '#6D28D9'}40)`;
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Enhanced corner accents */}
                    <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-t-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-b-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced Gallery Stats */}
              <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { number: '2', label: 'Cities Covered' },
                  { number: '24', label: 'Total Participants' },
                  { number: '100%', label: 'Success Rate' }
                ].map((stat, index) => (
                  <div key={index} className="stagger-card text-center p-4 sm:p-6 bg-gradient-to-br from-purple-900/20 to-black/20 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-300 mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Footer */}
          <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-purple-500/20 animate-section">
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6"></div>
                <p className="text-gray-400 mb-4 text-sm sm:text-base px-4">
                  Creating collaborative environments for the next generation of entrepreneurs
                </p>
                <p className="text-purple-300 font-semibold text-sm sm:text-base">E-Cell IIT Hyderabad</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default FoundersHivePage;