// export default function HeroSection() {
//     return (
//         <>
//             <br />
//             <br />
//             <section className="relative h-screen w-full overflow-hidden">
//                 {/* Background Image container */}
//                 <img
//                     src="/backgroundImage.jpg"
//                     alt="Background Image"
//                     className="absolute inset-0 w-full h-full object-cover object-center"
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black opacity-100 z-10"></div>

//                 {/* Ecell Logo */}
//                 <div className="absolute top-[0.5vh] left-0 right-0 text-center p-4 z-20">
//                     <img src="/EcellLogo.png" alt="Ecell Logo" className="w-[12vw] h-[12vh] object-contain" />
//                 </div>

//                 <div className="relative w-full h-screen">
//                     {/* Ecell Text */}
//                     <div className="absolute top-[40%] left-0 right-0 text-center p-4 pt-2 z-20 animate-slide-up">
//                         {/* Only visible on large and above */}
//                         <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-8xl hidden lg:block animated-gradient-text">
//                             ENTREPRENEURSHIP CELL
//                         </h1>

//                         {/* Shown below lg, fits in one line */}
//                         <h1 className="text-white font-bold text-[15vw] sm:text-[30px] md:text-[5vw] lg:hidden whitespace-nowrap animated-gradient-text">
//                             E-CELL
//                         </h1>
//                     </div>

//                     {/* IIT H Text */}
//                     <div className="absolute top-[60%] left-0 right-0 text-center p-4 pt-2 z-20 animate-slide-up">
//                         <h2 className="text-white font-bold text-4xl sm:text-4xl md:text-5xl lg:text-8xl whitespace-nowrap">
//                             IIT HYDERABAD
//                         </h2>
//                         <div className="flex flex-row justify-center mt-[10vh]">
//                             <span className="text-white font-extralight text-2xl sm:text-xl md:text-3xl lg:text-4xl">
//                                 THINK
//                             </span>
//                             <span className="text-white font-extralight text-2xl sm:text-xl md:text-3xl lg:text-4xl pl-4">
//                                 | BUILD
//                             </span>
//                             <span className="text-white font-extralight text-2xl sm:text-xl md:text-3xl lg:text-4xl pl-4">
//                                 | INSPIRE
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }
'use client';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
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
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <br />
      <br />
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="/backgroundImage.jpg"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black opacity-100 z-10" />

        {/* Logo */}
        <div className="absolute top-[0.5vh] left-0 right-0 text-center p-4 z-20">
          <img
            src="/EcellLogo.png"
            alt="Ecell Logo"
            className="w-[12vw] h-[12vh] object-contain"
          />
        </div>

        <div className="relative w-full h-screen">
          {/* Main Title */}
          <div
            id="ecell-title"
            data-animate
            className={`absolute top-[40%] left-0 right-0 text-center p-4 pt-2 z-20 transition-all duration-1000 transform ${
              isVisible['ecell-title']
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Large screens */}
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-8xl hidden lg:block animated-gradient-text">
              ENTREPRENEURSHIP CELL
            </h1>

            {/* Small screens */}
            <h1 className="text-white font-bold text-[15vw] sm:text-[30px] md:text-[5vw] lg:hidden whitespace-nowrap animated-gradient-text">
              E-CELL
            </h1>
          </div>

          {/* IIT Hyderabad + Tagline */}
          <div
            id="ecell-subtitle"
            data-animate
            className={`absolute top-[60%] left-0 right-0 text-center p-4 pt-2 z-20 transition-all duration-1000 delay-300 transform ${
              isVisible['ecell-subtitle']
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-white font-bold text-4xl sm:text-4xl md:text-5xl lg:text-8xl whitespace-nowrap">
              IIT HYDERABAD
            </h2>

            <div className="flex flex-row justify-center mt-[10vh]">
              <span className="text-white font-extralight text-2xl sm:text-xl md:text-3xl lg:text-4xl">
                THINK
              </span>
              <span className="text-white font-extralight text-2xl sm:text-xl md:text-3xl lg:text-4xl pl-4">
                | BUILD
              </span>
              <span className="text-white font-extralight text-2xl sm:text-xl md:text-3xl lg:text-4xl pl-4">
                | INSPIRE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Text Animation */}
      <style jsx>{`
        .animated-gradient-text {
          background: linear-gradient(270deg, #ec4899, #8b5cf6, #22d3ee, #ec4899);
          background-size: 800% 800%;
          animation: gradientFlow 6s ease infinite;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
}
