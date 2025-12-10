"use client";

import { useEffect, useState } from 'react';

const SponsorshipCard = ({ tier, price, benefits, colorClass, textColor = "text-white", isVisible }) => (
  <div 
    className={`flex flex-col h-full p-[1.25px] bg-gradient-to-br from-purple-500/50 via-purple-400 to-purple-500 rounded-2xl transition-all  transform hover:scale-[1.03] hover:shadow-purple-400/40 hover:shadow-lg group ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}
    style={{
      transitionDuration: isVisible ? '1500ms' : '1000ms'
    }}
  > 
    <div 
      className="flex flex-col flex-1 bg-black rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        transitionDuration: '200ms'
      }}
    >
      <div className={`${colorClass} ${textColor} p-6 text-center border-b border-purple-500/30`}>
        <div className="text-2xl font-bold uppercase tracking-wide">{tier}</div>
        <div className="text-3xl font-bold mt-3">{price}</div>
      </div>  
      <div className="p-6 flex-grow flex flex-col justify-between">
        <ul className="list-none p-0 m-0 space-y-3">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="pl-6 relative text-sm leading-6 text-white/90">
              <span className="absolute left-0 font-bold text-blue-400">✓</span>
              <span dangerouslySetInnerHTML={{ __html: benefit }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Esummit = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate-card]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsVisible((prev) => ({ ...prev, [id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const premiumPackages = [
    {
      tier: "Platinum",
      price: "Rs. 10,10,000",
      colorClass: "bg-gradient-to-r from-gray-500 to-gray-800",
      benefits: [
        "<strong>Includes all Gold Sponsor Benefits</strong>",
        "Title Sponsor for E-SUMMIT '26",
        "Speaking Slot (40 mins)",
        "Participation in 2 Panel Discussions",
        "Ad display on TV screens across campus"
      ]
    },
    {
      tier: "Gold",
      price: "Rs. 7,00,000",
      colorClass: "bg-gradient-to-r from-yellow-400 to-yellow-500",
      benefits: [
        "<strong>Includes all Silver Sponsor Benefits</strong>",
        "Co-Title Sponsor designation",
        "Speaking Slot (20 mins)",
        "Knowledge Presentation / Keynote Session",
        "Participation in 1 Panel Discussion",
        "One-on-One Interaction opportunities",
        "Access to Database of Attendees & Startups"
      ]
    },
    {
      tier: "Silver",
      price: "Rs. 4,00,000",
      colorClass: "bg-gradient-to-r from-gray-500 to-gray-400",
      textColor: "text-white",
      benefits: [
        "<strong>Includes Arena & Competition Benefits</strong>",
        "2 Ad Displays at venue",
        "Logo on Event Branding & Mailers",
        "Comprehensive Social Media Branding"
      ]
    }
  ];

  const eventSponserships = [
    {
      tier: "Arena Sponsor",
      price: "Rs. 3,00,000",
      colorClass: "bg-gradient-to-r from-blue-400 to-blue-500",
      benefits: [
        "<strong>Includes Startup Fair + FoFe + Stakes Benefits</strong>",
        "Branding across all arenas",
        "Logo on stalls, posters, and zone signages",
        "Individual standee in each arena",
        "Stall facilities (2x2 m²)"
      ]
    },
    {
      tier: "Playbook Series",
      price: "Rs. 3,00,000",
      colorClass: "bg-gradient-to-r from-blue-400 to-blue-500",
      benefits: [
        "Title Sponsor rights for Startup Playbook",
        "Keynote session on industry opportunities",
        "Additional Keynote session",
        "Logo on all Startup Playbook collaterals",
        "Branding on digital platforms"
      ]
    },
    {
      tier: "Fetching Fortunes",
      price: "Rs. 2,75,000",
      colorClass: "bg-gradient-to-r from-blue-400 to-blue-500",
      benefits: [
        "Title Sponsor rights for Fetching Fortunes",
        "Keynote session",
        "Logo on certificates & prize cheques",
        "Standee & Banner at venue",
        "Posters across IIT Hyderabad campus",
        "Logo on event goodies",
        "Access to selected startups for investment discussions"
      ]
    },
    {
      tier: "Startup Stakes",
      price: "Rs. 1,25,000",
      colorClass: "bg-gradient-to-r from-blue-400 to-blue-500",
      benefits: [
        "<strong>Includes Startup Fair Benefits</strong>",
        "Logo placement inside virtual investment game"
      ]
    }
  ];

  const standardSponserships = [
    {
      tier: "Competition",
      price: "Rs. 1,00,000",
      colorClass: "bg-gradient-to-r from-blue-400 to-blue-500",
      benefits: [
        "Title Rights for the Startup Competition",
        "Jury panel seat for representative",
        "Logo on pitch templates, certificates & cheques",
        "Branding across competition promotions (Online & Ground)"
      ]
    },
    {
      tier: "FoFe / Startup Fair",
      price: "Rs. 1,00,000 (Each)",
      colorClass: "bg-gradient-to-r from-blue-400 to-blue-500",
      benefits: [
        "Logo & details on Stalls",
        "Posters on Stalls",
        "One individual standee in the Arena",
        "Hospitality support during E-Summit '26",
        "Featured mention in report & social media"
      ]
    }
  ];

  const renderCards = (cards, startIndex) => {
    return cards.map((pkg, idx) => (
      <div
        key={idx}
        id={`card-${startIndex + idx}`}
        data-animate-card
        className="h-full"
      >
        <SponsorshipCard 
          {...pkg} 
          isVisible={isVisible[`card-${startIndex + idx}`]}
        />
      </div>
    ));
  };

  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Header */}
      <div className="relative py-75 px-6 md:px-8 lg:px-16 ">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-9xl font-bold uppercase mb-4   animated-gradient-text">
          E-Summit 26
        </h1>
        <p className="text-xl sm:text-3xl text-gray-300 px-4">Sponsorship Opportunities & Privileges</p>
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-3"></div>
      </div>
      
    <div className="h-1 w-32  bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8 animate-pulse"></div>
      {/* Content */}
        {/* Premium Packages */}
        <div className="mb-20 py-50">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide text-blue-400 mb-12 text-center animated-gradient-text">
            Premium Packages
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {renderCards(premiumPackages, 100)}
          </div>
        </div>

        {/* Event & Arena Sponsorships */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide text-blue-400 mb-12 text-center animated-gradient-text">
            Event & Arena Sponsorships
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {renderCards(eventSponserships, 200)}
          </div>
        </div>

        {/* Standard Sponsorships */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide text-blue-400 mb-12 text-center animated-gradient-text">
            Standard Sponsorships
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {renderCards(standardSponserships, 400)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Esummit;

