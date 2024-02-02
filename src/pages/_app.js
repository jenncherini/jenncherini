import Layout from "@/components/layout";
import "@/styles/customAos.scss";
import "@/styles/globals.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react";

import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <Layout>
      <Head>
        <title>Jennifer Cherini - User Experience Designer</title>
        <meta name="description" content="UX/UI & Media Manager who is now learning React JS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/images/meta-img.png" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
