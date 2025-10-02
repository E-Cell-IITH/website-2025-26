import { getPayload } from "payload";
import config from "@payload-config";
import PartnersComponent from "../../../components/Partners/HeroPartners"
import { ChevronDown } from "lucide-react";


export default async function partners() {

    const payload = await getPayload({ config });

    const sponsorshipPartners = await payload.find({
        collection: "sponsorshipPartners",
        limit: 1000000,
    });

    // console.log(sponsorshipPartners.docs)


    return (
        <>
                
            <PartnersComponent partnersData={sponsorshipPartners.docs} />
        </>
    )
}