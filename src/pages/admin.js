import { useEffect, useState } from "react";
import OrderAdminSection from "@/components/OrderAdminSection";

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
        <OrderAdminSection allOrders={allOrders} />
      </>
    );
  }
}
