import { CollectionConfig } from "payload";

export const StartUps: CollectionConfig = {
    slug: "startups",
    fields: [
        {
            name: "start_up_name",
            type: "text",
            label: "Enter startup name"
        },
        {
            name: "start_up_founder",
            type: "text",
            label: "Enter founder name"
        },
        {
            name: "start_up_logo",
            type: "upload",
            label: "Enter logo/image of startup",
            relationTo: "media"
        },
        {
            name: "start_up_website",
            type: "text",
            label: "Enter website link"
        },
    ]
}