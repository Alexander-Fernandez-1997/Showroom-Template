import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { db } = await connectToDatabase();
  if (req.method === "GET") {
    const clothes = await db.collection("clothes").find().toArray();

    res.status(200).json({ clothes });
  }
  if (req.method === "POST") {
    const clothes = await db.collection("clothes").insertOne(req.body);
    res.status(200).json({ clothes });
  }
}
