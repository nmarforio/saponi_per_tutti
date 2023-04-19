const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  const newOrder = req.body;
  console.log("Hello", newOrder);

  let line_items = [];
  if (newOrder) {
    newOrder.items?.map((item) => {
      return line_items.push({ price: item.price_id, quantity: item.amount });
    });
  }
  console.log("OBJECT FOT THE CHECKOUT", line_items);

  if (req.method === "POST" && line_items) {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
