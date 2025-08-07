import HeroSection from "@/components/founderhive/Herosection";
import Sessiontabs from "@/components/founderhive/sessiontabs";
import StartupConcepts from "@/components/founderhive/Startupconcepts";
import EventGallerySection from "@/components/founderhive/eventgallery";
import FooterLine from "@/components/founderhive/Footerline";
import Layout from "@/components/founderhive/Layout";
import { getPayload } from "payload";
import config from "@payload-config";



export default async function FoundersHive() {


  const payload = await getPayload({ config });

  const foundersHive = await payload.find({
    collection: "sessions",
    limit: 1000000000,
  });

  const imagesResponse = await payload.find({
    collection : "foundersHiveImages",
    limit : 1000000
  })

  console.log(imagesResponse)

  return (
    <Layout>
      <HeroSection />
      <Sessiontabs sessionsData={foundersHive.docs} />
      {/* <UpcomingSessions /> */}
      <StartupConcepts  />
      <EventGallerySection galleryImages={imagesResponse.docs}  />
      <FooterLine />
    </Layout>
  );
}
