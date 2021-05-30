import { FC } from 'react';
import Image from 'next/image';
import s from './Face.module.css';

interface FaceProps {
  id: string | number;
}

const Face: FC<FaceProps> = ({ id }) => {
  return (
    <a href={`/face/${id}`} target="_blank" rel="noreferrer">
      <div className={s.root} role="button">
        <Image
          className="bg-black"
          src={`/api/image/${id}`}
          alt="Face"
          width={350}
          height={350}
        />
        <div className={s.text}>Faces #{id}</div>
      </div>
    </a>
  );
};

export default Face;
