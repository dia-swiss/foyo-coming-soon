import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5DN87TS' });
  }, []);
  
  return <Component {...pageProps} />
}

export default MyApp
