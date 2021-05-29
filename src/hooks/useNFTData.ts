import useInterval from '@hooks/useInterval';
// import { getNftContract } from '@utils/index';
import { useCallback, useState } from 'react';
import NFT from '@assets/abis/NFT';
import useContract from '@hooks/useContract';

export function useNFTData() {
  const contract = useContract(
    '0xF5e25c151669Cc01807C390E8a9833a3F6E9c422',
    NFT.abi as unknown as string,
  );
  const [totalSupply, setTotalSupply] = useState(0);
  const [tokenLimit, setTokenLimit] = useState(0);

  const fetchTokenData = useCallback(async () => {
    if (contract) {
      const supply = await contract.totalSupply();
      const limit = await contract.MAX_SUPPLY();
      return { supply, limit };
    }
    return undefined;
  }, [contract]);

  useInterval(async () => {
    const data = await fetchTokenData();
    setTotalSupply(data?.supply);
    setTokenLimit(data?.limit);
  }, 10000);

  return [totalSupply, tokenLimit];
}
