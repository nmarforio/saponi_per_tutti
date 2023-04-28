// import { useRouter } from "next/router";
// import useSWR from "swr";
// import axios from "axios";
// import { useEffect } from "react";

// const fetcher = (url) => axios.get(url).then((res) => res.data);

// const Success = () => {
//   const {
//     query: { session_id },
//   } = useRouter();

//   const { data, error } = useSWR(
//     () => `/api/checkout_sessions/${session_id}`,
//     fetcher
//   );
//   return (
//     <div>
//       {error ? (
//         <div className="p-2 rounded-md bg-rose-100 text-rose-500 max-w-md mx-auto">
//           <p className="text-lg">Sorry, something went wrong!</p>
//         </div>
//       ) : !data ? (
//         <div className="p-2 rounded-md bg-gray-100 text-gray-500 max-w-md mx-auto">
//           <p className="text-lg animate-pulse">Loading...</p>
//         </div>
//       ) : (
//         <div className="py-4 px-8 rounded-md bg-gray-100 max-w-lg mx-auto">
//           <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
//             <span>Thanks for your order!</span>
//           </h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Success;
