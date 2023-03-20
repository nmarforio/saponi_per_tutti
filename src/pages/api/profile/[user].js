import User from "@/db/model/User";
import dbConnect from "@/db/connect";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();
  const session = await getSession({ req });

  if (req.method === "GET") {
    const users = await User.findById(session.user.id);

    console.log("HELOOOOOOO", users);
    return res.status(200).json(users);
  }
}
