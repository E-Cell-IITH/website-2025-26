import Startupmain from "@/components/Startups/Startupmain"
import StartupGrid from "@/components/Startups/StartupGrid"
export default function StartUpsClient({ startups }) {
    return (
        <>
            <Startupmain />
            <StartupGrid startUpList={startups} />
        </>
    )
}