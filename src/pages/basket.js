import useBasketStore from "@/states/basketStore";
import { useState, useEffect } from "react";

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
  console.log(basketItem.basketItems[0]._doc.quantity);

  if (basketItem === undefined) {
    return <p>Caricamento...</p>;
  } else {
    return (
      <>
        <h2>Il tuo ordine:</h2>
        <p>
          {basketItem.soaps[0][0].name}, quantità:
          {basketItem.basketItems[0]._doc.quantity}
        </p>
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
