import LoginButton from "@/components/login-btn";
import Link from "next/link";
import User from "@/components/User";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Profilepage() {
  const { data: session } = useSession();
  console.log("Session in ProfilePage", session);

  return (
    <>
      <LoginButton session={session} />
      <Link href={"/"}>Home</Link>
      {session && (
        <>
          <User session={session} />
        </>
      )}
    </>
  );
}
