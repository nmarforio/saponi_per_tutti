import GlobalStyle from "../styles/styles";
import Title from "@/components/Title";
import { SessionProvider } from "next-auth/react";

import Layout from "@/components/Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
