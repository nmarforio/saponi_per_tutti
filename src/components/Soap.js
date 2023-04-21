import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper";

export default function Soap({ name, price, id, image }) {
  return (
    <>
      <div className="soapcard">
        <h2>{name}</h2>

        <Swiper
          modules={[Navigation, EffectFade]}
          navigation
          effect
          speed={800}
          slidesPerView={1}
          loop
          className="myswiper"
        >
          {image.map((im) => {
            return (
              <>
                <SwiperSlide>
                  <Link href={`/${id}`}>
                    <Image
                      style={{ objectFit: "cover" }}
                      key={im}
                      alt={name}
                      src={im}
                      width={150}
                      height={150}
                    />
                  </Link>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
        <h3>CHF:{price}</h3>
      </div>
    </>
  );
}
