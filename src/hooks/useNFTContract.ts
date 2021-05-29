import useContract from '@hooks/useContract';
import NFT from '@assets/abis/NFT';

export function useNFTContract() {
  const address = '0xF5e25c151669Cc01807C390E8a9833a3F6E9c422';
  const { abi } = NFT;

  return useContract(address, abi as unknown as string);
}
