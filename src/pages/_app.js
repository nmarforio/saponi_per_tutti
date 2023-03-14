import GlobalStyle from "../styles/styles";
import Title from "@/components/Title";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Title />
      <Component {...pageProps} />;
    </>
  );
}
