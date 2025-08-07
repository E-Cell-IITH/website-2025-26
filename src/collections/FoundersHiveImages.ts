import { CollectionConfig } from "payload";

export const FoundersHiveImages : CollectionConfig = {
    slug : "foundersHiveImages",
    fields : [
        {
            name :  "founders_hive_image",
            label : "Upload Image",
            type : "upload",
            relationTo : "media"
        }
    ]
}