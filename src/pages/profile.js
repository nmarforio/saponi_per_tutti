import LoginButton from "@/components/login-btn";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Profilepage() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <LoginButton session={session} />
      <Link href={"/"}>Home</Link>
    </>
  );
}
