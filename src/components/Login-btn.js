import { signIn, signOut } from "next-auth/react";

export default function LoginButton({ session }) {
  if (session)
    return (
      <>
        <div className="logOut">
          <button onClick={() => signOut({ callbackUrl: "/profile" })}>
            Log Out
          </button>
        </div>
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
