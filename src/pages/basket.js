import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BasketSoapCards from "@/components/BasketSoapCards";
import { checkout } from "../../checkout";

export default function Basket() {
  const { data: session } = useSession();
  const router = useRouter();

  const [basketItem, setBasketItem] = useState();
  const [quantity, setQuantity] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/basket");
      const json = await data.json();

      setBasketItem(json);
      setQuantity(json.basketItems.map((item) => +item.quantity));
      setUserData(json.user);
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
    };
    console.log(soap.name);
    newOrder.total += soap.price * newSoap.amount;
    newOrder.items.push(newSoap);
  });

  async function deleteBasketItemsAndPostOrder(event) {
    event.preventDefault();
    const res = await fetch(`/api/basket`, {
      method: "DELETE",
    });

    const response = await fetch(`/api/basket`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
    router.push("/order");
  }

  function sendingCost(quantity, total) {
    if (quantity > 1 && quantity <= 3) {
      return total + 7;
    } else if (quantity > 3 && quantity <= 6) {
      return total + 3.5;
    } else {
      return total + 0;
    }
  }

  //https://www.youtube.com/watch?v=YQjB1ZjTj8c STRIPE Payment

  let sum = 0;
  return (
    <>
      <form>
        <h2 className="yourOrder">Il tuo Ordine:</h2>
        {basketItem.soapBasket.map((soap, index) => {
          const price = +soap.price;
          const item = basketItem.basketItems[index];
          const total = quantity[index] * price;
          sum += sendingCost(quantity, total);

          return (
            <>
              <BasketSoapCards
                item={item}
                soap={soap}
                quantity={quantity}
                index={index}
                total={total}
                updateQuantity={updateQuantity}
              />
            </>
          );
        })}
        <div className="total">
          <label htmlFor="total">Totale incluso spese:</label>
          <input id="total" name="total" value={sum}></input>
          <button
            type="Submit"
            onClick={
              userData.adress
                ? deleteBasketItemsAndPostOrder
                : router.push("/profile")
            }
          >
            compra
          </button>
        </div>
      </form>
    </>
  );
}
