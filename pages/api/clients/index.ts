import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { client } = req.body;
    console.log("10", client);
    const { store_id, email, password } = client;
    const query = await conn.query(
      `SELECT * FROM clients WHERE store_id = ${store_id} AND email = '${email}' AND password = '${password}'`
    );
    const clientData = query.rows.length > 0 ? query.rows[0] : null;

    res.status(200).json(clientData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
