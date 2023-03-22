import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Basket() {
  const { data: session } = useSession();
  const router = useRouter();
  // console.log(session.user.id);

  const [basketItem, setBasketItem] = useState();
  const [quantity, setQuantity] = useState();

  console.log("QUANTITY", quantity);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/basket");
      const json = await data.json();

      setBasketItem(json);
      // setQuantity(json.basketItems.map)
      setQuantity(json.basketItems.map((item) => +item.quantity));
    };
    fetchData().catch(console.error);
  }, []);
  // console.log(basketItem, quantity);
  if (!basketItem || !session) {
    return <p>Caricamento...</p>;
  }

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
  };

  basketItem.soapBasket.forEach((soap, index) => {
    const newSoap = {
      soapId: soap._id,
      amount: quantity[index],
      soapPrice: soap.price,
    };
    newOrder.total += soap.price * newSoap.amount;
    newOrder.items.push(newSoap);
  });

  console.log("NEWORDER", newOrder);

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

  console.log(basketItem.soapBasket);

  let sum = 0;
  return (
    <>
      <form>
        <h1>Il tuo Ordine</h1>
        {basketItem.soapBasket.map((soap, index) => {
          const price = +soap.price;
          const item = basketItem.basketItems[index];
          const total = quantity[index] * price;
          sum += total;

          return (
            <>
              <p key={soap._id}>{soap.name}</p>
              <label htmlFor="quantity">Quantità</label>
              <input
                key={item._id}
                onChange={(event) => {
                  console.log(event.target.value);
                  updateQuantity(event.target.value, index);
                  // setQuantity(event.target.quantity);
                }}
                id="quantity"
                // this is changed
                name={`${soap._id}`}
                value={quantity[index]}
                type={"number"}
                min={0}
                max={10}
              ></input>
              <p name="eachprice" id="eachprice">
                CHF Prezzo: {total}
              </p>
            </>
          );
        })}
        <label htmlFor="total">Totale:</label>
        <input id="total" name="total" value={sum}></input>
        <button type="Submit" onClick={deleteBasketItemsAndPostOrder}>
          Inviare
        </button>
      </form>
    </>
  );
}
