import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function hanlder(req, res) {
  const id = req.query.id;

  try {
    if (!id.startWith("cs_")) {
      throw Error("Incorrect ChekcoutSession ID.");
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(id);
    res.status(200).json(checkout_session);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
