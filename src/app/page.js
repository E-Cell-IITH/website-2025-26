import Caution from "./components/homeComponents/Caution";
import HeroSection from "./components/homeComponents/HeroSection";
import AboutSection from "./components/homeComponents/AboutSection";
import OurMotto from "./components/homeComponents/OurMottoSection";
import VisionSection from "./components/homeComponents/OurVisionSection";
import Partnership from "./components/homeComponents/EcellPartnership";
import EventsPage from "./components/homeComponents/EventsSections";

export default function Home() {
  return (
    <>
    <Caution />
    <HeroSection />
    <AboutSection />
    <OurMotto />
    <VisionSection />
    <Partnership />
    <EventsPage />
    </>
    
  );
}
