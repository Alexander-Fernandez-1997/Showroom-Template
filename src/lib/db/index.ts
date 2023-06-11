import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import "dotenv/config";

let conn;
const connectionString = process.env.DATABASE_URL;

if (!conn) {
  conn = new Pool({ connectionString });

  // conn = new Pool({
  //   user: process.env.PGSQL_USER,
  //   password: process.env.PGSQL_PASSWORD,
  //   host: process.env.PGSQL_HOST,
  //   port: process.env.PGSQL_PORT ? parseInt(process.env.PGSQL_PORT) : 5432,
  //   database: process.env.PGSQL_DB,
  //   ssl: {
  //     rejectUnauthorized: false,
  //   },
  // });
}

export const db = drizzle(conn);
