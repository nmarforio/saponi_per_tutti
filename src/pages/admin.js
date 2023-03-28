import { useEffect, useState } from "react";

export default function Admin() {
  const [allOrders, setAllOrders] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/admin");
      const json = await data.json();

      setAllOrders(json);
    };
    fetchData().catch(console.error);
  }, []);

  if (allOrders) {
    console.log("ORDERS", allOrders);
    return (
      <>
        <h2 className="admintitle">Sezione per amministratore</h2>
        <div className="admincard">
          <p>i nuovi ordini</p>
          {allOrders.orders.map((order, index) => {
            const user = allOrders.user;
            order.items.map((item) => {
              return (
                <div key={order.id} className="adminorders">
                  <p>{user.name}</p>
                  <p>{item.name[index]}</p>
                </div>
              );
            });
          })}
        </div>
      </>
    );
  } else {
    <p>nessun Ordine</p>;
  }
}
