import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <>
      <div className="navbar">
        <Link href={`/basket`}>
          <Image src="./basket.svg" alt="basket" width={35} height={35} />
        </Link>
        <Link href={`/`}>
          <Image src="/soap-2.png" alt="home" width={35} height={35} />
        </Link>

        <Link href={`/order`}>
          <Image src="/order-now.png" alt="orders" width={35} height={35} />
        </Link>
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
