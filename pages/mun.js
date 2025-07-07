"use client"
import Image from "next/image";
import Link from "next/link";
import EcellLogo from "/components/ecellLogo.png";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StartupFair() {
  const parent = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const mainTitleRef = useRef(null);
  const buttonRef = useRef(null);
  const socialRef = useRef(null);
  const homeButtonRef = useRef(null);
  const munSectionRef = useRef(null);
  const munTitleRef = useRef(null);
  const munTextRef = useRef(null);

  const isLargeScreen = useMediaQuery({ minWidth: 1280 });
  const isMediumScreen = useMediaQuery({ minWidth: 768 });

  const ecell = isLargeScreen
    ? "text-5xl"
    : isMediumScreen
    ? "text-3xl"
    : "text-3xl";
  const fair = isLargeScreen
    ? "text-8xl"
    : isMediumScreen
    ? "text-4xl"
    : "text-4xl";
  const presents = isLargeScreen
    ? "text-xl"
    : "text-base";

  const buttonPadding = isLargeScreen ? "py-3 px-6" : "py-2 px-4";
  const buttonTextSize = isLargeScreen ? "text-xl" : "text-base";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for initial animations
      const tl = gsap.timeline();

      // Logo animation - enhanced entrance
      tl.fromTo(logoRef.current, 
        { 
          opacity: 0, 
          scale: 0.3,
          rotation: -360,
          y: -50
        },
        { 
          opacity: 1, 
          scale: 1,
          rotation: 0,
          y: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.75)"
        }
      );

      // Title sequence with enhanced effects
      tl.fromTo(titleRef.current,
        { 
          opacity: 0, 
          y: 80,
          scale: 0.5,
          rotationX: 90
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out"
        }, "-=0.8"
      );

      tl.fromTo(subtitleRef.current,
        { 
          opacity: 0, 
          y: 40,
          x: -30
        },
        { 
          opacity: 1, 
          y: 0,
          x: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.6"
      );

      // Main title with spectacular entrance
      tl.fromTo(mainTitleRef.current,
        { 
          opacity: 0, 
          y: 150,
          scale: 0.2,
          rotation: 45
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "back.out(1.7)"
        }, "-=0.4"
      );

      // Button with bounce effect
      tl.fromTo(buttonRef.current,
        { 
          opacity: 0, 
          scale: 0,
          y: 50
        },
        { 
          opacity: 1, 
          scale: 1,
          y: 0,
          duration: 1,
          ease: "bounce.out"
        }, "-=0.5"
      );

      // Social icons with stagger and rotation
      tl.fromTo(socialRef.current.children,
        { 
          opacity: 0, 
          y: 50,
          scale: 0,
          rotation: 180
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)"
        }, "-=0.8"
      );

      // Home button entrance
      tl.fromTo(homeButtonRef.current,
        { 
          opacity: 0, 
          scale: 0,
          rotation: -180,
          x: 50
        },
        { 
          opacity: 1, 
          scale: 1,
          rotation: 0,
          x: 0,
          duration: 1,
          ease: "back.out(1.7)"
        }, "-=1.2"
      );

      // Continuous animations
      gsap.to(logoRef.current, {
        rotation: 360,
        duration: 25,
        ease: "none",
        repeat: -1
      });

      // Pulsing glow effect for main title
      gsap.to(mainTitleRef.current, {
        filter: "drop-shadow(0 0 20px #5FD2D8) drop-shadow(0 0 40px #3982E6)",
        duration: 2.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });

      // Floating animation for the entire hero section
      gsap.to(".hero-content", {
        y: -10,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });

      // Button hover animations
      const button = buttonRef.current;
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.15,
          boxShadow: "0 0 30px 10px #61E0FD",
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(button, {
          rotationY: 360,
          duration: 0.6,
          ease: "power2.out"
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          boxShadow: "0 0 5px 4px #61E0FD",
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(button, {
          rotationY: 0,
          duration: 0.6,
          ease: "power2.out"
        });
      });

      // Social icons hover effects
      Array.from(socialRef.current.children).forEach((icon, index) => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.4,
            rotation: 360,
            y: -10,
            duration: 0.4,
            ease: "power2.out"
          });
        });

        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          });
        });
      });

      // Home button hover
      const homeButton = homeButtonRef.current;
      homeButton.addEventListener('mouseenter', () => {
        gsap.to(homeButton, {
          scale: 1.2,
          rotation: 360,
          duration: 0.5,
          ease: "power2.out"
        });
      });

      homeButton.addEventListener('mouseleave', () => {
        gsap.to(homeButton, {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      });

      // Scroll-triggered animations for MUN section
      gsap.fromTo(munTitleRef.current,
        {
          opacity: 0,
          y: 120,
          scale: 0.3,
          rotation: 45
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: munSectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(munTextRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: munSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Parallax effect for background
      gsap.to(".bg-gradient", {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: parent.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, parent);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={parent} className="relative bg-black min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-[#5FD2D8] to-[#3982E6] rounded-full opacity-5 top-10 left-10 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-[#3982E6] to-[#5FD2D8] rounded-full opacity-5 bottom-10 right-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute w-32 h-32 bg-gradient-to-r from-[#5FD2D8] to-[#3982E6] rounded-full opacity-5 top-1/2 left-1/2 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Logo */}
      <div ref={logoRef} className="absolute top-16 left-20 z-10">
        <Image src={EcellLogo} alt="E-Cell Logo" />
      </div>

      {/* Home Button */}
      <div ref={homeButtonRef} className="absolute top-16 right-20 z-10">
        <Link href="/">
          <button className="bg-gradient-to-r from-[#5FD2D8] to-[#3982E6] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="hero-content flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#02023c] to-black text-white px-4 bg-gradient">
        <h1 ref={titleRef} className={`font-bold font-montserrat ${ecell} text-center`}>
          E-CELL IIT HYDERABAD
        </h1>
        <p
          ref={subtitleRef}
          className={`uppercase font-semibold font-montserrat ${presents} text-center mt-2`}
        >
          welcomes you to
        </p>
        <h2
          ref={mainTitleRef}
          className={`font-bold bg-gradient-to-b from-[#5FD2D8] to-[#3982E6] bg-clip-text text-transparent font-montserrat ${fair} text-center mt-2`}
        >
          IITH MUN
        </h2>
        <Link
          href="https://forms.gle/49yWPPLd2YVa5L6U9"
          target="_blank"
          className="mt-8"
        >
          <button
            ref={buttonRef}
            className={`border-2 border-[#5FD2D8] rounded-lg shadow-[0_0_5px_4px_#61E0FD] ${buttonPadding} ${buttonTextSize} font-light capitalize transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5FD2D8] hover:to-[#3982E6] hover:text-black hover:border-transparent`}
          >
            Register Here
          </button>
        </Link>

        {/* Social Icons */}
        <div ref={socialRef} className="absolute bottom-6 left-6 flex gap-4 text-3xl">
          <Link href="https://www.instagram.com/ecell_iith/?hl=en" target="instagram">
            <i className="fab fa-instagram hover:text-[#5FD2D8] transition-all duration-300 cursor-pointer"></i>
          </Link>
          <Link href="https://www.linkedin.com/company/entrepreneurship-cell-iit-hyderabad" target="_blank">
            <i className="fab fa-linkedin hover:text-[#5FD2D8] transition-all duration-300 cursor-pointer"></i>
          </Link>
          <Link href="https://twitter.com/ecell_iith" target="_blank">
            <i className="fab fa-twitter hover:text-[#5FD2D8] transition-all duration-300 cursor-pointer"></i>
          </Link>
          <Link href="https://www.facebook.com/ecell.iithyd/" target="_blank">
            <i className="fab fa-facebook hover:text-[#5FD2D8] transition-all duration-300 cursor-pointer"></i>
          </Link>
          <Link href="https://www.youtube.com/user/ecelliithyderabad" target="_blank">
            <i className="fab fa-youtube hover:text-[#5FD2D8] transition-all duration-300 cursor-pointer"></i>
          </Link>
        </div>
      </div>

      {/* What is a MUN Section */}
      <div ref={munSectionRef} className="flex flex-col items-center justify-center min-h-screen text-white px-4 text-center gap-8 relative">
        <h2
          ref={munTitleRef}
          className={`uppercase font-bold font-montserrat ${
            isLargeScreen ? "text-6xl" : "text-4xl"
          } bg-gradient-to-r from-[#5FD2D8] to-[#3982E6] bg-clip-text text-transparent`}
        >
          What is a MUN?
        </h2>
        <p
          ref={munTextRef}
          className={`font-montserrat ${
            isLargeScreen ? "text-2xl px-24" : "text-lg px-6"
          } leading-relaxed max-w-4xl`}
        >
          Model United Nations is an academic simulation of the United Nations
          where students play the role of delegates from several different
          countries and attempt to solve real-world issues with policies and
          perspectives of their assigned country. For example, a student may be
          assigned to the United Kingdom and will have to solve global topics
          such as nuclear non-proliferation or climate change from the policies
          and perspectives of the United Kingdom.
        </p>
      </div>
    </div>
  );
}