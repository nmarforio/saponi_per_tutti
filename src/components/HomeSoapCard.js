import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper";
import Image from "next/image";
import StarRating from "react-rating-stars-component";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function HomeSoapCard({
  soapList,
  moreInfosFunction,
  moreInfosData,
}) {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    let input = 0;
    if (!session) {
      router.push("/profile");
    } else {
      input = event.target.quantity.value;
      const id = event.target.btn.value;

      console.log(id);

      window.alert("Articolo aggiunto al carrello!");

      const response = await fetch(`api/soaps`, {
        method: "POST",
        body: JSON.stringify({
          soapId: id,
          userId: session.user.id,
          quantity: input,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        await response.json();
        event.target.reset();
      } else {
        console.error(`Error: ${response.status}`);
      }
    }
  }
  return (
    <Swiper
      modules={[Navigation, EffectFade]}
      navigation
      effect
      speed={800}
      slidesPerView={1}
      loop
      className="myswiper"
    >
      {soapList.map((soap, index) => {
        const length = soap.ratingStar.length;
        const arraySum = soap.ratingStar.reduce((a, b) => a + b, 0);
        const starsAverage = arraySum / length;
        return (
          <>
            <SwiperSlide key={soap._id}>
              <div key={soap._id} className="soapdetails">
                <h1>{soap.name}</h1>
                <div className="imgDiv">
                  <Link href={`/${soap._id}`}>
                    <Image
                      key={soap._id}
                      alt={soap._id}
                      src={soap.image}
                      width={200}
                      height={250}
                    />
                  </Link>
                </div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="quatity">Quantità:</label>
                  <input
                    id="quantity"
                    placeholder="0"
                    max="10"
                    min="0"
                    type="number"
                  ></input>
                  <button
                    className="addBasket"
                    id="btn"
                    value={soap._id}
                    type="submit"
                  >
                    Aggiungi al Cestino
                  </button>
                </form>
                <strong>CHF: {soap.price}</strong>
                <button
                  className="menuButton"
                  onClick={() => moreInfosFunction(!moreInfosData)}
                >
                  <Image
                    src={"/dots.png"}
                    alt={"menu"}
                    width={30}
                    height={30}
                  />
                </button>
                <div className="ratingStar">
                  <StarRating
                    value={starsAverage}
                    activeColor="#9B3D00"
                    color={"black"}
                    size={17}
                    isHalf={true}
                    edit={false}
                  />
                </div>
                <div
                  className={moreInfosData ? "toogleInfo" : "toogleInfoNone"}
                >
                  <p>{soap.description}</p>
                  <strong>Sostanze</strong>
                  <p className="recipes">{soap.recipes}</p>
                </div>
              </div>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
}
