import { CollectionConfig } from "payload";

export const Collaborations: CollectionConfig = {
    slug: "collaborations",
    fields: [
        {
            name: "collaborations_logo",
            type: "upload",
            relationTo: "media",
            label: "Enter speaker name"
        },
    ]
}