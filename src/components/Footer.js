import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="questionMark">
        <Link href={"/contact"}>
          <Image
            src="/questionmark.png"
            alt="contact"
            width={35}
            height={35}
          ></Image>
        </Link>
      </div>
    </>
  );
}
