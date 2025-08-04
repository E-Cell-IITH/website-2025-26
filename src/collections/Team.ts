import { CollectionConfig } from "payload";

export const Team: CollectionConfig = {
    slug: "team",
    fields: [
        {
            name: "team_member_name",
            type: "text",
            label: "Enter team member name"
        },
        {
            name: "head_or_manager",
            type: "select",
            label: "Select Position",
            options: ["HEAD", "MANAGER", "OC", "VICE OC"],
        },
        {
            name: "enter_domain",
            type: "select",
            options: ["WEB", "PRN", "CRF", "OPS", "IDEATION", "MEDIA_OUTREACH", "MULTIMEDIA", "DESIGN", "EVENTS", "MARKETING"],
            label: "Enter Domain"
        },
        {
            name: "team_member_photo",
            type: "upload",
            relationTo: "media",
            label: "Upload photo"
        },
        {
            name: "team_member_linked_in",
            type: "text",
            label: "Enter linkedin url"
        },
        {
            name: "team_member_mail",
            type: "text",
            label: "Enter email id"
        },
    ]
}