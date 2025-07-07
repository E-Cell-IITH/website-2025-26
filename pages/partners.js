"use client"
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sponsor = () => {
  const parent = useRef();
  const tl = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            y: 20,
            autoAlpha: 0.2,
            scale: 0.9,
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.3,
          }
        );

      const cards = gsap.utils.toArray(".sponsor-card");
      cards.forEach((card, index) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 50%",
            },
          })
          .fromTo(
            card,
            {
              y: 40,
              autoAlpha: 0,
              scale: 0.95,
            },
            {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              delay: index * 0.1,
            }
          );
      });
    }, parent);

    return () => ctx.revert();
  }, []);

  const SponsorCard = ({ href, image, title, className = "" }) => (
    <div className={`sponsor-card ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-64 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 group"
      >
        <div className="flex items-center justify-center h-full p-6 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </a>
    </div>
  );

  const SectionTitle = ({ children, className = "" }) => (
    <div className={`text-center uppercase border-b-2 border-white mx-auto text-white text-xl md:text-3xl pb-2 mb-10 ${className}`}>
      {children}
    </div>
  );

  return (
    <div ref={parent} className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>Sponsors | Entrepreneurship Cell IIT Hyderabad</title>
        <meta
          name="google-site-verification"
          content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
        />
      </Head>

      {/* Header */}
      <div id="head" className="pt-20 pb-10">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            COLLABORATIONS
          </h1>
          <p className="text-xl md:text-2xl opacity-80">2023-2024</p>
        </div>
      </div>

      {/* Title Sponsor */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle className="w-60 md:w-96 mt-20">Title Sponsor</SectionTitle>
        <div className="flex justify-center">
          <SponsorCard
            href="https://www.linkedin.com/showcase/bvr-mohan-reddy-school-of-innovation-and-entrepreneurship-bvr-scient/"
            image="/sponsors/scient2.jpeg"
            title="Scient"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Co-Title Sponsor */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle className="w-60 md:w-96">Co-Title Sponsor</SectionTitle>
        <div className="flex justify-center">
          <SponsorCard
            href="https://www.npci.org.in/"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/NPCI-Logo.png/640px-NPCI-Logo.png"
            title="NPCI"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Silver Sponsor */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle className="w-60 md:w-96">Silver Sponsor</SectionTitle>
        <div className="flex justify-center">
          <SponsorCard
            href="https://www.icicibank.com/"
            image="https://getvectorlogo.com/wp-content/uploads/2018/12/icici-bank-vector-logo.png"
            title="ICICI Bank"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Development Partner */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle className="w-60 md:w-96">Development Partner</SectionTitle>
        <div className="flex justify-center">
          <SponsorCard
            href="https://www.sidbi.in"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/SIDBI_LOGO.png/1200px-SIDBI_LOGO.png"
            title="SIDBI"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Energy Partner */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle className="w-60 md:w-96">Energy Partner</SectionTitle>
        <div className="flex justify-center">
          <SponsorCard
            href="https://www.iocl.com"
            image="https://logowiki.net/wp-content/uploads/imgp/Servo-Logo-1-6780.jpg"
            title="SERVO"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Consulting Partner */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle className="w-60 md:w-96">Consulting Partner</SectionTitle>
        <div className="flex justify-center">
          <SponsorCard
            href="https://www.capgemini.com/in-en/"
            image="https://www.drupal.org/files/Capgemini_Logo_2COL_RGB.png"
            title="Capgemini"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Sporting Partner */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle className="w-60 md:w-96">Sporting Partner</SectionTitle>
        <div className="flex justify-center">
          <SponsorCard
            href="https://www.decathlon.in/"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIdUA2jIUT3rOX4P5zjZhwsrhZ35M9hUyK9Zf4DO7ag&s"
            title="Decathlon"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Lodging Partner */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle className="w-60 md:w-96">Lodging Partner</SectionTitle>
        <div className="flex justify-center">
          <SponsorCard
            href="https://www.oyorooms.com/"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6VnV3IUmBYmmVWK-S0n7K3WEadcY2mnJsbqLXF6ZZg&s"
            title="Oyo Hotels"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Moving Partner */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle className="w-60 md:w-96">Moving Partner</SectionTitle>
        <div className="flex justify-center">
          <SponsorCard
            href="https://porter.in/"
            image="https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2F20230412125221_porter.png&h=630&w=1200&q=75&v=20170226&c=1"
            title="Porter"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Event Partners */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle className="w-60 md:w-96">Event Partners</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <SponsorCard
            href="https://www.amazon.in/"
            image="/sponsors/Amazon.png"
            title="Amazon"
          />
          <SponsorCard
            href="https://funzippy.com/"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkCZesRXWT73G-RogzO8DltRS9WHMvqI9QcCFiTZNNA&s"
            title="Funzippy"
          />
        </div>
      </div>

      {/* Travel & Platform Partners */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div>
            <SectionTitle className="w-48 md:w-60">Travel Partner</SectionTitle>
            <SponsorCard
              href="https://abhibus.com/"
              image="https://res.cloudinary.com/admitad-gmbh/image/upload/v1661334998/oimwao7nuzcevsijxhy1.png"
              title="Abhibus"
            />
          </div>
          <div>
            <SectionTitle className="w-48 md:w-60">Platform Partner</SectionTitle>
            <SponsorCard
              href="https://unstop.com/"
              image="/sponsors/Unstop.jpg"
              title="Unstop"
            />
          </div>
        </div>
      </div>

      {/* Education & Merchandise Partners */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div>
            <SectionTitle className="w-48 md:w-60">Education Partner</SectionTitle>
            <SponsorCard
              href="https://henyharvin.com/"
              image="/sponsors/henry_harvin.png"
              title="Henry Harvin"
            />
          </div>
          <div>
            <SectionTitle className="w-48 md:w-60">Merchandise Partner</SectionTitle>
            <SponsorCard
              href="https://www.weezy.in/"
              image="https://weezy.in/cdn/shop/files/Weezy_Logo.jpg?v=1673328745"
              title="Weezy"
            />
          </div>
        </div>
      </div>

      {/* Training Partners */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle className="w-60 md:w-96">Training Partner</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <SponsorCard
            href="https://tech-gyan.in/"
            image="https://tech-gyan.in/wp-content/uploads/2021/02/Untitled-7sdx-1024x199.png"
            title="Tech Gyan"
          />
          <SponsorCard
            href="http://www.remarkskill.com/"
            image="https://remarkskill.com/wp-content/uploads/logonew.png"
            title="RemarkSkill"
          />
        </div>
      </div>

      {/* Internship Partners */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle className="w-60 md:w-96">Internship Partner</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <SponsorCard
            href="https://makeintern.com/"
            image="https://www.makeintern.com/images/makeintern_l_logo.png"
            title="Make Intern"
          />
          <SponsorCard
            href="https://skilldunia.co.in/"
            image="https://res.cloudinary.com/dqyxqfvnv/image/upload/v1717323500/sponsers/c4acp4og8brjymynuu1i.png"
            title="Skilldunia"
          />
        </div>
      </div>

      {/* Workshop Partners */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle className="w-60 md:w-96">Workshop Partner</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <SponsorCard
            href="https://techobytes.com"
            image="/sponsors/Techobyte.jpg"
            title="Technobytes"
          />
          <SponsorCard
            href="https://www.edufabrica.net/"
            image="/sponsors/edufabrica.png"
            title="Edufabrica"
          />
        </div>
      </div>

      {/* Media Partners */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle className="w-60 md:w-96">Media Partners</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <SponsorCard
            href="https://edtimes.in/?amp"
            image="/sponsors/ed_times.png"
            title="ED Times"
          />
          <SponsorCard
            href="https://theglobalhues.com/"
            image="/sponsors/global_hues_black.png"
            title="Global Hues"
          />
          <SponsorCard
            href="https://youthincmag.com/"
            image="/sponsors/Yi_New_Logo.png"
            title="Youth Inc"
          />
          <SponsorCard
            href="https://startupstorymedia.com"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSYhEU26JaVO3e3dnsnRB_-Nr0vKSUnJPb7wpKRQCAQ&s"
            title="Startup Story"
          />
        </div>
      </div>

      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default Sponsor;