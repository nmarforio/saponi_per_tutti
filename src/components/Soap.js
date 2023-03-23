import Image from "next/image";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

export default function Soap({ name, price, id, image }) {
  console.log("IMAGEEEE", image);
  return (
    <>
      <div className="soapcard">
        <h1>{name}</h1>

        <Link href={`/${id}`}>
          {image.map((im) => {
            return (
              <>
                <Image key={im} alt={name} src={im} width={150} height={150} />
              </>
            );
          })}
        </Link>

        <h3>CHF:{price}</h3>
      </div>
    </>
  );
}
