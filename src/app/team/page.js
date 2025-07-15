import HeroSection from "../../components/teamComponents/HeroSection"
import OC from "../../components/teamComponents/OC"
import DomainHeads from "../../components/teamComponents/DomainHeads"
import Operations from "../../components/teamComponents/Operations"
import Web from "../../components/teamComponents/Web"
import CrF from "../../components/teamComponents/CrF"
import MediaAndOutreach from "../../components/teamComponents/MeadiaOutreach"
import Ideation from "../../components/teamComponents/Ideation"
import DesignAndCreatives from "../../components/teamComponents/DesignAndCreatives"
import PrN from "../../components/teamComponents/PrAndNetworking"
export default function TeamPage(){
    return (
        <>          
            <HeroSection />
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