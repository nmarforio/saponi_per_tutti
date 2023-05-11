export default function OrderAdminSection({ allOrders }) {
  return allOrders.map((order, index) => {
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
  });
}
