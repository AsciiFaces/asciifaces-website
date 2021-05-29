import { FC } from 'react';
import cn from 'classnames';

import s from './MintButton.module.css';

type MintButtonProps = {
  disabled?: boolean;
};

const MintButton: FC<MintButtonProps> = ({ disabled = false }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(s.mintBtn, { [s.animation]: !disabled })}
    >
      Mint 1 ASCII Faces for 0.025 ETH
    </button>
  );
};

export default MintButton;
