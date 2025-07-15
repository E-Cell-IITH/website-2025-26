import Collaborators from "../components/homeComponents/Collaborations";
import AboutUs from "../components/homeComponents/AboutSection";
import Partnership from "../components/homeComponents/EcellPartnership";
import HeroSection from "../components/homeComponents/HeroSection";
import OurMottoSection from "../components/homeComponents/OurMottoSection";
import VisionSection from "../components/homeComponents/OurVisionSection";
import PreviousSpeakers from "../components/homeComponents/Speakers";
import EventsPage from "@/components/homeComponents/EventsSections";


export default function Home() {
  return (
    <>
    <HeroSection text="ENTREPRENEURSHIP CELL" />
    <AboutUs />
    <OurMottoSection />
    <VisionSection />
    <Partnership />
    <EventsPage />
    <PreviousSpeakers />
    <Collaborators />
    </>
    
  );
}
