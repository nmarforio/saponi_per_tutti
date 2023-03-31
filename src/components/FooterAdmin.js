import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";

export default function FooterAdmin() {
  return (
    <div className="footer">
      <Link className="footerlink" href={"/admin"}>
        Ordini
      </Link>
      <Link className="footerlink" href={"/newProduct"}>
        Aggiungi Prodotto
      </Link>
    </div>
  );
}
