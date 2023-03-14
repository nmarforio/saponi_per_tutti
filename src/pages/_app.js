import GlobalStyle from "../styles/styles";
import Title from "@/components/Title";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Title />
      <GlobalStyle />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
