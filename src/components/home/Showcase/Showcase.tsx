import { Face, Card, Loading } from '@components/common';
import { useNFTData } from '@hooks/useNFTData';
import usePagination from '@hooks/usePagination';
import React, { FC } from 'react';

import s from './Showcase.module.css';

const Showcase: FC = () => {
  const [supply, limit] = useNFTData();

  const loading = supply === 0 && limit === 0;
  const { tokenIds, handleNextPage, handlePrevPage } = usePagination(
    Number(supply),
  );

  return (
    <Card>
      <div className="flex justify-between mb-6">
        <h3 className="font-bold">Showcase</h3>
        <h3 className="font-bold">
          {Number(supply)} / {Number(limit)} Minted
        </h3>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full">
          <div className="w-full grid grid-cols-4 gap-8">
            {tokenIds.map((id) => (
              <Face id={id} key={id} />
            ))}
          </div>
          <div className="w-full flex justify-center mt-8">
            <button type="button" className={s.btn} onClick={handlePrevPage}>
              Prev
            </button>
            <button type="button" className={s.btn} onClick={handleNextPage}>
              Next
            </button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Showcase;
