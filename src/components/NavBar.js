import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div>
        <h1>Saponi per tutti</h1>
        <Link href={`/basket`}>
          <p>Basket</p>
        </Link>
        <Link href={`/about`}>
          <p>About</p>
        </Link>
        {/* <Image
          src={`https://icons8.com/icon/14736/customer`}
          alt={"profile"}
          width={50}
          height={50}
        >
          profiel pic
        </Image> */}
      </div>
    </>
  );
}
