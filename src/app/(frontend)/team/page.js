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
export default function TeamPage(){
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