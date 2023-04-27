import User from "@/db/model/User";
import dbConnect from "@/db/connect";

import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

  const session = await getSession({ req });

  if (req.method === "PATCH") {
    // If our request method is PUT ...
    const updatedUser = await User.findByIdAndUpdate(session.user.id, {
      $set: req.body,
    });

    return res.status(200).json(updatedUser);
  }

  if (req.method === "GET") {
    if (!session) {
      return res.status(400).json(null);
    } else {
      const user = await User.findById(session.user.id);
      return res.status(200).json(user);
    }
  }
}
