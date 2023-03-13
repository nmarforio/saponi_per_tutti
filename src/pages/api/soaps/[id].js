import dbConnect from "@/db/connect";
import Soap from "@/db/model/Soap";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    const soaps = await Soap.findById(id);
    return res.status(200).json(soaps);
  }
}
