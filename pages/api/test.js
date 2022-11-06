import conn from "../../lib/db";

export default async (req, resp) => {
  try {
    const query = await conn.query("SELECT * FROM variants");
    resp.status(200).json(query);
  } catch (e) {
    resp.status(500).json(e.toString());
  }
};
