import { Card } from '@components/common';
import React from 'react';

const Content = () => {
  return (
    <>
      <Card>
        <h2 className="text-3xl mb-4 font-semibold">~ Pricing</h2>
        <p>
          There will be 5000 ASCIIFaces minted. They are priced on the following
          curve: <br />
          <br /> ~ 1 - 1000&nbsp;&nbsp;&nbsp;&nbsp;: 0.025 ETH <br /> ~ 1001 -
          2000 : 0.05 ETH <br /> ~ 2001 - 3000 : 0.1 ETH <br /> ~ 3001 - 4000 :
          0.2 ETH
          <br /> ~ 4001 - 5000 : 0.4 ETH
        </p>
      </Card>
      <Card id="about">
        <h2 className="text-3xl mb-4 font-semibold">~ About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Card>
      <Card>
        <h2 className="text-3xl mb-4 font-semibold">~ Technical</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Card>
    </>
  );
};

export default Content;
