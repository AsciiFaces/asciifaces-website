import NFT from '@assets/abis/NFT';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Contract } from '@ethersproject/contracts';

export function getDefaultProvider() {
  return new JsonRpcProvider('https://rpc-mumbai.maticvigil.com');
}

export function getNftContract() {
  return new Contract(
    '0xF5e25c151669Cc01807C390E8a9833a3F6E9c422',
    NFT.abi,
    getDefaultProvider(),
  );
}
