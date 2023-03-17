import { useSession } from "next-auth/react";
import Image from "next/image";

export default function DetailProfile({ userDb }) {
  return (
    <>
      <p>{userDb.name}</p>
      <p>{userDb.email}</p>
      <p>{userDb.adress}</p>
      <img src={userDb.image} alt="profile-pic" width={50} height={50} />
    </>
  );
}
