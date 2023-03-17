import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton({ session }) {
  if (session)
    return (
      <>
        <button onClick={() => signOut()}>Log Out</button>
      </>
    );

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign In / Log In</button>
    </>
  );
}
