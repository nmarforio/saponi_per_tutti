import { useRouter } from "next/router";
import { useState } from "react";

export default function FormNewUser({ session }) {
  const [name, setName] = useState(session.user.name);
  const [email, setEmail] = useState(session.user.email);

  async function handleSubmit(event) {
    // Create the User
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);

    const response = await fetch("/api/profile", {
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

  const router = useRouter();

  return (
    <>
      <h2 className="createProfile">Crea il tuo Profilo:</h2>
      <div className="formNewUser">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input
            name="name"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.email);
            }}
            required
          ></input>
          <label htmlFor="adress">Indirizzo:</label>
          <textarea name="adress" id="adress" required></textarea>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.email);
            }}
            required
          ></input>
          <button
            className="createButton"
            type="submit"
            onClick={() => router.push(`/profile/${session.user.id}`)}
          >
            Crea
          </button>
        </form>
      </div>
    </>
  );
}
