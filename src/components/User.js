import { useState, useEffect } from "react";
import useSWR from "swr";
import Router from "next/router";
import DetailProfile from "@/components/DetailProfile";

export default function User({ session, userDb }) {
  const user = useSWR("/api/soap/profile");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(session.user.name);
    setEmail(session.user.email);
  }, []);

  async function handelSubmit(event) {
    // Create the User
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);

    const response = await fetch("api/soaps/profile", {
      method: "POST",
      body: JSON.stringify(userData),
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
  // I WANT TO .PUSH() THE PAGE TO REFRESH THE DATA

  if (session && !userDb) {
    return (
      <>
        <form onSubmit={handelSubmit}>
          <p>Crea il tuo Profilo:</p>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.name);
            }}
          ></input>
          <label htmlFor="adress">Indirizzo:</label>
          <input name="adress" id="adress"></input>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.email);
            }}
          ></input>
          <button type="submit">Crea</button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <DetailProfile userDb={userDb} />
      </>
    );
  }
}
