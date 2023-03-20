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

    if (!basketItems) {
      return res.status(404).json({ status: "Not Found" });
    } else {
      const soapBasket = basketItems.map((basketItem) => {
        const soap = Soap.find({ _id: basketItem.item });
        console.log(soap, basketItems);

        return res.status(200).json(...basketItems, soap);
      });
      // return Promise.all(soapPromisses).then((soaps) => {
      //   console.log({ basketItems: x, soaps });
      //   return res.status(200).json({ basketItems: soapBasket, soaps });
      // });
    }
  }
}
