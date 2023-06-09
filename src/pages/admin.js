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
        <h2 className="admintitle">Nuovi Ordini</h2>

        {allOrders.map((order, index) => {
          return (
            <div className="admincard" key={order._doc._id}>
              <p>Cliente: {order.user?.name}</p>
              <p>Indirizzo: {order.user?.adress}</p>

              <p>Stato: {order._doc.status}</p>
              <>Data ordine: {order._doc.date}</>
              {order._doc.items.map((soap) => {
                return (
                  <>
                    <p>Prodotto: {soap.name}</p>
                    <p>Quantità: {soap.amount}</p>
                  </>
                );
              })}
              <p>Totale: {order._doc.total}</p>
            </div>
          );
        })}
      </>
    );
  }
}
