/* eslint-disable react/jsx-props-no-spreading */
import { UseWalletProvider } from 'use-wallet';

import '../styles/globals.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { WalletProvider } from '@context/Wallet';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseWalletProvider chainId={1}>
      <WalletProvider>
        <Component {...pageProps} />;
      </WalletProvider>
    </UseWalletProvider>
  );
}

export default MyApp;
