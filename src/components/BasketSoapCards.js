export default function BasketSoapCards({
  soap,
  quantity,
  index,
  item,
  total,
  updateQuantity,
}) {
  return (
    <div className="basketCard">
      <h3 key={soap._id}>{soap.name}</h3>
      <label htmlFor="quantity">quantità:</label>
      <input
        key={item._id}
        onChange={(event) => {
          console.log(event.target.value);
          updateQuantity(event.target.value, index);
          // setQuantity(event.target.quantity);
        }}
        id="quantity"
        // this is changed
        name={`${soap._id}`}
        value={quantity[index]}
        type={"number"}
        min={0}
        max={10}
      ></input>
      <p name="eachprice" id="eachprice">
        CHF Prezzo: {total}
      </p>
    </div>
  );
}
