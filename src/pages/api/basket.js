import Soap from "@/db/model/Soap";
import dbConnect from "@/db/connect";
import BasketItem from "@/db/model/BasketItem";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

  const session = await getSession({ req });
  console.log("USERID", session.user.id);

  if (req.method === "GET") {
    const basketItems = await BasketItem.find({ userId: session.user.id });

    console.log("BASKETITEMSSS", basketItems);

    if (!basketItems) {
      return res.status(404).json({ status: "Not Found" });
    } else {
      const id = basketItems.map((soap) => {
        return soap.soapId;
      });

      const soapBasket = await Soap.find({ _id: id });
      console.log("SOAP", soapBasket);
      return res.status(200).json({ basketItems, soapBasket });
    }
  }
}
