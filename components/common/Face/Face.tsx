import Link from "next/link";
import { FC } from "react";
import s from "./Face.module.css";

interface FaceProps {
  id: string | number;
}

const Face: FC<FaceProps> = ({ id }) => {
  return (
    <a href={"/face/" + id} target="_blank">
      <div className={s.root} role="button">
        <img
          className="bg-black"
          src="https://dummyimage.com/350x350/000/fff"
          alt="Picture of the author"
          width={350}
          height={350}
        />
        <div className={s.text}>Faces #{id}</div>
      </div>
    </a>
  );
};

export default Face;
