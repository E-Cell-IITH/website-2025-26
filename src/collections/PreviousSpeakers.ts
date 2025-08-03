import { CollectionConfig } from "payload";

export const PreviousSpeakers: CollectionConfig = {
    slug: "previousSpeakers",
    fields: [
        {
            name: "speaker_name",
            type: "text",
            label: "Enter speaker name"
        },
        {
            name: "speaker_position",
            type: "text",
            label: "Enter speaker position"
        },
        {
            name: "speaker_image",
            type: "upload",
            label: "Enter image of speaker",
            relationTo: "media"
        },
    ]
}