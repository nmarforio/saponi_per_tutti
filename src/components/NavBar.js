import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function NavBar() {
  return (
    <>
      <Div>
        <Link href={`/basket`}>
          <Image src="./basket.svg" alt="basket" width={30} height={30} />
        </Link>
        <Link href={`/about`}>
          <Image src="/soap.png" alt="about" width={30} height={30} />
        </Link>
        <Link href={"/profile"}>
          <Image src="/profile2.png" alt="profile" width={30} height={30} />
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
