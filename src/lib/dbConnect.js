import { MongoClient, ServerApiVersion } from "mongodb";


export const collectionNames = {
  TEXT_USER: "User",
  USER_DATA:"jobs"
}



function dbConnect(collectionName) {
  const uri = process.env.MONGODB_URL;

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_N).collection(collectionName);
}

export default dbConnect;
