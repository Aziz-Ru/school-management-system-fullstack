import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  schema: "./src/db/schema.ts",
  out: "./src/db/drizzle",
  verbose: true,
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  strict: true,
});
