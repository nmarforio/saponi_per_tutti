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
    // ... find our joke by its ID and update the content that is part of the request body!
    return res.status(200).json(updatedUser);
    // If successful, we'll receive an OK status code.
  }

  if (req.method === "GET") {
    const user = await User.findById(session.user.id);
    return res.status(200).json(user);
  }
}
