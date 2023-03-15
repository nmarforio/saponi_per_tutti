import LoginButton from "@/components/login-btn";
import Link from "next/link";
import User from "@/components/User";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Profilepage() {
  const { data: session } = useSession();
  console.log("Session in ProfilePage", session);

  return (
    <>
      {session && (
        <>
          <User session={session} />
        </>
      )}
      <LoginButton session={session} />
      <Link href={"/"}>Home</Link>
    </>
  );
}
