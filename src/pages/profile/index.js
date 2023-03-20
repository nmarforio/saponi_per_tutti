import LoginButton from "@/components/Login-btn";
import Link from "next/link";
import User from "@/components/User";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Profilepage() {
  const { data: session, status } = useSession();

  const [userFromDb, setUserFromDb] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/profile`);
      const json = await data.json();

      setUserFromDb(json);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      {session && (
        <>
          <User userDb={userFromDb} session={session} />
        </>
      )}
      <LoginButton session={session} />
    </>
  );
}
