import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div>
        <h1>Saponi per tutti</h1>
        <Link href={`/basket`}>
          <Image src="./basket.svg" alt="basket" width={30} height={30} />
        </Link>
        <Link href={`/about`}>
          <p>About</p>
        </Link>
        <Link href={"/profile"}>
          <Image src="/profile2.png" alt="profile" width={30} height={30} />
        </Link>
      </div>
    </>
  );
}
