import Link from "next/link";
import Image from "next/image";

import { useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <>
      <div className="navbar">
        <Link href={`/basket`}>CESTINO</Link>

        <Link href={`/`}>HOME</Link>

        <Link href={`/contact`}>INFO</Link>
        <Link href={"/profile"}>
          <Image
            src={session ? session.user.image : "/profile2.png"}
            className="profileimg"
            alt="profile"
            width={35}
            height={35}
          />
        </Link>
      </div>
    </>
  );
}
