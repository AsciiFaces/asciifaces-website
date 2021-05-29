import { WalletContext } from '@context/Wallet';
import { useContext } from 'react';

export function useAccount() {
  return useContext(WalletContext);
}
