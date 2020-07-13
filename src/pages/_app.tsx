import { CssBaseline, ZeitProvider, Page } from '@zeit-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

export default function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Crypto - Smart flow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ZeitProvider>
        <CssBaseline />
        <Page>
          <Component {...pageProps} />
        </Page>
      </ZeitProvider>
    </>
  );
}
