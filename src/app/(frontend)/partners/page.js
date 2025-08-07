import MainSection from "@/components/Partners/Mainsection"
import TitleSponsorSection from "@/components/Partners/titleSponsor"
import CoTitleSponsorSection from "@/components/Partners/cotitlesponsor"
import SilveSponsorSection from "@/components/Partners/silversponsor"
import DevPartnerSection from "@/components/Partners/Developmentpartner"
import EneryPartnerSection from "@/components/Partners/eneryPartner"
import SportingPartnerSection from "@/components/Partners/SportingPartner"
import ConsultingPartnerSection from "@/components/Partners/ConsultingPartner"
import LodgePartnerSection from "@/components/Partners/LodgingPartner"
import MovingPartnerSection from "@/components/Partners/MovingPartner"
import EventPartnerSection from "@/components/Partners/EventPartner"
import TravelPartnerSection from "@/components/Partners/TravelPartner"
import PlatformPartnerSection from "@/components/Partners/PlatformPartner"
import EducationPartnerSection from "@/components/Partners/EducationPartner"
import MerchandisePartnerSection from "@/components/Partners/MerchandisePartner"
import TrainingPartnerSection from "@/components/Partners/TrainingPartner"
import InternshipPartnerSection from "@/components/Partners/InternshipPartner"
import WorkshopPartnerSection from "@/components/Partners/WorkshopPartner"
import MediaPartnerSection from "@/components/Partners/MediaPartner"
import { getPayload } from "payload";
import config from "@payload-config";



export default async function partners() {

    const payload = await getPayload({ config });

    const sponsorshipPartners = await payload.find({
        collection: "sponsorshipPartners",
        limit: 1000000,
    });

    console.log(sponsorshipPartners.docs)


    return (
        <>
            <MainSection />
            <TitleSponsorSection />
            <CoTitleSponsorSection />
            <SilveSponsorSection />
            <DevPartnerSection />
            <EneryPartnerSection />
            <ConsultingPartnerSection />
            <SportingPartnerSection />
            <LodgePartnerSection />
            <MovingPartnerSection />
            <EventPartnerSection />
            <TravelPartnerSection />
            <PlatformPartnerSection />
            <EducationPartnerSection />
            <MerchandisePartnerSection />
            <TrainingPartnerSection />
            <InternshipPartnerSection />
            <WorkshopPartnerSection />
            <MediaPartnerSection />
        </>
    )
}