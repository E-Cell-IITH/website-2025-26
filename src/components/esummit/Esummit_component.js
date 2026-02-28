"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Users, Calendar, Trophy, ChevronDown } from "lucide-react";

function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${className}`}
    >
      {children}
    </div>
  );
}

const events = [
  {
    id: "startup-school",
    icon: <Calendar className="w-6 h-6 text-purple-400" />,
    name: "Startup School '26",
    tagline: "Where Founders Share Their Playbook",
    description:
      "Startup School '26 is a curated series of high-impact talks designed to give students and aspiring founders real, practical insights into building startups. From ideation and MVP building to funding, legal frameworks, D2C branding, and AI-driven ventures — this series brings experienced founders and industry leaders to share actionable lessons from their journeys.",
    timeline: [
      {
        date: "14th March (Saturday)",
        items: [
          "Where do Startup Ideas Come From? — Prakash Balasubramanian, CEO, 18startup",
          "Building an MVP and Team Formation? — Vikram Prabhakar, Co-founder, Recykal",
        ],
      },
      {
        date: "15th March (Sunday)",
        items: [
          "Don't Get Sued: Startup Legalities — Sridhar Subramanian, Co-founder, Startup Movers",
          "How to Get Funded? — Draper Startup House",
          "AI and Entrepreneurship — Kashyap Kompella, Founder, RPA2AI Research",
        ],
      },
    ],
    details: [
      { icon: <MapPin className="w-4 h-4" />, label: "IIT Hyderabad" },
      { icon: <Users className="w-4 h-4" />, label: "Open to all" },
    ],
    cta: null,
  },
  {
    id: "startup-fair",
    icon: <Trophy className="w-6 h-6 text-purple-400" />,
    name: "Startup Fair '26",
    tagline: "Live Startup Showcase & Investment Arena",
    description:
      "Startup Fair '26 is the dynamic exhibition arena of E-Summit '26 where innovative startups showcase their products, engage with IIT Hyderabad's student community, and interact directly with visiting VCs and incubators. Featuring a live Investment Game, this platform blends exposure, competition, and networking into one high-energy startup marketplace.",
    timeline: [
      {
        date: "For Startups",
        items: [
          "Showcase your product to IIT Hyderabad's students and faculty",
          "Interact directly with visiting VCs and on-campus incubators",
          "Compete in a Live Investment Game where the IITH fraternity invests virtual money in your startup",
          "Top startups earn a chance to participate in Fetching Fortunes (Pitching Competition)",
          "Opportunity to be featured on ZEE TV's Ideabaaz",
        ],
      },
      {
        date: "For Students",
        items: [
          "Meet cutting-edge startups from across the country",
          "Interact directly with founders",
          "Become an investor: Receive virtual money and invest in promising startups",
          "Help decide the winner of Startup Fair",
          "Discover internships, projects, and networking opportunities",
        ],
      },
    ],
    details: [
      { icon: <MapPin className="w-4 h-4" />, label: "IIT Hyderabad, Sangareddi" },
      { icon: <Users className="w-4 h-4" />, label: "Startups & Students" },
    ],
    cta: { label: "Register Now", href: "https://forms.gle/cmcfW8qRTgMYX4a6A" },
  },
  {
    id: "ceo-summit",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    name: "CEO Summit '26",
    tagline: "A Strategy & Problem-Solving Challenge",
    description:
      "CEO Summit '26 is a flagship live problem-solving challenge at E-Summit '26 where student teams work directly on real startup challenges and present their solutions to founders. Designed to simulate real-world strategic decision-making, the competition tests structured thinking, prioritisation, and execution under constraints — just like a startup strategy team or early founding hire.",
    timeline: [
      {
        date: "March 3 — Round 1: Founder Thinking Challenge",
        items: [
          "Respond (max 600 words) to a real startup scenario",
          "Identify the one key problem to prioritise (Product / Market / Execution)",
          "Propose two actions to take in the next 30 days",
          "State one action to avoid and justification",
        ],
      },
      {
        date: "March 5–13 — Stage 2: Startup Engagement Phase",
        items: [
          "Shortlisted teams paired with partner startups",
          "Assigned a real, non-confidential business problem to analyse and solve",
        ],
      },
      {
        date: "March 14 — Stage 3: Final Presentation",
        items: [
          "Teams pitch solutions directly to startup founders on campus",
          "One winning team selected per startup",
        ],
      },
    ],
    details: [
      { icon: <MapPin className="w-4 h-4" />, label: "IIT Hyderabad, Sangareddi, Telangana" },
      { icon: <Users className="w-4 h-4" />, label: "2–4 Members · UG & PG (All Streams)" },
      { icon: <Calendar className="w-4 h-4" />, label: "Mode: Offline" },
      { icon: <Calendar className="w-4 h-4" />, label: "Deadline: 15 Feb 2026, 02:37 PM IST" },
    ],
    cta: {
      label: "Register Now",
      href: "https://unstop.com/competitions/ceo-summit-26-iit-hyderabad-1639441",
    },
  },
  {
    id: "fetching-fortunes",
    icon: <Trophy className="w-6 h-6 text-purple-400" />,
    name: "Fetching Fortunes '26",
    tagline: "Startup Pitching Arena · ₹10,00,000 Prize Pool",
    description:
      "Fetching Fortunes '26 is the flagship startup pitching competition of E-SUMMIT '26, the 6th Entrepreneurial Summit of IIT Hyderabad. In collaboration with Ideabaaz, the event provides high-potential startups a national platform to pitch before a distinguished jury of investors and industry leaders. Top-performing startups receive Fast-Track Entry to the Ideabaaz Final Round, creating a direct pathway from campus innovation to national recognition.",
    timeline: [
      {
        date: "March 4 — Round 1: Pitch Deck & Video Submission",
        items: [
          "Submit a Pitch Deck (PDF)",
          "Submit a Pitch Video (Max 7 Minutes, Founder-led preferred)",
        ],
      },
      {
        date: "March 15 — Round 2: Final Pitch Showdown",
        items: [
          "Jury: Ideabaaz Representative, IIT Hyderabad / ITIC Nominees, External Investors",
          "3-minute pitch per startup",
          "7-minute Q&A session",
          "Top 3 startups: Fast-Track Entry to Ideabaaz Final Round",
        ],
      },
    ],
    details: [
      { icon: <MapPin className="w-4 h-4" />, label: "IIT Hyderabad, Sangareddi" },
      { icon: <Users className="w-4 h-4" />, label: "1–5 Members · Offline" },
      { icon: <Calendar className="w-4 h-4" />, label: "15 March 2026" },
      { icon: <Trophy className="w-4 h-4" />, label: "Prize Pool: ₹10,00,000" },
    ],
    cta: {
      label: "Register Now",
      href: "https://unstop.com/competitions/fetching-fortunes-26-e-summit-26-iit-hyderabad-1627472",
    },
  },
];

function EventTile({ event, index }) {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);
  const handleClick = () => setOpen((o) => !o);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`rounded-3xl border cursor-pointer select-none transition-all duration-300
        ${open
          ? "border-purple-500/70 bg-gradient-to-br from-purple-900/30 to-black/60 shadow-[0_0_40px_rgba(168,85,247,0.2)] scale-[1.025]"
          : "border-purple-500/20 bg-gradient-to-br from-gray-900/60 to-black/50 hover:border-purple-500/50 hover:shadow-[0_0_24px_rgba(168,85,247,0.14)] hover:scale-[1.015]"
        }`}
    >
      <div className="flex items-center justify-between gap-4 p-6 md:p-7">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
            {event.icon}
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent leading-snug">
              {event.name}
            </h3>
            <p className="text-xs md:text-sm text-purple-300/60 mt-0.5">{event.tagline}</p>
          </div>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-purple-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-7 pb-7 pt-1 space-y-5 border-t border-purple-500/10">
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {event.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {event.details.map((d, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-xs text-purple-200"
                  >
                    <span className="text-purple-400">{d.icon}</span>
                    {d.label}
                  </span>
                ))}
              </div>

              <div>
                <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
                  Timeline
                </p>
                <div className="space-y-4 border-l-2 border-purple-500/30 pl-4">
                  {event.timeline.map((stage, si) => (
                    <div key={si} className="relative">
                      <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-purple-500" />
                      <p className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-1">
                        {stage.date}
                      </p>
                      <ul className="space-y-1">
                        {stage.items.map((item, ii) => (
                          <li key={ii} className="text-sm text-gray-300 leading-relaxed">
                            · {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {event.cta && (
                <div onClick={(e) => e.stopPropagation()}>
                  <a
                    href={event.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white px-7 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-[0_0_14px_rgba(168,85,247,0.45)] hover:shadow-[0_0_22px_rgba(168,85,247,0.7)]"
                  >
                    {event.cta.label} →
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Esummit() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[640px] h-[640px] rounded-full bg-purple-700/10 blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-purple-900/40 border border-purple-500/30 backdrop-blur-sm text-purple-200 text-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          E-Cell IIT Hyderabad &nbsp;·&nbsp; March 13–15, 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold uppercase leading-none animated-gradient-text mb-6"
        >
          E-Summit &apos;26
        </motion.h1>

        <div className="h-px w-28 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8 animate-pulse" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl text-base md:text-lg text-gray-300 leading-relaxed"
        >
          E-Summit is the flagship entrepreneurship festival of E-Cell IIT Hyderabad,
          bringing together students, founders, investors, and industry leaders for talks,
          startup showcases, competitions, and networking. The summit aims to foster
          innovation and strengthen the startup ecosystem by turning ideas into impactful
          ventures.
        </motion.p>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-7 h-7 text-purple-400" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-28">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-3">
            Events
          </h2>
          <p className="text-sm text-purple-300/50 tracking-widest uppercase">
            Hover or tap a tile to explore
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {events.map((event, idx) => (
            <EventTile key={event.id} event={event} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
