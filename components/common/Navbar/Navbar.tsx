import Link from "next/link";
import React, { FC } from "react";
import s from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <div className="flex justify-between items-center w-full px-8 pt-5">
      <div className="flex-grow"></div>
      <Link href="/#about">
        <button className={s.navBtn}>About</button>
      </Link>
      <Link href="/inventory">
        <button className={s.navBtn}>My Faces</button>
      </Link>
      <a href="https://opensea.io/" target="_blank">
        <button className={s.navBtn}>Opensea</button>
      </a>
      <button className={s.navBtn}>Connect</button>
    </div>
  );
};

export default Navbar;
