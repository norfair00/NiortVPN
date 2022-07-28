import Head from "next/head";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Le seul vrai VPN • NiortVPN</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png?v=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png?v=1" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest?v=1" />
        <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg?v=1" color="#5092ff" />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico?v=1" />
        <meta name="apple-mobile-web-app-title" content="NiortVPN" />
        <meta name="application-name" content="NiortVPN" />
        <meta name="msapplication-TileColor" content="#5092ff" />
        <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml?v=1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
