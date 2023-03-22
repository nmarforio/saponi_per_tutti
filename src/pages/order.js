import { useState, useEffect } from "react";

export default function Order() {
  const [orders, setOrders] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/order");
      const json = await data.json();

      setOrders(json);
      // setQuantity(json.basketItems.map)
    };
    fetchData().catch(console.error);
  }, []);

  if (!orders) {
    return <p>Nessun Ordine</p>;
  }

  return (
    <>
      <h1>Lista dei tuoi ordini</h1>
      {orders.map((order) => {
        const items = order.items;
        const newArray = items.flat();
        return (
          <>
            <p>Ordine numero: {order._id}</p>
            {newArray.map((s) => {
              return (
                <>
                  <p key={s._id}>Nome: {s.name}</p>
                  <p>Quantità: {s.amount}</p>
                </>
              );
            })}
            <p>Totale CHF: {order.total}</p>
          </>
        );
      })}
    </>
  );
}
