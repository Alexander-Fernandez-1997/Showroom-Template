import { MongoClient, ObjectId } from "mongodb";
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

async function handler(req: any, resp: any) {
  const { clotheId } = req.query;

  if (req.method !== "DELETE") return;

  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db(MONGODB_DB);
  const collection = db.collection("clothes");
  const result = await (
    await collection.deleteOne({ _id: new ObjectId(clotheId) })
  ).deletedCount;
  client.close();

  console.log("deleted count::::" + result);

  return resp.json({
    clothe: result,
    message: "To do deleted",
  });
}

export default handler;
