import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const data = req.body;
  console.log("HAAAAAALLLOOOO", data);
  const items = data.items?.map((soap) => {
    return { price: soap.price_id, quantity: soap.amount };
  });
  console.log("PRICE AND AMOUNT", items);

  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.session.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: items,
        success_url: `${req.headers.origin}/order`,
        cancel_url: `${req.headers.origin}/basket`,
      });

      res.status(200).json(session);
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not Allowed");
  }
}
