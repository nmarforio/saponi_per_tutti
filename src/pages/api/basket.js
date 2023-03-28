import Soap from "@/db/model/Soap";
import dbConnect from "@/db/connect";
import BasketItem from "@/db/model/BasketItem";
import { getSession } from "next-auth/react";
import Order from "@/db/model/Order";
import User from "@/db/model/User";

export default async function handler(req, res) {
  await dbConnect();

  const session = await getSession({ req });

  if (req.method === "GET") {
    const basketItems = await BasketItem.find({ userId: session.user.id });
    const user = await User.findById(session.user.id);

    if (!basketItems) {
      return res.status(404).json({ status: "Not Found" });
    } else {
      const id = basketItems.map((soap) => {
        return soap.soapId;
      });

      const soapBasket = await Soap.find({ _id: id });

      return res.status(200).json({ basketItems, soapBasket, user });
    }
  }

  if (req.method === "POST") {
    try {
      const newOrder = req.body;
      console.log("NEWORDER", newOrder);
      const order = new Order(newOrder);
      await order.save();
      return res.status(201).json("Created Order");
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
  if (req.method === "DELETE") {
    // If our request method is DELETE ...
    const basketItemToDelete = await BasketItem.deleteMany({
      userId: session.user.id,
    });

    return res.status(200).json(basketItemToDelete);
  }
}
