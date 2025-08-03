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
            name: "team_member_position",
            type: "text",
            label: "Enter team member position"
        },
        {
            name: "head_or_manager",
            type: "select",
            label: "Select Head or Manager",
            options : ["HEAD","MANAGER"],
        },
        {
            name: "team_member_photo",
            type: "upload",
            relationTo : "media",
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