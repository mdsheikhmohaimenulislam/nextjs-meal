import dbConnect, { collectionNames } from "@/lib/dbConnect";


//  get data section
export async function GET() {
  const data = await dbConnect(collectionNames.USER_DATA).find({}).toArray();

  return Response.json({ data });
}

//  Post data section
export async function POST(req) {
  const postData = await req.json();
  const result = await dbConnect(collectionNames.USER_DATA).insertOne(postData);

  return Response.json(result);
}
