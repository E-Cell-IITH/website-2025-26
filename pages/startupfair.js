import React from 'react';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-green-900/40 opacity-80"></div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <div 
              className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 animate-pulse"
              style={{ animationDelay: `${Math.random() * 3}s` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <div className="relative group">
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 via-blue-400 to-cyan-400 animate-gradient-x mb-8 tracking-tight transform transition-all duration-700 hover:scale-105 cursor-default">
              Coming Soon
            </h1>
            
            {/* Glowing effect on hover */}
            <div className="absolute inset-0 text-6xl sm:text-7xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 via-blue-400 to-cyan-400 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-gradient-x">
              Coming Soon
            </div>
          </div>
          
          {/* Animated line */}
          <div className="relative w-64 h-1 mx-auto mb-8 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 animate-slide"></div>
          </div>
        </div>
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid"></div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-40px) rotate(180deg); }
          75% { transform: translateY(-20px) rotate(270deg); }
        }
        
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes grid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-slide {
          animation: slide 2s ease-in-out infinite;
        }
        
        .animate-grid {
          animation: grid 20s linear infinite;
        }
      `}</style>
    </div>
  );
}