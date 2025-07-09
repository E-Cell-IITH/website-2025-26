import Collaborators from "./components/Collaborations";
import AboutUs from "./components/homeComponents/AboutSection";
import Caution from "./components/homeComponents/Caution";
import Partnership from "./components/homeComponents/EcellPartnership";
import HeroSection from "./components/homeComponents/HeroSection";
import OurMottoSection from "./components/homeComponents/OurMottoSection";
import VisionSection from "./components/homeComponents/OurVisionSection";
import PreviousSpeakers from "./components/Speakers";


export default function Home() {
  return (
    <>
    <Caution />
    <HeroSection />
    <AboutUs />
    <OurMottoSection />
    <VisionSection />
    <Partnership />
    {/* <EventsPage /> */}
    <PreviousSpeakers />
    <Collaborators />
    </>
    
  );
}
