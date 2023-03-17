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
