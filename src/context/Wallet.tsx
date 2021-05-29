import { createContext, FC, useEffect, useState } from 'react';
import { useWallet } from 'use-wallet';

type WalletContextType = {
  connected: boolean;
  loading: boolean;
} | null;

export const WalletContext = createContext<WalletContextType>(null);

export const WalletProvider: FC = ({ children }) => {
  const wallet = useWallet();
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setConnected(wallet.status === 'connected');
    setLoading(
      wallet.status === 'connecting' || wallet.status === 'connecting',
    );
  }, [wallet.status]);

  return (
    <WalletContext.Provider
      value={{
        loading,
        connected,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
