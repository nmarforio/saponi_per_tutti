import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BasketSoapCards from "@/components/BasketSoapCards";
import styled from "styled-components";

export default function Basket() {
  const { data: session } = useSession();
  const router = useRouter();

  const [basketItem, setBasketItem] = useState();
  const [quantity, setQuantity] = useState();
  const [userData, setUserData] = useState();
  const [idItemsBasketToDelete, setIdItemsBasketToDelete] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/basket");
      const json = await data.json();

      setBasketItem(json);
      setQuantity(json.basketItems.map((item) => +item.quantity));
      setUserData(json.user);
      setIdItemsBasketToDelete(json.basketItemsId);
    };
    fetchData().catch(console.error);
  }, []);

  if (!basketItem || !session || !userData) {
    return <p className="yourOrder">Cestino vuoto</p>;
  }

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let dayOfOrders = `${day}-${month}-${year}`;

  function updateQuantity(value, index) {
    const newQuantity = [...quantity];
    newQuantity[index] = +value;
    setQuantity(newQuantity);
  }

  const newOrder = {
    total: 0,
    items: [],
    userId: session.user.id,
    status: "New",
    date: dayOfOrders,
  };

  basketItem.soapBasket.forEach((soap, index) => {
    const newSoap = {
      soapId: soap._id,
      amount: quantity[index],
      soapPrice: soap.price,
      name: soap.name,
      price_id: soap.price_id,
    };
    newOrder.total += soap.price * newSoap.amount;
    newOrder.items.push(newSoap);
  });

  function sendingCost(quantityForTotal, upDatedTotal) {
    console.log(quantityForTotal);
    if (quantityForTotal > 1 && quantityForTotal <= 3) {
      return upDatedTotal + 7;
    } else if (quantityForTotal > 3 && quantityForTotal <= 6) {
      return upDatedTotal + 3.5;
    } else {
      return upDatedTotal + 0;
    }
  }

  async function basketItmeToDelete(id) {
    const res = await fetch(`/api/basket/${id}`, {
      method: "DELETE",
    });
  }

  let sum = 0;
  return (
    <>
      <form>
        <h2 className="basketOrder">Cestino</h2>
        {basketItem.soapBasket.map((soap, index) => {
          const price = +soap.price;
          const total = quantity[index] * price;
          sum += sendingCost(quantity, total);

          return (
            <>
              <div>
                <BasketSoapCards
                  soap={soap}
                  quantity={quantity}
                  index={index}
                  total={total}
                  updateQuantity={updateQuantity}
                  onDelete={basketItmeToDelete}
                  idtoDelete={idItemsBasketToDelete}
                />
              </div>
            </>
          );
        })}
        <StyledTotalDiv className="total">
          <label htmlFor="total">Totale incluso spese:</label>
          <input
            className="inputTotal"
            id="total"
            name="total"
            defaultValue={total}
          ></input>
          <button className="buttonTotal" type="Submit">
            compra
          </button>
        </StyledTotalDiv>
      </form>
    </>
  );
}

const StyledTotalDiv = styled.div`
  background-color: rgb(220, 172, 163);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30%;
  box-shadow: 1px 1px 3px 1px rgb(122, 65, 23);
  height: 10%;
  .inputTotal {
    width: 15%;
    border-radius: 8px;
    border-color: rgb(122, 65, 23);
  }
  .buttonTotal {
    background-color: white;
    color: black;
    border: 2px solid rgb(122, 65, 23);
    border-radius: 8px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
`;
