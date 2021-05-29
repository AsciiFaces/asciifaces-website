import { createContext, FC, useCallback, useEffect, useState } from 'react';
import { useWallet } from 'use-wallet';

export type WalletContextType = {
  connected: boolean;
  loading: boolean;
  modalOpen: boolean;
  toggleModal: () => void;
} | null;

export const WalletContext = createContext<WalletContextType>(null);

export const WalletProvider: FC = ({ children }) => {
  const wallet = useWallet();
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [requestModal, setRequestModal] = useState(false);

  const toggleModal = useCallback(() => {
    setRequestModal((last) => !last);
  }, []);

  useEffect(() => {
    setConnected(wallet.status === 'connected');
    setLoading(
      wallet.status === 'connecting' || wallet.status === 'connecting',
    );

    setModalOpen(!connected && requestModal);
  }, [connected, requestModal, wallet.status]);

  return (
    <WalletContext.Provider
      value={{
        loading,
        connected,
        modalOpen,
        toggleModal,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
