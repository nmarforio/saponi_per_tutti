import dbConnect from "@/db/connect";
import BasketItem from "@/db/model/BasketItem";

export default async function handler(req, res) {
  await dbConnect();

  const idBasket = req.query;
  // console.log("IDDDDDDD", idBasket);
  const id = idBasket.id;

  if (req.method === "DELETE") {
    const oneItemDelete = await BasketItem.findByIdAndDelete(id);

    return res.status(200).json(oneItemDelete);
  }
}
