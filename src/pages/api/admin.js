import Order from "@/db/model/Order";
import { getSession } from "next-auth/react";
import dbConnect from "@/db/connect";
import User from "@/db/model/User";

export default async function handler(req, res) {
  await dbConnect();
  const session = await getSession({ req });

  if (req.method === "GET") {
    const orders = await Order.find();
    if (!orders) {
      return res.status(404).json({ status: "Not Found" });
    } else {
      const id = orders.map((order) => {
        return order.userId;
      });

      const user = await User.findById(id);

      return res.status(200).json({ orders, user });
    }
  }
}
