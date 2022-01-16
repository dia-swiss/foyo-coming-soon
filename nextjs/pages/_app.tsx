import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5DN87TS' });
  }, []);

  return <Layout>
    <Head>
      <title>QOYO</title>
      <meta name="title" content="in 15min zur digitalen Marketingstrategie mit qoyo.io" />
      <meta name="description" content="In 15min zur digitalen Marketingstrategie für KMU, Selbständige und Startups" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
