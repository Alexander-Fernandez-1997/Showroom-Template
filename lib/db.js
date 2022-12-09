import { Pool } from "pg";

let conn;

if (!conn) {
  conn = new Pool({
    user: "fernandezalexander0",
    password: "UxjC7AP8olHw",
    host: "super-bread-297211.cloud.neon.tech",
    port: "5432",
    database: "showroom-template",
    ssl: {
      rejectUnauthorized: false,
    },
  });
}

export default conn;
