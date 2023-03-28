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
        </div>
      </>
    );
  } else {
    <p>nessun Ordine</p>;
  }
}
