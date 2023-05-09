import Soap from "@/components/Soap";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import StarRating from "react-rating-stars-component";

export default function Soapdetail() {
  const [detialSoap, setDetailSoap] = useState();
  const [rating, setRating] = useState(0);

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

  function handleSubmit(event) {
    event.preventdefault();
    const stars = event.target.stars.value;
    setRating(stars);
  }
  console.log(rating);

  if (detialSoap) {
    return (
      <>
        <div className="soapdetails">
          <h1>{detialSoap.name}</h1>
          <div>
            <Image
              alt={detialSoap._id}
              src={detialSoap.image}
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className="price">
            <strong>CHF: {detialSoap.price}</strong>
          </span>

          <p>{detialSoap.description}</p>
          <strong>Sostanze</strong>
          <p>{detialSoap.recipes}</p>

          <form on onSubmit={handleSubmit}>
            <label>Lascia un commento:</label>
            <textarea placeholder="I LOVE IT"></textarea>
            <StarRating
              id="stars"
              name="stars"
              value={rating}
              activeColor="#9B3D00"
              color={"black"}
              size={17}
            />
            <button type="submit">Fatto</button>
          </form>
        </div>
      </>
    );
  }
}
