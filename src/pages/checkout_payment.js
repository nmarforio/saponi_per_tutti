import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PreviewPage() {
  const [ordersFromBasket, setOrdersFromBasket] = useState();
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrdersFromBasket(localStorage.getItem("orderKey"));
    }
  }, []);

  // console.log("My ORFDER!!", ordersFromBasket);
  console.log("AAaaaaaaaaaaaaaaa", ordersFromBasket);

  async function handlersubmit(event) {
    event.preventDefault();

    const checkoutSession = await fetch("/api/checkout_session", {
      method: "POST",
      body: ordersFromBasket,
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      },
    });
  }

  return (
    <form onSubmit={handlersubmit}>
      <section>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
}
