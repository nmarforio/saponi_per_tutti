import { useState, useEffect } from "react";

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
    return <p>Nessun Ordine</p>;
  }

  return (
    <>
      <h2>Lista dei tuoi ordini</h2>
      {orders.map((order) => {
        const items = order.items;
        const newArray = items.flat();
        return (
          <>
            <div className="orderscard">
              <dt>Ordine numero:</dt>
              <dd className="ordernumber">{order._id}</dd>
              {newArray.map((s) => {
                return (
                  <>
                    <dl>
                      <dt key={s._id}>{s.name}</dt>
                      <dd>Quantità: {s.amount}</dd>
                    </dl>
                  </>
                );
              })}

              <p>Totale CHF: {order.total}</p>
            </div>
          </>
        );
      })}
    </>
  );
}
