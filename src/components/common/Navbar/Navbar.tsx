// import { useWallet } from '@hooks/useWallet';
import { useAccount } from '@hooks/useAccount';
import Link from 'next/link';
import React, { FC } from 'react';
import s from './Navbar.module.css';

const Navbar: FC = () => {
  const wallet = useAccount();

  return (
    <div className="flex justify-between items-center w-full px-8 pt-5">
      <div className="flex-grow" />
      <Link href="/#about">
        <button type="button" className={s.navBtn}>
          About
        </button>
      </Link>
      <Link href="/inventory">
        <button type="button" className={s.navBtn}>
          My Faces
        </button>
      </Link>
      <a href="https://opensea.io/" target="_blank" rel="noreferrer">
        <button type="button" className={s.navBtn}>
          Opensea
        </button>
      </a>
      <button
        type="button"
        onClick={() => wallet?.toggleModal()}
        className={s.navBtn}
      >
        {wallet?.connected ? '✓ Connected' : 'Connect'}
      </button>
    </div>
  );
};

export default Navbar;
