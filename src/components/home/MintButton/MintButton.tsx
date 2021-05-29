import { FC } from 'react';
import cn from 'classnames';
import { formatEther } from '@ethersproject/units';

import { useAccount } from '@hooks/useAccount';
import useNFTPrice from '@hooks/useNFTPrice';
import s from './MintButton.module.css';

type MintButtonProps = {
  disabled?: boolean;
};

const MintButton: FC<MintButtonProps> = ({ disabled = false }) => {
  const account = useAccount();
  const { price } = useNFTPrice();

  const handleClick = () => {
    if (!account?.connected) {
      account?.toggleModal();
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(s.mintBtn, { [s.animation]: !disabled })}
      onClick={handleClick}
    >
      {Number(price) <= 0
        ? 'Loading Price...'
        : ` Mint 1 ASCII Faces for ${formatEther(price)} ETH`}
    </button>
  );
};

export default MintButton;
