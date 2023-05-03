// import Soap from "@/components/Soap";
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Quantity from "@/components/Quantity";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import { Navigation, EffectFade } from "swiper";

// export default function Soapdetail() {
//   const [detialSoap, setDetailSoap] = useState();

//   const router = useRouter();
//   const id = router.query.id;

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetch(`/api/soaps/${id}`);
//       const json = await data.json();

//       setDetailSoap(json);
//     };
//     id && fetchData().catch(console.error);
//   }, [id]);

//   if (detialSoap) {
//     return (
//       <>
//         <div className="soapdetails">
//           <h1>{detialSoap.name}</h1>

//           <Swiper
//             modules={[Navigation, EffectFade]}
//             navigation
//             effect
//             speed={800}
//             slidesPerView={1}
//             loop
//             className="myswiper"
//           >
//             {detialSoap.image.map((im) => {
//               return (
//                 <SwiperSlide key={im}>
//                   <Image
//                     key={im}
//                     alt={detialSoap._id}
//                     src={im}
//                     width={200}
//                     height={200}
//                     style={{ objectFit: "cover" }}
//                   />
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>

//           <Quantity />
//           <p>CHF: {detialSoap.price}</p>
//           <p>{detialSoap.description}</p>
//           <h4>Sostanze</h4>
//           <p className="recipes">{detialSoap.recipes}</p>
//         </div>
//       </>
//     );
//   }
// }
