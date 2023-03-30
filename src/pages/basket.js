import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BasketSoapCards from "@/components/BasketSoapCards";

export default function Basket() {
  const { data: session } = useSession();
  const router = useRouter();
  // console.log(session.user.id);

  const [basketItem, setBasketItem] = useState();
  const [quantity, setQuantity] = useState();
  const [userData, setUserData] = useState();

  console.log("QUANTITY", quantity);
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
  // console.log(basketItem, quantity);
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
    console.log(newQuantity);
    setQuantity(newQuantity);
  }

  const newOrder = {
    // userId: session.user.user.id,
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

  console.log(typeof dayOfOrder);

  let sum = 0;
  return (
    <>
      <form>
        <h2 className="yourOrder">Il tuo Ordine:</h2>
        {basketItem.soapBasket.map((soap, index) => {
          const price = +soap.price;
          const item = basketItem.basketItems[index];
          const total = quantity[index] * price;
          sum += total;

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
          <label htmlFor="total">Totale:</label>
          <input id="total" name="total" value={sum}></input>
          <button
            type="Submit"
            onClick={
              userData.adress
                ? deleteBasketItemsAndPostOrder
                : router.push("/profile")
            }
          >
            Inviare
          </button>
        </div>
      </form>
    </>
  );
}
