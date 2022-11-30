import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Examples: CollectionConfig = {
  slug: "examples",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "someField",
      type: "richText",
      localized: true,
    },
  ],
};

export default Examples;
