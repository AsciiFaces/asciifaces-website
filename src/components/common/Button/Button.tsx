import { FC, MouseEvent } from 'react';
import cn from 'classnames';

import s from './Button.module.css';

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  handleClick?: (event: MouseEvent) => unknown | undefined;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  handleClick,
}) => {
  return (
    <button
      className={cn(s.button, { [s.animation]: !disabled }, className)}
      onClick={handleClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
