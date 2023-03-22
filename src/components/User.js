import { useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function User({ session, userDb }) {
  const user = useSWR("/api/soap/profile");
  const router = useRouter();

  const [name, setName] = useState(session.user.name);
  const [email, setEmail] = useState(session.user.email);

  // useEffect(() => {
  //   setName(session.user.name);
  //   setEmail(session.user.email);
  // }, []);

  async function handleSubmit(event) {
    // Create the User
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);

    console.log("AFTERINPUT", userData);
    const response = await fetch("api/profile", {
      method: "PATCH",
      body: JSON.stringify({
        adress: userData.adress,
        email: userData.email,
        name: userData.name,
      }),
      headers: {
        Accept: "application/json",
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

  // Cookie expired!!

  if (!userDb.adress) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <p>Crea il tuo Profilo:</p>
          <label htmlFor="name">Nome:</label>
          <input
            name="name"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.email);
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
          <button
            type="submit"
            onClick={() => router.push(`/profile/${session.user.id}`)}
          >
            Crea
          </button>
        </form>
      </>
    );
  } else {
    router.push(`/profile/${session.user.id}`);
  }
}
