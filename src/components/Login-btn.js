import { signIn, signOut } from "next-auth/react";

export default function LoginButton({ session }) {
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
