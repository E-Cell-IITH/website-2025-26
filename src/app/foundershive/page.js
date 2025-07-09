import HeroSection from "@/app/components/founderhive/herosection";
import Sessiontabs from "@/app/components/founderhive/sessiontabs";
import UpcomingSessions from "@/app/components/founderhive/upcomingsessions";
import StartupConcepts from "@/app/components/founderhive/Startupconcepts";
import EventGallerySection from "@/app/components/founderhive/eventgallery";
import FooterLine from "@/app/components/founderhive/Footerline";
import Layout from "@/app/components/founderhive/Layout";
export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <Sessiontabs />
      <UpcomingSessions />
      <StartupConcepts />
      <EventGallerySection />
      <FooterLine />
    </Layout>
  );
}
