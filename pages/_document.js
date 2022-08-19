import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="images/icons/favicon.png" />

        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/bootstrap/css/bootstrap.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="fonts/iconic/css/material-design-iconic-font.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="fonts/linearicons-v1.0.0/icon-font.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/css-hamburgers/hamburgers.min.css"
        />

        <link rel="stylesheet" type="text/css" href="css/util.css" />
        <link rel="stylesheet" type="text/css" href="css/main.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="vendor/jquery/jquery-3.2.1.min.js"></Script>

        <Script src="vendor/bootstrap/js/popper.js"></Script>
        <Script src="vendor/bootstrap/js/bootstrap.min.js"></Script>
      </body>
    </Html>
  );
}
