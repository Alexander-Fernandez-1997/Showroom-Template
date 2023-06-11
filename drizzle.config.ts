import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./src/lib/db/schema.ts",
  out: "./src/lib/db/migrations",
  // user: process.env.PGSQL_USER,
  // password: process.env.PGSQL_PASSWORD,
  // host: process.env.PGSQL_HOST,
  // port: process.env.PGSQL_PORT ? parseInt(process.env.PGSQL_PORT) : 5432,
  // database: process.env.PGSQL_DB,
  connectionString: process.env.DATABASE_URL,
} satisfies Config;
