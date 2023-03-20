import Soap from "@/db/model/Soap";
import dbConnect from "@/db/connect";
import BasketItem from "@/db/model/BasketItem";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

  const session = await getSession({ req });

  if (req.method === "GET") {
    const basketItems = await BasketItem.find({
      userId: session.user.id,
    }).populate("soap_id");
    console.log(basketItems);

    const soapPromisses = [];
    if (!basketItems) {
      return res.status(404).json({ status: "Not Found" });
    } else {
      const x = basketItems.map((basketItem) => {
        const soap = Soap.find({ _id: basketItem.item });
        soapPromisses.push(soap);
        return { ...basketItem };
      });
      return Promise.all(soapPromisses).then((soaps) => {
        console.log({ basketItems: x, soaps });
        return res.status(200).json({ basketItems: x, soaps });
      });
    }
  }
}