import Soap from "@/components/Soap";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Quantity from "@/components/Quantity";
import { CldImage } from "next-cloudinary";

export default function Soapdetail() {
  const [detialSoap, setDetailSoap] = useState();

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/soaps/${id}`);
      const json = await data.json();

      setDetailSoap(json);
    };
    id && fetchData().catch(console.error);
  }, [id]);

  if (detialSoap) {
    console.log("DADAWSASA", detialSoap.image);
    return (
      <>
        <div className="soapcard">
          <h1>{detialSoap.name}</h1>
          {detialSoap.image.map((im) => {
            return (
              <Image
                key={im}
                alt={detialSoap._id}
                src={im}
                width={200}
                height={200}
              />
            );
          })}
          <Quantity />
          <p>CHF: {detialSoap.price}</p>
          <p>{detialSoap.description}</p>
          <h4>Sostanze</h4>
          <p>{detialSoap.recipes}</p>
        </div>
      </>
    );
  }
}
