import HeroSection from "@/components/founderhive/Herosection";
import Sessiontabs from "@/components/founderhive/sessiontabs";
import StartupConcepts from "@/components/founderhive/Startupconcepts";
import EventGallerySection from "@/components/founderhive/eventgallery";
import FooterLine from "@/components/founderhive/Footerline";
import Layout from "@/components/founderhive/Layout";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function FoundersHive() {
  let foundersHive = { docs: [] };
  let imagesResponse = { docs: [] };

  try {
    const payload = await getPayload({ config });
    
    // Fetch sessions data with error handling
    try {
      foundersHive = await payload.find({
        collection: "sessions",
        limit: 1000000000,
      });
    } catch (sessionError) {
      console.error("Error fetching sessions:", sessionError);
      foundersHive = { docs: [] };
    }

    // Fetch images data with error handling
    try {
      imagesResponse = await payload.find({
        collection: "foundersHiveImages",
        limit: 1000000,
      });
    } catch (imageError) {
      console.error("Error fetching images:", imageError);
      imagesResponse = { docs: [] };
    }

    // console.log("Sessions data:", foundersHive);
    // console.log("Images data:", imagesResponse);
    
  } catch (error) {
    console.error("Error initializing payload:", error);
    // Fallback to empty data structures
    foundersHive = { docs: [] };
    imagesResponse = { docs: [] };
  }

  return (
    <Layout>
      <HeroSection />
      <Sessiontabs sessionsData={foundersHive?.docs || []} />
      <StartupConcepts />
      <EventGallerySection galleryImages={imagesResponse?.docs || []} />
      <FooterLine />
    </Layout>
  );
}