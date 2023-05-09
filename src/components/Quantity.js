import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Quantity({ soapId }) {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    let input = 0;
    if (!session) {
      router.push("/profile");
    } else {
      input = event.target.quantity.value;
      const id = event.target.btn.value;

      window.alert("Articolo aggiunto al carrello!");

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
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="quatity">Quantità:</label>
        <input
          id="quantity"
          placeholder="0"
          max="10"
          min="0"
          type="number"
        ></input>
        <button className="addBasket" id="btn" value={soapId} type="submit">
          Aggiungi al Cestino
        </button>
      </form>
    </>
  );
}
