import { createContext, FC, useCallback, useState } from 'react';
import { useWallet } from 'use-wallet';

type WalletContextType = {
  connected: boolean;
  connect: () => Promise<void>;
} | null;

export const WalletContext = createContext<WalletContextType>(null);

export const WalletProvider: FC = ({ children }) => {
  const wallet = useWallet();
  const [connected] = useState(false);

  const connect = useCallback(async () => {
    console.log(wallet);
  }, [wallet]);

  return (
    <WalletContext.Provider
      value={{
        connect,
        connected,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
