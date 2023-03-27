import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function LoginButton({ session }) {
  const router = useRouter();

  if (session)
    return (
      <>
        <button
          className="logOut"
          onClick={() => signOut({ callbackUrl: "/profile" })}
        >
          Log Out
        </button>
      </>
    );

  return (
    <>
      <div className="singIn">
        <button onClick={() => signIn()}>Sign In / Log In</button>
      </div>
    </>
  );
}
