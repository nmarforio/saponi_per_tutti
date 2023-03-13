import dbConnect from "@/db/connect";
import Soap from "@/db/model/Soap";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const soaps = await Soap.find();
    return res.status(200).json(soaps);
  }
}
