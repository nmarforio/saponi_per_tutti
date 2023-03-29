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
      const extendedOrders = [];
      for (const eachorder of orders) {
        // console.log("ORDEEERSSSSS", eachorder);
        const id = eachorder.userId;
        const user = await User.findById(id);
        extendedOrders.push({
          ...eachorder,
          user,
        });
        //extendedOrders.push(eachorder);
      }
      console.log("AERRAAAAY", extendedOrders);
      // const users = await User.findById(id);

      return res.status(200).json(extendedOrders);
    }
  }
}
