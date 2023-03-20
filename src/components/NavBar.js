import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useSession } from "next-auth/react";

export default function NavBar({ onSubmit, count }) {
  const { data: session } = useSession();
  return (
    <>
      <Div>
        <Link href={`/basket`}>
          <Image src="./basket.svg" alt="basket" width={30} height={30} />
        </Link>
        <Link href={`/`}>
          <Image src="/soap.png" alt="about" width={30} height={30} />
        </Link>
        <Link href={"/profile/profile"}>
          <img
            src={session ? session.user.image : "/profile2.png"}
            alt="profile"
            width={30}
            height={30}
          />
        </Link>
      </Div>
    </>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid black 2px;
`;
