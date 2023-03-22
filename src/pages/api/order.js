import Order from "@/db/model/Order";
import { getSession } from "next-auth/react";
import dbConnect from "@/db/connect";

export default async function handler(req, res) {
  await dbConnect();
  const session = await getSession({ req });

  if (req.method === "GET") {
    const orders = await Order.find({ userId: session.user.id });
    return res.status(200).json(orders);
  }
}
