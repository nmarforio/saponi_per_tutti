export default function BasketSoapCards({
  soap,
  quantity,
  index,
  total,
  updateQuantity,
  onDelete,
  idtoDelete,
}) {
  return (
    <div key={soap.name} className="basketCard">
      <h3 key={soap.price_id}>{soap.name}</h3>
      <label htmlFor="quantity">quantità:</label>
      <input
        key={soap._id}
        onChange={(event) => {
          console.log(event.target.value);
          updateQuantity(event.target.value, index);
          // setQuantity(event.target.quantity);
        }}
        id="quantity"
        name="quantity"
        defaultValue={quantity[index]}
        type="number"
        min={0}
        max={10}
      ></input>
      <p name="eachprice" id="eachprice">
        CHF Prezzo: {total}
      </p>
      <button
        onClick={() => {
          onDelete(idtoDelete[index]);
        }}
      >
        <p>Elimina</p>
      </button>
    </div>
  );
}
