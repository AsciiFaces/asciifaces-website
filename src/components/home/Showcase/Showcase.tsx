import { Face, Card, Loading } from '@components/common';
import React, { FC, useState } from 'react';

import s from './Showcase.module.css';

const Showcase: FC = () => {
  const [loading] = useState(false);
  const faceIds = [...Array(8).keys()].map((id) => id + 1);

  return (
    <Card>
      <div className="flex justify-between mb-6">
        <h3 className="font-bold">Showcase</h3>
        <h3 className="font-bold">10 / 5000 Minted</h3>
      </div>
      {loading && <Loading />}
      <div className="w-full">
        <div className="w-full grid grid-cols-4 gap-8">
          {faceIds.map((id) => (
            <Face id={id} key={id} />
          ))}
        </div>
        <div className="w-full flex justify-center mt-8">
          <button type="button" className={s.btn}>
            Prev
          </button>
          <button type="button" className={s.btn}>
            Next
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Showcase;
