import path from "path";
import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import { FailsOnSave, SucceedsOnSave } from "./globals/Global";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Users],
  globals: [SucceedsOnSave, FailsOnSave],
  localization: {
    defaultLocale: "en",
    locales: ["en", "zh"],
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
