import HeroSection from "../components/homeComponents/HeroSection"
import Caution from "../components/homeComponents/Caution"
import OC from "./teamComponents/OC"
import DomainHeads from "./DomainHeads"
export default function TeamPage(){
    return (
        <>
            <Caution />
            <HeroSection text="Team E-Cell" />
            <OC />
            <DomainHeads />
        </>
    )
}