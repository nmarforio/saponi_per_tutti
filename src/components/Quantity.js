import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import useBasketStore from "@/states/basketStore";

export default function Quantity() {
  const [count, setCount] = useState(0);
  const { data: session } = useSession();
  const router = useRouter();
  const store = useBasketStore((state) => state);

  function handelSubmit(event) {
    event.preventDefault();

    if (session === null) {
      router.push("/profile");
    } else {
      const input = event.target.quantity.value;
      console.log(input);
      store.addItem(input);
    }
  }
  return (
    <>
      {store.items}
      <form onSubmit={handelSubmit}>
        <label htmlFor="quatity">Quantità</label>

        <input
          id="quantity"
          placeholder="0"
          max="10"
          min="0"
          type={"number"}
        ></input>
        <button type="submit">Aggiungi al Cestino</button>
      </form>
    </>
  );
}
