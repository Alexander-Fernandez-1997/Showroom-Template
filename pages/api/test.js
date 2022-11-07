import conn from "../../lib/db";

export default async (req, resp) => {
  try {
    const query = await conn.query("SELECT * FROM variants");
    console.log(query.rows);
    resp.status(200).json(query.rows);
  } catch (e) {
    resp.status(500).json(e.toString());
  }
};
