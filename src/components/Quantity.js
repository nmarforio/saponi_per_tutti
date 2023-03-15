import { useSession } from "next-auth/react";

export default function Quantity({ onSubmit }) {
  const { data: session, status } = useSession();
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="quatity">Quatità</label>
        <input
          id="quantity"
          placeholder="0"
          max="10"
          min="0"
          type={"number"}
        ></input>
        <button type="submit" onClick={session}>
          Aggiungi al Cestino
        </button>
      </form>
    </>
  );
}
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
