import Image from "next/image";
import Link from "next/link";

export default function Soap({ name, price, id, image }) {
  return (
    <>
      <div>
        <Link href={`/${id}`}>
          <h1>{name}</h1>
        </Link>

        {/* <Image alt={name} src={image} width={200} height={200} /> */}
        <h3>{price}</h3>
      </div>
    </>
  );
}
