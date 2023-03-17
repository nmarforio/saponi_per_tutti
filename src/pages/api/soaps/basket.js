import Soap from "@/db/model/Soap";
import dbConnect from "@/db/connect";
import BasketItem from "@/db/model/BasketItem";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

  const session = await getSession({ req });

  if (req.method === "GET") {
    const basketItem = await BasketItem.findOne({ userId: session.user.id });
    if (!basketItem) {
      return res.status(404).json({ status: "Not Found" });
    } else {
      const soap = await Soap.findOne({ _id: basketItem.item });
      return res.status(200).json({ basketItem, soap });
    }
  }
}
