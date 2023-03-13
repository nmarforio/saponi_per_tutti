import Soap from "@/components/Soap";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Soapdetail() {
  const [detialSoap, setDetailSoap] = useState([]);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/soaps/${id}`);
      const json = await data.json();

      setDetailSoap(json);
    };
    fetchData().catch(console.error);
  }, []);

  console.log(detialSoap);
  //image is missing

  return (
    <>
      <h1>{detialSoap.name}</h1>
      <Image
        alt={detialSoap.name}
        src={detialSoap.pic}
        width={200}
        height={200}
      />
      <p>{detialSoap.description}</p>
      <p>{detialSoap.recipes}</p>
      <p>{detialSoap.price}</p>
    </>
  );
}
