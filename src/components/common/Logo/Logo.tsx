import Link from 'next/link';
import { FC } from 'react';
import s from './Logo.module.css';

const Logo: FC = () => {
  return (
    <div className="flex justify-center my-8">
      <Link href="/">
        <h1 className={s.title}>ASCII FACES</h1>
      </Link>
    </div>
  );
};

export default Logo;
