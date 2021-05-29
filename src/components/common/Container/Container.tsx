import WalletModal from '@components/wallet/WalletModal';
import { WalletContext } from '@context/Wallet';
import { FC, useContext } from 'react';
import { Logo } from '../Logo';
import { Navbar } from '../Navbar';

const Container: FC = ({ children }) => {
  const wallet = useContext(WalletContext);

  return (
    <div className="w-full h-full min-h-screen bg-violet pb-10 px-4">
      <Navbar />
      <Logo />
      <div className="mx-auto max-w-6xl">{children}</div>
      <WalletModal
        isOpen={wallet?.modalOpen}
        handleClose={() => {
          wallet?.toggleModal();
        }}
      />
    </div>
  );
};

export default Container;
