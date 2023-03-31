import Navbar from "../components/NavBar";
import FooterAdmin from "./FooterAdmin";
import { useEffect, useState } from "react";
import Footer from "./Footer";

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
        <Footer />
      </>
    );
  } else if (data.admin === true) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <FooterAdmin />
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
