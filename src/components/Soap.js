import Image from "next/image";
import Link from "next/link";

export default function Soap({ name, price, id, image }) {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <Link href={`/${id}`}>
          <Image alt={name} src={image} width={200} height={200} />
        </Link>
        <h3>CHF:{price}</h3>
      </div>
    </>
  );
}
