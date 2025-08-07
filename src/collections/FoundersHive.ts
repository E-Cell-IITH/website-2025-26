import { CollectionConfig } from "payload";

export const FoundersHive: CollectionConfig = {
  slug: "sessions",
  fields: [
    {
      name: "city",
      type: "text",
      label: "City",
    },
    {
      name: "date",
      type: "date",
      label: "Session Date",
    },
    {
      name: "venue",
      type: "text",
      label: "Venue",
    },
    {
      name: "registrations",
      type: "number",
      label: "Number of Registrations",
    },
    {
      name: "mentor_name",
      type: "text",
      label: "Mentor's Name",
    },
    {
      name: "mentor_role",
      type: "text",
      label: "Mentor's Role",
    },
    {
      name: "mentor_bio",
      type: "textarea",
      label: "Mentor's Bio",
    },
    {
      name: "itinerary",
      type: "array",
      label: "Session Itinerary",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Activity Title",
        },
        {
          name: "duration",
          type: "text",
          label: "Activity Duration",
        },
      ],
    },
  ],
};
