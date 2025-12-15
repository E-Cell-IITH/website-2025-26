'use client';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function PartnersPage({ partnersData }) {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="text-center max-w-6xl mx-auto px-6">
          <h1 className="custom-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-6 bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Our Partners
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
            Collaborating with excellence to empower innovation
            <br />
            and entrepreneurship at IIT Hyderabad
          </p>

          <div className="inline-flex items-center px-6 py-3 bg-purple-900/30 rounded-full border border-purple-500/30">
            <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300">E-Cell IIT Hyderabad</span>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {partnersData && partnersData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnersData.map((partner, idx) => (
              <div
                key={partner?.id || idx}
                className="partner-card bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl transition-all duration-300 overflow-hidden border border-purple-500/20 group hover:border-purple-500/60 hover:shadow-purple-500/20"
              >
                {/* Partner Image */}
                {partner?.images && partner.images.length > 0 && partner.images[0]?.image?.url ? (
                  <div className="relative w-full h-[300px] bg-gradient-to-br from-purple-950/30 to-black overflow-hidden">
                    <img
                      src={partner.images[0].image.url}
                      alt={partner?.name || 'Partner'}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center text-7xl">
                            🤝
                          </div>
                        `;
                      }}
                    />
                  </div>
                ) : (
                  <div className="h-56 bg-gradient-to-br from-purple-950/30 to-black flex items-center justify-center">
                    <div className="text-7xl">🤝</div>
                  </div>
                )}

                {/* Partner Info */}
                <div className="p-6 bg-black/50">
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {partner?.name || 'Partner Name'}
                  </h3>
                  <p className="text-purple-400 font-medium text-sm uppercase tracking-wider">
                    {partner?.partner_type || 'Partner'}
                  </p>


                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: '0 0 20px 2px rgba(168, 85, 247, 0.4)' }}></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-2xl py-20">
            No partners available
          </div>
        )}
      </div>

     

      {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');

        .custom-heading {
          font-family: 'Poppins', sans-serif;
        }

        .partner-card {
          position: relative;
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: calc(var(--index) * 0.1s);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}