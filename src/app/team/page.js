import HeroSection from "../components/homeComponents/HeroSection"
import Caution from "../components/homeComponents/Caution"
import OC from "./teamComponents/OC"
import DomainHeads from "./teamComponents/DomainHeads"
import Operations from "./teamComponents/Operations"
import Web from "./teamComponents/Web"
import CrF from "./teamComponents/CrF"
export default function TeamPage(){
    return (
        <>
            <Caution />
            <HeroSection text="Team E-Cell" />
            <OC />
            <DomainHeads />
            <Operations />
            <CrF />
            <Web />
        </>
    )
}