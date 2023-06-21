import conn from "../../lib/db";
import storeKey from "../../utils/storeKey";

export default async (req, resp) => {
  try {
    const query = await conn.query(
      `SELECT * FROM clothes WHERE id = ${storeKey}`
    );
    resp.status(200).json(query.rows);
  } catch (e) {
    resp.status(500).json(e.toString());
  }
};
