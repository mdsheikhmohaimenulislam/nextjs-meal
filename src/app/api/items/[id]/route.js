import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// get data section
export async function GET(req, { params }) {
  const p = await params;

  const singleData = await dbConnect("jobs").findOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(singleData);
}

// get data section
export async function DELETE(req, { params }) {
  const p = await params;
  const responseDeleted = await dbConnect("jobs").deleteOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(responseDeleted);
}

// get data section
export async function PATCH(req, { params }) {
  const p = await params;
  const postData = await req.json();
  const filter = { _id: new ObjectId(p.id) };
  const updateResponse = await dbConnect("jobs").updateOne(filter, {
    $set: { ...postData },
  });

  return Response.json(updateResponse);
}
