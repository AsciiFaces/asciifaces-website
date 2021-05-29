import { Contract } from '@ethersproject/contracts';
import { JsonRpcProvider } from '@ethersproject/providers';
import { useMemo } from 'react';

export default function useContract(address: string, ABI: string) {
  return useMemo(() => {
    return !!address && !!ABI
      ? new Contract(
          address,
          ABI,
          new JsonRpcProvider('https://rpc-mumbai.maticvigil.com'),
        )
      : undefined;
  }, [ABI, address]);
}
