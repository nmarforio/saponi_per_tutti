import { useState, useEffect } from "react";
import Ordercard from "@/components/Ordercard";

export default function Order() {
  const [orders, setOrders] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/order");
      const json = await data.json();

      setOrders(json);
    };
    fetchData().catch(console.error);
  }, []);

  if (!orders) {
    return <p className="ordertitle">Nessun dato / Caricamento...</p>;
  }

  return (
    <>
      <h2 className="ordertitle">Lista dei tuoi ordini:</h2>
      {orders.map((order) => {
        const items = order.items;
        const newArray = items.flat();
        return <Ordercard key={order._id} order={order} newArray={newArray} />;
      })}
    </>
  );
}
