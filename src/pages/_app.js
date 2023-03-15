import GlobalStyle from "../styles/styles";
import Title from "@/components/Title";
import { SessionProvider } from "next-auth/react";
import NavBar from "@/components/NavBar";
import { useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [count, setCount] = useState(0);

  function handelSubmit(event) {
    event.preventDefault();
    const input = event.target.quantity.value;
    console.log(input);
    return setCount(input);
  }

  return (
    <>
      <Title />

      <GlobalStyle />
      <SessionProvider session={session}>
        <NavBar onSubmit={(handelSubmit, count)} />
        <Component {...pageProps} onSubmit={(handelSubmit, count)} />
      </SessionProvider>
    </>
  );
}
