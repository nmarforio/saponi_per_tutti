import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/profile",
      },
    };
  }
  return {
    props: { session },
  };
};
