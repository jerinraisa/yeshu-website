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
          content={"https://yeshuj.com/images/shareImage.jpg"}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J84KRMMXVP%22%3E"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-J84KRMMXVP');    `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
