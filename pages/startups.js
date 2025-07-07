"use client"
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Navbar from "/components/first";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Startups = () => {
  const router = useRouter();
  const parent = useRef();
  const tl = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Refined header animation with smooth entrance
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#head",
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          "#head > *",
          {
            y: 40,
            autoAlpha: 0,
            scale: 0.95,
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.15,
          }
        );

      // Enhanced card animations with sophisticated entrance
      const cards = gsap.utils.toArray(".card");
      
      // Set initial state for all cards
      gsap.set(cards, {
        autoAlpha: 0,
        y: 60,
        scale: 0.9,
        rotationX: 10,
      });

      cards.forEach((card, index) => {
        // Entrance animation timeline
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        });

        // Main card entrance
        cardTl
          .to(card, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.7,
            ease: "power2.out",
            delay: index * 0.08,
          })
          .fromTo(
            card.querySelector(".card-image"),
            {
              scale: 1.15,
              autoAlpha: 0,
            },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.5"
          )
          .fromTo(
            card.querySelector(".card-content > *"),
            {
              y: 20,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.08,
            },
            "-=0.4"
          );

        // Refined hover interactions
        const cardElement = card.querySelector(".card-container");
        const imageElement = card.querySelector(".card-image");
        const contentElement = card.querySelector(".card-content");

        // Hover animations
        const hoverTl = gsap.timeline({ paused: true });
        hoverTl
          .to(cardElement, {
            y: -15,
            scale: 1.03,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            duration: 0.4,
            ease: "power2.out",
          })
          .to(
            imageElement,
            {
              scale: 1.08,
              duration: 0.4,
              ease: "power2.out",
            },
            0
          )
          .to(
            contentElement,
            {
              backgroundColor: "#f8f9fa",
              duration: 0.4,
              ease: "power2.out",
            },
            0
          );

        // Mouse events with improved performance
        let isHovered = false;
        
        card.addEventListener("mouseenter", () => {
          if (!isHovered) {
            isHovered = true;
            hoverTl.play();
          }
        });

        card.addEventListener("mouseleave", () => {
          if (isHovered) {
            isHovered = false;
            hoverTl.reverse();
          }
        });

        // Refined click animation
        card.addEventListener("click", (e) => {
          e.preventDefault();
          gsap.to(cardElement, {
            scale: 0.98,
            duration: 0.1,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
            onComplete: () => {
              window.open(card.href, '_blank');
            }
          });
        });
      });

      // Container entrance with fade-in
      gsap.fromTo(
        containerRef.current,
        {
          autoAlpha: 0,
          y: 30,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.2,
        }
      );

      // Subtle floating animation for visual interest
      cards.forEach((card, index) => {
        gsap.to(card, {
          y: "+=5",
          duration: 2.5 + (index % 3) * 0.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.1,
        });
      });

      // Parallax effect for depth
      gsap.to(containerRef.current, {
        y: "-=30",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Add a subtle scale effect on scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onUpdate: (self) => {
          const progress = self.progress;
          const scale = 1 + (progress * 0.02);
          gsap.set(containerRef.current, { scale });
        },
      });

    }, parent);

    return () => ctx.revert();
  }, []);

  const cardData = [
    { imageUrl: "", title: "Adiabatic", link: "https://www.adiabatic.co.in/", found: "Darshan Meher, Co-founder" },
    { imageUrl: "", title: "Badhaan", link: "https://www.badhaan.com", found: "Vishnu Vikyath Gowravajhala, Co-Founder" },
    { imageUrl: "", title: "Frinks AI", link: "https://www.frinks.ai/", found: "Aditya Agrawal, Co-founder" },
    { imageUrl: "", title: "Gramheet", link: "https://www.gramheet.com/", found: "Pankaj Mahalle, Founder & CEO" },
    { imageUrl: "", title: "Green PMU Semi", link: "https://greenpmusemi.com/", found: "R. Sai Chandra Teja, Green PMU Semi" },
    { imageUrl: "", title: "Katomaran Technologies", link: "https://www.katomaran.com/", found: "Muthu Vangaliappan, CEO, Co-Founder" },
    { imageUrl: "", title: "Vision Nanny", link: "https://visionnanny.com/", found: "Prathyusha Potharaju, Product Head" },
    { imageUrl: "", title: "Snazzyalign", link: "https://snazzyalign.com/", found: "Keshav Chouksey, Co-Founder" },
    { imageUrl: "", title: "Signalx", link: "https://signalx.ai/", found: "Piyush Arora, CTO" },
    { imageUrl: "", title: "Revelec", link: "https://revelec.co/", found: "Pradeep Gurrala, Co-Founder" },
    { imageUrl: "", title: "Lendingkatalyst", link: "https://lendingkatalyst.com/", found: "Surya Prakash Koidala" },
  ];

  return (
    <div ref={parent}>
      <Head>
        <title>Sponsors | Entrepreneurship Cell IIT Hyderabad</title>
        <meta
          name="google-site-verification"
          content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
        />
      </Head>
      <Navbar heading={"IITH STARTUPS"} desc={false} sponsors={true} />
      <div
        ref={containerRef}
        className="flex flex-wrap justify-center items-center gap-8 px-4 py-12 mb-10"
        style={{ perspective: "1000px" }}
      >
        {cardData.map((card, index) => (
          <a
            href={card.link}
            key={index}
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[28%] xl:w-[25%] flex flex-col items-center card"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="card-container w-full max-w-sm bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="card-image overflow-hidden relative">
                <img
                  src={card.imageUrl || `https://via.placeholder.com/400x240/667eea/ffffff?text=${encodeURIComponent(card.title)}`}
                  alt={card.title}
                  className="w-full h-48 object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              </div>
              <div className="card-content p-5 text-center bg-white transition-all duration-300">
                <h2 className="text-xl font-bold mb-2 text-gray-800 transition-colors duration-300">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300">
                  {card.found}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Startups;