"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";


export const postSingleProducts = async (postData) => {
  try {
    //  Post data section
    const result = await dbConnect(collectionNames.USER_DATA).insertOne(postData);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
