import { useState, useEffect } from "react";
import Link from "next/link";
import { createGlobalStyle } from "styled-components";

export default function Basket() {
  const [basketItem, setBasketItem] = useState();
  const [quantity, setQuantity] = useState();

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

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.quantity);
  }

  if (basketItem === undefined) {
    return <p>Caricamento...</p>;
  } else {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <h1>Il tuo Ordine</h1>
          {basketItem.soapBasket.map((soap, index) => {
            const price = +soap.price;
            const item = basketItem.basketItems[index];
            const quantityItem = +item.quantity;

            return (
              <>
                <p key={soap._id}>{soap.name}</p>
                <label htmlFor="quantity">Quantità</label>
                <input
                  key={item._id}
                  onChange={(event) => {
                    setQuantity(event.target.quantity);
                  }}
                  id="quantity"
                  name={`quantity${[index]}`}
                  value={quantity[index]}
                  type={"number"}
                ></input>
                <p>CHF Prezzo: {quantityItem * price}</p>
              </>
            );
          })}
          <button type="Submit">Inviare</button>
        </form>
      </>
    );
  }
}
