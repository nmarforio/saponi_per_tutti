import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import useBasketStore from "@/states/basketStore";

export default function Quantity() {
  const { data: session } = useSession();
  const router = useRouter();
  const store = useBasketStore((state) => state);

  async function handelSubmit(event) {
    event.preventDefault();
    let input = 0;
    if (session === null) {
      router.push("/profile");
    } else {
      input = event.target.quantity.value;
      store.addItem(input);
      console.log("INPUT", input);
    }

    const id = router.query.id;
    const response = await fetch(`api/soaps/${id}`, {
      method: "POST",
      body: JSON.stringify({
        soapId: id,
        userId: session.user.id,
        quantity: input,
      }),
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
