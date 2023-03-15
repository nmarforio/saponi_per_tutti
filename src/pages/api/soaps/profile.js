import dbConnect from "@/db/connect";
import User from "@/db/model/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();
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
}
