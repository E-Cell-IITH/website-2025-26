import { CollectionConfig } from "payload";

export const SponsorshipPartners: CollectionConfig = {
  slug: "sponsorshipPartners",
  fields: [
    {
      name: "name",
      label: "Partner Name",
      type: "text",
    },
    {
      name : "partner_type",
      label : "Partner Type",
      type : "text"
    },
    {
      name: "images",
      label: "Partner Images",
      type: "array",
      fields: [
        {
          name: "image",
          label: "Upload Image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
