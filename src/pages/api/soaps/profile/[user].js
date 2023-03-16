import dbConnect from "@/db/connect";
import Profile from "@/db/model/Profile";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();
  const session = getSession({ req });

  if (req.method === "GET") {
    const profile = await Profile.findById(session.id);
    return res.status(200).json(profile);
  }
}
