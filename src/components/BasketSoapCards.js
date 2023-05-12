import styled from "styled-components";

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
    <>
      <StyledH3 key={soap.price_id}>{soap.name}</StyledH3>
      <StyledDiv key={soap.name}>
        <label htmlFor="quantity">quantità:</label>
        <input
          className="basketInput"
          key={soap._id}
          onChange={(event) => {
            updateQuantity(event.target.value, index);
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
          <p>X</p>
        </button>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  background-color: rgb(220, 172, 163);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  box-shadow: 1px 1px 3px 1px rgb(122, 65, 23);
  .basketInput {
    border-radius: 8px;
    border-color: rgb(122, 65, 23);
  }
`;
const StyledH3 = styled.h3`
  margin-bottom: 5px;
`;
