import Script from "next/script";
import "/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Layout } from "../components/utils/Layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
      />
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
