import Navbar from "../components/NavBar";
import Footer from "./footer";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Layout({ children }) {
  const { data, error } = useSWR("/api/profile", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log("DATAUSER", data.admin);

  if (data.admin === true) {
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
