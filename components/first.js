// app/components/Navbar.js or wherever you keep components
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar({
  desc = true,
  heading = "ENTREPRENEURSHIP CELL",
  subheading = "",
  sponsors = false,
  preOrientation = false,
}) {
  const headingRef = useRef();
  const iith = useRef();
  const parent = useRef();
  const warningRef = useRef();
  const scrollingTextRef = useRef();
  const logoRef = useRef();
  const bgRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced logo entrance animation
      gsap.fromTo(
        logoRef.current,
        {
          autoAlpha: 0,
          y: -20,
          scale: 0.8,
          rotationY: 180,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 1,
          ease: "back.out(1.7)",
          delay: 0.2,
        }
      );

      // Refined tagline animation
      gsap.fromTo(
        "#tagline > *",
        {
          x: -20,
          autoAlpha: 0,
          rotationX: 90,
        },
        {
          x: 0,
          autoAlpha: 1,
          rotationX: 0,
          duration: 0.8,
          delay: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      // Enhanced heading animations
      gsap.fromTo(
        headingRef.current,
        {
          autoAlpha: 0,
          y: 30,
          scale: 0.9,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.4,
        }
      );

      gsap.fromTo(
        iith.current,
        {
          autoAlpha: 0,
          y: 20,
          letterSpacing: "0.5em",
        },
        {
          autoAlpha: 1,
          y: 0,
          letterSpacing: "0.1em",
          duration: 0.8,
          ease: "power2.out",
          delay: 0.6,
        }
      );

      // Improved about section animation
      if (preOrientation) {
        gsap.fromTo(
          "#about",
          {
            autoAlpha: 0,
            y: 40,
            scale: 0.95,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#about",
              start: "top 70%",
              end: "60% 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Enhanced warning banner animation
      if (warningRef.current) {
        gsap.fromTo(
          warningRef.current,
          {
            autoAlpha: 0,
            y: -60,
            scale: 0.95,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.3,
          }
        );
      }

      // Improved scrolling text animation
      if (scrollingTextRef.current) {
        const scrollingText = scrollingTextRef.current;
        const textWidth = scrollingText.scrollWidth;
        const containerWidth = scrollingText.parentElement.clientWidth;

        gsap.set(scrollingText, {
          x: containerWidth,
          autoAlpha: 1,
        });

        gsap.to(scrollingText, {
          x: -textWidth,
          duration: 25,
          ease: "none",
          repeat: -1,
          delay: 1,
        });
      }

      // Background parallax effect
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          y: "+=100",
          ease: "none",
          scrollTrigger: {
            trigger: parent.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Add subtle pulse animation to logo
      gsap.to(logoRef.current, {
        scale: 1.05,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });

      // Enhanced about section with staggered text animation
      if (desc) {
        gsap.fromTo(
          "#about h3",
          {
            autoAlpha: 0,
            y: 30,
            scale: 0.9,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#about",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          "#about p",
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.2,
            scrollTrigger: {
              trigger: "#about",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

    }, parent);

    return () => ctx.revert();
  }, [preOrientation, desc]);

  const warningText =
    "⚠️ IMPORTANT: E-Cell IIT Hyderabad does not engage with any external companies or individuals for internships or placements. All official partnerships are listed on our website. For verification or legitimacy of any program, please refer to our website or contact an official team member directly. ⚠️";

  return (
    <div ref={parent} className="relative w-full overflow-hidden">
      {/* Enhanced Scrolling Warning Banner */}
      <div
        ref={warningRef}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-900 via-red-800 to-red-900 border-b-2 border-red-400 shadow-2xl flex items-center h-10 sm:h-11 md:h-12 overflow-hidden"
      >
        <div className="relative w-full h-full flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-700/30 to-transparent animate-pulse"></div>
          <p
            ref={scrollingTextRef}
            className="text-white font-semibold whitespace-nowrap text-xs sm:text-sm md:text-base px-4 relative z-10"
          >
            {warningText}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-10 sm:pt-11 md:pt-12 relative min-h-[70vh]">
        {/* Enhanced Background with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10"></div>
        
        {/* Background Image with Parallax */}
        <div ref={bgRef} className="absolute inset-0 -z-10 scale-110">
          <Image
            src="https://res.cloudinary.com/dwsverefw/image/upload/v1665878886/ecell/hostels_svd8y6.jpg"
            alt="IIT Hyderabad Hostel"
            layout="fill"
            objectFit="cover"
            priority
            className="filter brightness-110 contrast-105"
          />
        </div>

        {/* Enhanced Logo */}
        <div ref={logoRef} className="relative w-40 h-20 mx-auto z-20">
          <Image
            src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/logo_dshics.png"
            alt="Ecell Logo"
            layout="fill"
            objectFit="contain"
            priority
            className="filter drop-shadow-lg"
          />
        </div>

        {/* Enhanced Headings */}
        <div className="text-center mt-8 z-20 relative">
          <h1
            ref={headingRef}
            className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide drop-shadow-lg`}
          >
            {heading}
          </h1>
          {subheading && (
            <h2 className="text-white text-lg sm:text-xl md:text-2xl mt-3 font-medium drop-shadow-md">
              {subheading}
            </h2>
          )}
          {!sponsors && !preOrientation && (
            <div
              ref={iith}
              className="text-white text-lg sm:text-xl mt-2 font-medium tracking-wider drop-shadow-md"
            >
              IIT HYDERABAD
            </div>
          )}
        </div>

        {/* Enhanced Tagline */}
        {!preOrientation && (
          <div
            id="tagline"
            className="flex justify-center gap-3 mt-6 text-white text-sm sm:text-base md:text-lg font-bold tracking-wide"
          >
            <span className="px-2 py-1 bg-white/10 rounded backdrop-blur-sm">THINK</span>
            <span className="text-white/80">|</span>
            <span className="px-2 py-1 bg-white/10 rounded backdrop-blur-sm">BUILD</span>
            <span className="text-white/80">|</span>
            <span className="px-2 py-1 bg-white/10 rounded backdrop-blur-sm">INSPIRE</span>
          </div>
        )}

        {/* Enhanced About Section */}
        {desc && (
          <div
            id="about"
            className="max-w-4xl mx-auto mt-12 px-6 text-center text-white relative z-20"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-wide">ABOUT US</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
              We at IIT Hyderabad's Entrepreneurship Cell believe in passion,
              hard effort, and an unquenchable drive for achievement. It is a
              place that is the confluence of a billion sparks of ideas, a place
              where the fire of passion mingles with the cold calculation of the
              brain, and a place where dreams come true. We are people who love
              nothing more than the thrill of coming up with ideas, working them
              out into businesses and experiencing the pleasure of watching it
              all come to fruition.
            </p>
          </div>
        )}
        
        {/* Spacer for better visual separation */}
        <div className="h-16"></div>
      </div>
    </div>
  );
}