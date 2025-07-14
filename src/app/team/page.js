import HeroSection from "./teamComponents/HeroSection"
import Caution from "./teamComponents/Caution"
import OC from "./teamComponents/OC"
import DomainHeads from "./teamComponents/DomainHeads"
import Operations from "./teamComponents/Operations"
import Web from "./teamComponents/Web"
import CrF from "./teamComponents/CrF"
import MediaAndOutreach from "./teamComponents/MeadiaOutreach"
import Ideation from "./teamComponents/Ideation"
import DesignAndCreatives from "./teamComponents/DesignAndCreatives"
import PrN from "./teamComponents/PrAndNetworking"
export default function TeamPage(){
    return (
        <>
            <Caution />
            <HeroSection text="Team E-Cell" />
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