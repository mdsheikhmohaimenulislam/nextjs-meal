"use server";

import dbConnect from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  try {
    // Need to check if unique username was given

    const result = await dbConnect("User").insertOne(payload);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
