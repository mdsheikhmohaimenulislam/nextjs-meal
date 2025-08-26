"use server";

import dbConnect from "@/lib/dbConnect";


export const postSingleProducts = async (postData) => {
  try {
    //  Post data section
    const result = await dbConnect("jobs").insertOne(postData);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
