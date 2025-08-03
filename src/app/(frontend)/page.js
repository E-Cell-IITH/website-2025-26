import Collaborators from "../../components/homeComponents/Collaborations";
import AboutUs from "../../components/homeComponents/AboutSection";
import Partnership from "../../components/homeComponents/EcellPartnership";
import HeroSection from "../../components/homeComponents/HeroSection";
import OurMottoSection from "../../components/homeComponents/OurMottoSection";
import VisionSection from "../../components/homeComponents/OurVisionSection";
import PreviousSpeakers from "../../components/homeComponents/Speakers";
import EventsPage from "@/components/homeComponents/EventsSections";
import { getPayload } from "payload";
import config from "@payload-config";





export default async function Home() {

  const payload = await getPayload({ config });

  const response = await payload.find({
    collection: "collaborations",
    limit: 1000000,
  });

  const previousSpeakersResponse = await payload.find({
    collection: "previousSpeakers",
    limit: 1000000,
  });


  return (
    <>
      <HeroSection text="ENTREPRENEURSHIP CELL" />
      <AboutUs />
      <OurMottoSection />
      <VisionSection />
      <Partnership />
      <EventsPage />
      <PreviousSpeakers previousSpeakers={previousSpeakersResponse.docs} />
      <Collaborators collaborations={response.docs} />
    </>

  );
}
