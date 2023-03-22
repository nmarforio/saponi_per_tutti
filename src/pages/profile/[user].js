import LoginButton from "@/components/Login-btn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function UserPage({ upDateInput }) {
  const { data: session, status } = useSession();
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState();

  // const [name, setName] = useState(session.user.name);
  // const [email, setEmail] = useState(session.user.email);
  // const [adress, setAdress] = useState(user.adress);

  const router = useRouter();

  console.log("FORM", showForm);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/profile/${session.user.id}`);
      const json = await data.json();

      setUser(json);
    };
    fetchData().catch(console.error);
  }, []);

  if (user === undefined) {
    return <p>Nessun Dato</p>;
  }
  if (showForm) {
    return (
      <>
        <h2>Cambia i toui Dati:</h2>
        <form>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            className="name"
            value={user.name}
            onChange={(event) => {
              setName(event.target.name);
            }}
          ></input>
          <label htmlFor="adress">Indirizzo:</label>
          <input
            id="adress"
            className="adress"
            value={user.adress}
            onChange={(event) => {
              setAdress(event.target.adress);
            }}
          ></input>
          <label htmlFor="email">Nome:</label>
          <input
            id="email"
            className="email"
            value={user.email}
            onChange={(event) => {
              setEmail(event.target.email);
            }}
          ></input>
          <button type="Submit">Salva</button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <h2>I tuoi Dati:</h2>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.adress}</p>

        <LoginButton session={session} />
        <button onClick={() => setShowForm(!showForm)}>
          Cambia i tuoi dati
        </button>
      </>
    );
  }
}
