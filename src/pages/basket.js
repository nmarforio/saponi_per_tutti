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
  // console.log(basketItem);

  return (
    <>
      <h2>I tuoi prodotti:</h2>
      {/* <ul>
        <li>
          {basketItem.soap.name},{basketItem.quantity}
        </li>
      </ul> */}

      <p>stst{content}</p>
    </>
  );
}
