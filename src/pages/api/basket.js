import Soap from "@/db/model/Soap";
import dbConnect from "@/db/connect";
import BasketItem from "@/db/model/BasketItem";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

  const session = await getSession({ req });

  if (req.method === "GET") {
    const basketItems = await BasketItem.find({ userId: session.user.id });

    if (!basketItems) {
      return res.status(404).json({ status: "Not Found" });
    } else {
      const id = basketItems.map((soap) => {
        return soap.soapId;
      });

      const soapBasket = await Soap.find({ _id: id });

      return res.status(200).json({ basketItems, soapBasket });
    }
  }

  if (req.method === "POST") {
    try {
      const newOrder = req.body;
      cosole.log("NEWORDER", newOrder);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
  if (req.method === "DELETE") {
    // If our request method is DELETE ...
    const basketItemToDelete = await BasketItem.findByIdAndDelete({
      userId: session.user.id,
    });

    return response.status(200).json();
  }
}
