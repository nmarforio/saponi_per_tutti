import GlobalStyle from "../styles/styles";
import Title from "@/components/Title";
import { SessionProvider } from "next-auth/react";
import NavBar from "@/components/NavBar";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Title />

      <GlobalStyle />
      <SessionProvider session={session}>
        <NavBar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
