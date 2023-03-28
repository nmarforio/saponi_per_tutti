import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";

export default function Footer() {
  return (
    <div className="footer">
      <Link className="footerlink" href={"/admin"}>
        ADMIN
      </Link>
    </div>
  );
}