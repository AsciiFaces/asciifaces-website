/* eslint-disable react/jsx-props-no-spreading */
import { UseWalletProvider } from 'use-wallet';

import '../styles/globals.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import WalletModal from '@components/wallet/WalletModal';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseWalletProvider chainId={1}>
      <Component {...pageProps} />;
      <WalletModal />
    </UseWalletProvider>
  );
}

export default MyApp;
