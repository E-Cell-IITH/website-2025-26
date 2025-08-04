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



export default async function TeamPage() {

    const payload = await getPayload({ config })

    const teamResponse = await payload.find({
        collection: "team",
        limit: 1000000,
    });


    console.log(teamResponse.docs)

    return (
        <>
            <HeroSectionTeam />
            <OC />
            <DomainHeads />
            <Operations />
            <CrF />
            <MediaAndOutreach />
            <Ideation />
            <DesignAndCreatives />
            <Web />
            <PrN />
        </>
    )
}