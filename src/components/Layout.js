import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { trusted } from "mongoose";

export default function Layout({ children }) {
  const [data, setData] = useState();
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("/api/profile");
      const data = await res.json();

      setData(data);
    };
    fetcher();
  }, []);

  if (!data) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
      </>
    );
  } else if (data.admin) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <main>{children}</main>
      </>
    );
  }
}
