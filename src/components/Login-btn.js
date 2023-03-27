import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function LoginButton({ session }) {
  const router = useRouter();
  if (session)
    return (
      <>
        <button
          className="logOut"
          onClick={() => signOut() && router.push("/")}
        >
          Log Out
        </button>
      </>
    );

  return (
    <>
      Not signed in <br />
      <button className="logIn" onClick={() => signIn()}>
        Sign In / Log In
      </button>
    </>
  );
}
