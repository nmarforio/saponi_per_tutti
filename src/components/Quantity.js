import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import useBasketStore from "@/states/basketStore";

export default function Quantity() {
  const { data: session } = useSession();
  const router = useRouter();
  const store = useBasketStore((state) => state);
  const [count, setCount] = useState();

  async function handelSubmit(event) {
    event.preventDefault();

    if (session === null) {
      router.push("/profile");
    } else {
      const input = event.target.quantity.value;
      store.addItem(input);
      setCount(input);
    }

    const id = router.query.id;
    const response = await fetch(`api/soaps/${id}`, {
      method: "PUT",
      body: JSON.stringify(count, id),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
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
