import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#25ceee" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
