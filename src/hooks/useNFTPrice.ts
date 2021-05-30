import useInterval from '@hooks/useInterval';
import { useNFTContract } from '@hooks/useNFTContract';
import { useState } from 'react';

export default function useNFTPrice() {
  const contract = useNFTContract();
  const [price, setPrice] = useState(0);

  useInterval(async () => {
    const priceNew = await contract?.calculatePrice();

    setPrice(priceNew);
  }, 10000);

  return { price };
}
