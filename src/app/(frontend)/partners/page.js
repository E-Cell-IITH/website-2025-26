import MainSection from "@/components/Partners/Mainsection"
import Basic from "@/components/Partners/basic"
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
            <Basic />
            
        </>
    )
}