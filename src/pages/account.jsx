import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";

const account = () => {
  const { data: session, status } = useSession(); // i can put {required: true} and is redirect me to the github button
  //i can use status insted session to check if i'm singed in or not
  if (session) {
    return (
      <div>
        <p>Welcome {session.user.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in.</p>
      </div>
    );
  }
};
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
export default account;
