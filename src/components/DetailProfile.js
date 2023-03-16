import { useSession } from "next-auth/react";
import Image from "next/image";

export default function DetailProfile({ userDb }) {
  const { data: session } = useSession();
  console.log("AFTERLOOOGIN", session);
  return (
    <>
      <p>{userDb.name}</p>
      <p>{userDb.email}</p>
      <p>{userDb.adress}</p>
      <img src={session.user.image} alt="profile-pic" width={50} height={50} />
    </>
  );
}
