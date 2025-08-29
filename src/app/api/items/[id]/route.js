import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// get data section
export async function GET(req, { params }) {
  const p = await params;

  const singleData = await dbConnect(collectionNames.USER_DATA).findOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(singleData);
}

// get data section
export async function DELETE(req, { params }) {
  const p = await params;
  const responseDeleted = await dbConnect(collectionNames.USER_DATA).deleteOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(responseDeleted);
}

// get data section
export async function PATCH(req, { params }) {
  const p = await params;
  const postData = await req.json();
  const filter = { _id: new ObjectId(p.id) };
  const updateResponse = await dbConnect(collectionNames.USER_DATA).updateOne(filter, {
    $set: { ...postData },
  });

  return Response.json(updateResponse);
}
