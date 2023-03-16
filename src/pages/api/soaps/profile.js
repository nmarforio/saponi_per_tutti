import dbConnect from "@/db/connect";
import User from "@/db/model/Profile";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const userData = req.body;
      const user = new User(userData);

      await user.save();
      res.status(201).json({ status: "User created" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
  const session = await getSession({ req });

  if (req.method === "GET") {
    const user = await User.findOne({ id: session.id });
    return res.status(200).json(user);
  }
}
