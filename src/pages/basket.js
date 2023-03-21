import useBasketStore from "@/states/basketStore";
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
    };
    fetchData().catch(console.error);
  }, []);
  console.log(basketItem);

  // if (basketItem) {
  //   useEffect(() => {
  //     setQuantity(basketItem.basketItems.quantity);
  //   }, []);

  // console.log(filterBasket);

  // console.log("SOAP", soaps);

  if (basketItem === undefined) {
    return <p>Caricamento...</p>;
  } else {
    return (
      <>
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
                name="quantiy"
                value={quantityItem}
                type={"number"}
              ></input>
            </>
          );
        })}
      </>
    );
  }
}
