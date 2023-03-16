import dbConnect from "@/db/connect";
import User from "@/db/model/Profile";

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

  // const a = req.param;
  // console.dir(a);

  // if (req.method === "GET") {
  //   const soaps = await User.findOne({ email: user.email });
  //   return res.status(200).json(soaps);
  // }
}
