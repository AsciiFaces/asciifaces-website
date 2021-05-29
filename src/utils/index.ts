import NFT from '@assets/abis/NFT';
import ethers from 'ethers';

export function getDefaultProvider() {
  return new ethers.providers.JsonRpcProvider(
    'https://rpc-mumbai.maticvigil.com',
  );
}

export function getNftContract() {
  console.log('ethers boy', ethers);

  return new ethers.Contract(
    '0xF5e25c151669Cc01807C390E8a9833a3F6E9c422',
    NFT.abi,
    getDefaultProvider(),
  );
}
