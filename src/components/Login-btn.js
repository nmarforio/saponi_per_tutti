import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton({ session }) {
  if (session) {
    return (
      <>
        <p>Benvenuto, {session.user.name}</p>
        <img src={session.user.image} alt="img-profiel" />
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
