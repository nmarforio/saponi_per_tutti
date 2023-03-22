import { useState, useEffect } from "react";

export default function Order() {
  const [order, setOrder] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/order");
      const json = await data.json();

      setOrder(json);
      // setQuantity(json.basketItems.map)
    };
    fetchData().catch(console.error);
  }, []);
  console.log("ORDDRER", order);

  if (!order) {
    return <p>Nessun Ordine</p>;
  }

  return (
    <>
      <h1>Lista dei tuoi ordini</h1>
    </>
  );
}
