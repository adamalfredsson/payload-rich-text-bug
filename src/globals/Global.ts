import { GlobalConfig } from "payload/types";

export const FailsOnSave: GlobalConfig = {
  slug: "fail",
  fields: [
    {
      name: "content",
      type: "richText",
      localized: true,
    },
  ],
  hooks: {
    afterChange: [async () => {}],
  },
};

export const SucceedsOnSave: GlobalConfig = {
  slug: "succeess",
  fields: [
    {
      name: "content",
      type: "richText",
      localized: true,
    },
  ],
  hooks: {
    // afterChange: [async () => {}],
  },
};
