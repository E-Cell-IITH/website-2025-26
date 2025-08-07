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
