import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import useSWR from "swr";
import { useEffect, useState } from "react";
// const fetcher = (...args) => {
//   console.log("args", args);
//   fetch(...args).then((res) => res.json());
// };

export default function Layout({ children }) {
  // const { data, error } = useSWR("/api/profile", fetcher);
  // console.log("DATAUSER", data);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("/api/profile");
      const data = await res.json();
      console.log("Data", data);
      setData(data);
    };
    fetcher();
  }, []);

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  if (!data) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}
