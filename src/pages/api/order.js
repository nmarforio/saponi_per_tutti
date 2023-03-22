import Order from "@/db/model/Order";
import { getSession } from "next-auth/react";
import dbConnect from "@/db/connect";

export default async function handler(req, res) {
  await dbConnect();
  const session = getSession({ req });
  console.log("Session", session);

  if (req.method === "GET") {
    const orders = await Order.find();
    return res.status(200).json(orders);
  }
}
