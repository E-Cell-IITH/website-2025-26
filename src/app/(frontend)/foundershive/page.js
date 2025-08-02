import HeroSection from "@/components/founderhive/herosection";
import Sessiontabs from "@/components/founderhive/sessiontabs";
// import UpcomingSessions from "@/components/founderhive/upcomingsessions";
import StartupConcepts from "@/components/founderhive/Startupconcepts";
import EventGallerySection from "@/components/founderhive/eventgallery";
import FooterLine from "@/components/founderhive/Footerline";
import Layout from "@/components/founderhive/Layout";
export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <Sessiontabs />
      {/* <UpcomingSessions /> */}
      <StartupConcepts />
      <EventGallerySection />
      <FooterLine />
    </Layout>
  );
}
