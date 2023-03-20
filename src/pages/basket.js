import useBasketStore from "@/states/basketStore";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Basket() {
  const content = useBasketStore((state) => state.content);

  const [basketItem, setBasketItem] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/soaps/basket");
      const json = await data.json();

      setBasketItem(json);
    };
    fetchData().catch(console.error);
  }, []);

  if (basketItem === undefined) {
    return <p>Caricamento...</p>;
  } else {
    const priceInt = parseInt(basketItem.soaps[0][0].price);
    const quantityInt = parseInt(basketItem.basketItems[0]._doc.quantity);
    return (
      <>
        <h2>Il tuo ordine:</h2>

        <Link href={`/${basketItem.soaps[0][0]._id}`}>
          {basketItem.soaps[0][0].name}:
        </Link>
        <p>Quantità: {basketItem.basketItems[0]._doc.quantity}</p>
        <p>Prezzo: {priceInt * quantityInt}</p>
      </>
    );
  }
  // if (!JSON.stringify(basketItem) === "{}") {
  //   const quantity = basketItem.basketItems.map((item) => {
  //     item.quantity;
  //   });

  //   if (!JSON.stringify(basketItem) === "{}")
  //     return (
  //       <>
  //         <ul>
  //           {basketItem.soaps.map((soap) => (
  //             <li key={soap.id}>
  //               {soap.name}, {quantity}
  //             </li>
  //           ))}
  //         </ul>
  //       </>
  //     );
  // }
}
