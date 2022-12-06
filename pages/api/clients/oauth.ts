import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { client } = req.body;
    const { store_id, email, password } = client;
    const query = await conn.query(
      `SELECT * FROM clients WHERE store_id = ${store_id} AND email = '${email}'`
    );
    let clientData = query.rows.length > 0 ? query.rows[0] : null;
    if (clientData == null) {
      // create new client
      const newClient = await conn.query(
        `INSERT INTO clients (store_id, email, password) VALUES (${store_id}, '${email}', '${password}') RETURNING *`
      );
      clientData = newClient.rows[0];
    }
    res.status(200).json(clientData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
