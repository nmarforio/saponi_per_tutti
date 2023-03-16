import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton({ session }) {
  if (session)
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
