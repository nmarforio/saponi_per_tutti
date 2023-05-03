import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BasketSoapCards from "@/components/BasketSoapCards";

export default function Basket() {
  const { data: session } = useSession();
  const router = useRouter();

  const [basketItem, setBasketItem] = useState();
  const [quantity, setQuantity] = useState();
  const [userData, setUserData] = useState();
  const [idItemsBasketToDelete, setIdItemsBasketToDelete] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/basket");
      const json = await data.json();

      setBasketItem(json);
      setQuantity(json.basketItems.map((item) => +item.quantity));
      setUserData(json.user);
      setIdItemsBasketToDelete(json.basketItemsId);
    };
    fetchData().catch(console.error);
  }, []);

  if (!basketItem || !session || !userData) {
    return <p className="yourOrder">Cestino vuoto</p>;
  }

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let dayOfOrders = `${day}-${month}-${year}`;

  function updateQuantity(value, index) {
    const newQuantity = [...quantity];
    newQuantity[index] = +value;
    setQuantity(newQuantity);
  }

  const newOrder = {
    total: 0,
    items: [],
    userId: session.user.id,
    status: "New",
    date: dayOfOrders,
  };

  basketItem.soapBasket.forEach((soap, index) => {
    const newSoap = {
      soapId: soap._id,
      amount: quantity[index],
      soapPrice: soap.price,
      name: soap.name,
      price_id: soap.price_id,
    };
    newOrder.total += soap.price * newSoap.amount;
    newOrder.items.push(newSoap);
  });

  // let stripePromise = null;
  // const getStripe = () => {
  //   if (!stripePromise) {
  //     stripePromise = loadStripe(
  //       process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  //     );
  //   }
  //   return stripePromise;
  // };

  // const redirectToCheckout = async () => {
  //   const {
  //     data: { id },
  //   } = await axios.post("/api/checkout_sessions", {
  //     itmes: Object.entries(newOrder.items).map(([_, { id, quantity }]) => ({
  //       price: id,
  //       quantity,
  //     })),
  //   });

  //   console.log(items);

  //   const stripe = await getStripe();
  //   await stripe.redirectToCheckout({ sessionId: id });
  // };
  // async function deleteBasketItemsAndPostOrder(event) {
  //   event.preventDefault();

  //   if (window !== "undefined") {
  //     const setLocalStorage = localStorage.setItem(
  //       "orderKey",
  //       JSON.stringify(newOrder)
  //     );
  //   }

  //   const res = await fetch(`/api/basket`, {
  //     method: "DELETE",
  //   });

  //   const response = await fetch(`/api/basket`, {
  //     method: "POST",
  //     body: JSON.stringify(newOrder),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   if (response.ok) {
  //     await response.json();
  //   } else {
  //     console.error(`Error: ${response.status}`);
  //   }

  function sendingCost(quantity, total) {
    if (quantity > 1 && quantity <= 3) {
      return total + 7;
    } else if (quantity > 3 && quantity <= 6) {
      return total + 3.5;
    } else {
      return total + 0;
    }
  }

  async function basketItmeToDelete(id) {
    const res = await fetch(`/api/basket/${id}`, {
      method: "DELETE",
    });
  }

  let sum = 0;
  return (
    <>
      <form>
        <h2 className="yourOrder">Il tuo Ordine:</h2>
        {basketItem.soapBasket.map((soap, index) => {
          const price = +soap.price;
          const total = quantity[index] * price;
          sum += sendingCost(quantity, total);

          return (
            <>
              <BasketSoapCards
                soap={soap}
                quantity={quantity}
                index={index}
                total={total}
                updateQuantity={updateQuantity}
                onDelete={basketItmeToDelete}
                idtoDelete={idItemsBasketToDelete}
              />
            </>
          );
        })}
        <div className="total">
          <label htmlFor="total">Totale incluso spese:</label>
          <input id="total" name="total" defaultValue={sum}></input>
          <button type="Submit">compra</button>
        </div>
      </form>
    </>
  );
}
