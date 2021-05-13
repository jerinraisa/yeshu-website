import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Yeshu Jain</title>
        <meta name="description" content="Yeshu's Personal Site" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={"https://www.yeshuj.com/images/yeshu-image.png"}
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
