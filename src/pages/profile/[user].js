import LoginButton from "@/components/Login-btn";
import { useSession } from "next-auth/react";

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

  console.log("USER", user);

  if (user === undefined) {
    return <p>Caricamento...</p>;
  } else {
    return (
      <>
        <h2>I tuoi Dati:</h2>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.adress}</p>

        <LoginButton session={session} />
      </>
    );
  }
}
