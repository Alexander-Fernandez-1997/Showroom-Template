import Script from "next/script";
import "/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Layout } from "../components/utils/Layout";
import { simpleFetch } from "../utils/simpleFetch";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  initialData,
}) {
  return (
    <>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
      />
      <SessionProvider session={session}>
        <Layout initialData={initialData}>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

export default MyApp;

MyApp.getInitialProps = async (context) => {
  const initialData = await simpleFetch("details");
  return { initialData };
};
