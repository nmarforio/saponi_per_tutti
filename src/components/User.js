import { useRouter } from "next/router";
import FormNewUser from "./FormNewUser";

export default function User({ session, userDb }) {
  // const user = useSWR("/api/soap/profile");
  const router = useRouter();

  // Cookie expired!!

  if (!userDb.adress) {
    return (
      <>
        <FormNewUser session={session} />
      </>
    );
  } else {
    router.push(`/profile/${session.user.id}`);
  }
}
