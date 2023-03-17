import dbConnect from "@/db/connect";
import Profile from "@/db/model/User";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

  const session = await getSession({ req });

  if (method.req === "GET") {
    const basketItem = Profile.findOne({ id: session.id });
    return res.status(200).json(basketItem);
  }
}
