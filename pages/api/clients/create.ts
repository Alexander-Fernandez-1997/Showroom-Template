import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = {
      store_id: 1,
      email: "test_client@test.com",
      password: "123456",
    };
    const { store_id, email, password } = client;

    //create a new client
    const query = await conn.query(
      `INSERT INTO clients (store_id, email, password) VALUES (${store_id}, '${email}', '${password}')`
    );
    //resp "ok" if client created
    res.status(200).json("ok");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
