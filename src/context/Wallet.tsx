import { getWeb3Modal } from '@utils/index';
import { createContext, FC, useContext, useState } from 'react';

type WalletContextType = {
  connected: boolean;
} | null;

export const WalletContext = createContext<WalletContextType>(null);

export const WalletProvider: FC = ({ children }) => {
  const walletContext = useContext(WalletContext);

  const [web3Modal] = useState(getWeb3Modal());

  return <div>{children}</div>;
};
