
const SponsorshipCard = ({ tier, price, benefits, colorClass, textColor = "text-white" }) => (
  <div className="bg-white rounded-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
    <div className={`${colorClass} ${textColor} p-5 text-center`}>
      <div className="text-xl font-bold uppercase">{tier}</div>
      <div className="text-2xl font-bold mt-1">{price}</div>
    </div>
    <div className="p-5 flex-grow">
      <ul className="list-none p-0 m-0">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="mb-2.5 pl-5 relative text-sm leading-6">
            <span className="absolute left-0 font-bold" style={{ color: '#0077b6' }}>✓</span>
            <span dangerouslySetInnerHTML={{ __html: benefit }} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Esummit = () => {
  const premiumPackages = [
    {
      tier: "Platinum",
      price: "Rs. 10,10,000",
      colorClass: "bg-gray-700",
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
      colorClass: "bg-yellow-600",
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
      colorClass: "bg-gray-300",
      textColor: "text-gray-800",
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
      benefits: [
        "Logo & details on Stalls",
        "Posters on Stalls",
        "One individual standee in the Arena",
        "Hospitality support during E-Summit '26",
        "Featured mention in report & social media"
      ]
    }
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: '#f4f4f4', color: '#333' }}>
      {/* Header */}
      <br></br>
      <br></br>
      <div style={{ backgroundColor: '#87CEEB', padding: '40px 20px', textAlign: 'center', color: '#000', borderBottom: '4px solid #0077b6' }}>
        <h1 className="m-0 text-5xl font-bold  uppercase " style={{  letterSpacing: '2px' }}>
          E-Summit '26
        </h1>
        <p className="mt-2.5 mb-0 text-lg font-medium">
          Sponsorship Opportunities & Privileges
        </p>
      </div>

      {/* Premium Packages */}
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="w-full text-center text-2xl uppercase" style={{ margin: '40px 0 20px', color: '#444', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
          Premium Packages
        </h2>
        <div className="grid gap-5 mb-0" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {premiumPackages.map((pkg, idx) => (
            <SponsorshipCard key={idx} {...pkg} />
          ))}
        </div>

        {/* Event & Arena Sponsorships */}
        <h2 className="w-full text-center text-2xl uppercase" style={{ margin: '40px 0 20px', color: '#444', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
          Event & Arena Sponsorships
        </h2>
        <div className="grid gap-5 mb-0 " style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {eventSponserships.map((pkg, idx) => (
            <SponsorshipCard 
              key={idx} 
              {...pkg} 
              colorClass="bg-blue-400"
            />
          ))}
        </div>

        {/* Standard Sponsorships */}
        <h2 className="w-full text-center text-2xl uppercase" style={{ margin: '40px 0 20px', color: '#444', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
          Standard Sponsorships
        </h2>
        <div className="grid gap-5 mb-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {standardSponserships.map((pkg, idx) => (
            <SponsorshipCard 
              key={idx} 
              {...pkg} 
              colorClass="bg-blue-400"
            />
          ))}
        </div>
      </div>
      <br></br>
    </div>
    
  );
};

export default Esummit;