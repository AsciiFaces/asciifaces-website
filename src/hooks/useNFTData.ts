import useInterval from '@hooks/useInterval';
// import { getNftContract } from '@utils/index';
import { useCallback, useState } from 'react';
import { useNFTContract } from '@hooks/useNFTContract';

export function useNFTData() {
  const contract = useNFTContract();
  const [totalSupply, setTotalSupply] = useState(0);
  const [tokenLimit, setTokenLimit] = useState(0);

  const fetchTokenData = useCallback(async () => {
    if (contract) {
      const [supply, limit] = await Promise.all([
        contract.totalSupply(),
        contract.MAX_SUPPLY(),
      ]);
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
