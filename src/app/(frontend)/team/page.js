import OC from "../../../components/teamComponents/OC"
import DomainHeads from "../../../components/teamComponents/DomainHeads"
import Operations from "../../../components/teamComponents/Operations"
import Web from "../../../components/teamComponents/Web"
import CrF from "../../../components/teamComponents/CrF"
import MediaAndOutreach from "../../../components/teamComponents/MeadiaOutreach"
import Ideation from "../../../components/teamComponents/Ideation"
import DesignAndCreatives from "../../../components/teamComponents/DesignAndCreatives"
import PrN from "../../../components/teamComponents/PrAndNetworking"
import HeroSectionTeam from "@/components/teamComponents/HeroSection"
import { getPayload } from "payload";
import config from "@payload-config";
import VICEOC from "../../../components/teamComponents/ViceOC"

export default async function TeamPage() {
    const payload = await getPayload({ config });

    const teamResponse = await payload.find({
        collection: "team",
        limit: 1000000,
    });

    const allMembers = teamResponse.docs;

    const filterByDomain = (domain) => {
        return allMembers.filter((member) => member.enter_domain === domain);
    };

    const getHeads = () => {
        return allMembers.filter((member) => member.head_or_manager === "HEAD");
    };

    return (
        <>
            <HeroSectionTeam />
            <OC members={filterByDomain("OC")} />
            <VICEOC members={filterByDomain("VICEOC")} />
            <DomainHeads members={getHeads()} />
            <Operations members={filterByDomain("OPS")} />
            <CrF members={filterByDomain("CRF")} />
            <MediaAndOutreach members={filterByDomain("MEDIA_OUTREACH")} />
            <Ideation members={filterByDomain("IDEATION")} />
            <DesignAndCreatives members={filterByDomain("DESIGN")} />
            <Web members={filterByDomain("WEB")} />
            <PrN members={filterByDomain("PRN")} />
        </>
    );
}
2