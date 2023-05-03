import dbConnect from "@/db/connect";
import Soap from "@/db/model/Soap";
import BasketItem from "@/db/model/BasketItem";
export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const soaps = await Soap.find();
    return res.status(200).json(soaps);
  }

  if (req.method === "POST") {
    try {
      const basketData = req.body;
      console.log(basketData);
      const basketItem = new BasketItem(basketData);
      await basketItem.save();
      res.status(201).json({ status: "Created BasketItem" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
