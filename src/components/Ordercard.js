export default function Ordercard({ order, newArray }) {
  return (
    <>
      <div className="orderscard">
        <span className="orderspan1">
          <p>Ordine numero: </p>
          <p className="ordernumber"> {order._id}</p>
        </span>
        {newArray.map((s) => {
          return (
            <>
              <span className="orderspan2">
                <p key={s._id}>{s.name}</p>
                <p className="orderquantity">quantità: {s.amount}</p>
              </span>
              <p>Data del tuo ordine: {order.date}</p>
            </>
          );
        })}
        <span>
          <p>Totale CHF: {order.total}</p>
        </span>
      </div>
    </>
  );
}
