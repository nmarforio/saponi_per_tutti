import dbConnect from "@/db/connect";
import BasketItem from "@/db/model/BasketItem";
import Soap from "@/db/model/Soap";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    const soap = await Soap.findById(id);
    return res.status(200).json(soap);
  }
  if (req.method === "PUT") {
    console.log("AAAAAAA", req.body);
    const newRating = await Soap.findByIdAndUpdate(id, {
      $push: req.body,
    });
    return res.status(200).json(newRating);
  }
}
