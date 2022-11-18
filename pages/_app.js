import "../styles/globals.scss";
import Layout from "./components/layout";
import Header from "./components/header";
import Footer from "./components/footer";
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <Layout>
        <Header />
        {page}
        <Footer />
      </Layout>
    ));
  return getLayout(<Component {...pageProps} />);
}
