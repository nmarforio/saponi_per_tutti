import LoginButton from "@/components/Login-btn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function UserPage() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/profile/${session.user.id}`);
      const json = await data.json();

      setUser(json);
    };
    fetchData().catch(console.error);
  }, []);
  const router = useRouter();

  function upDateInput() {
    return (
      <form>
        <label htmlFor="name">Nome:</label>
        <input id="name" className="name" value={user.name}></input>
        <label htmlFor="adress">Indirizzo:</label>
        <input id="adress" className="adress" value={user.adress}></input>
        <label htmlFor="email">Nome:</label>
        <input id="email" className="email" value={user.email}></input>
      </form>
    );
  }

  if (user === undefined) {
    return <p>Nessun Dato</p>;
  } else {
    return (
      <>
        <h2>I tuoi Dati:</h2>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.adress}</p>

        <LoginButton session={session} />
        <button onClick={upDateInput}>Cambia i tuoi dati</button>
      </>
    );
  }
}
