import { FC } from 'react';
import cn from 'classnames';

import { useAccount } from '@hooks/useAccount';
import s from './MintButton.module.css';

type MintButtonProps = {
  disabled?: boolean;
};

const MintButton: FC<MintButtonProps> = ({ disabled = false }) => {
  const account = useAccount();

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
      Mint 1 ASCII Faces for 0.025 ETH
    </button>
  );
};

export default MintButton;
