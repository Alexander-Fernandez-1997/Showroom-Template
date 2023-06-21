import { MongoClient, ObjectId } from "mongodb";
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

async function edit(req: any, resp: any) {
  if (req.method !== "POST") return;

  let query = { _id: new ObjectId(req.body.sameId.toString()) };
  const options = { upsert: true };
  const updateTodo = {
    $set: {
      name: req.body.newName,
      category: req.body.newCategory,
      description: req.body.newDescription,
      image: req.body.newImage,
    },
  };

  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db(MONGODB_DB);
  const collection = db.collection("clothes");

  const result = await collection.findOneAndUpdate(query, updateTodo);
  client.close();

  console.log("updated record::::" + result);

  return resp.json({
    todo: result,
    message: "To do updated!",
  });
}

export default edit;
