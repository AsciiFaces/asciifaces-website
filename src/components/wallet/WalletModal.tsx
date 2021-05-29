import { Button } from '@components/common';
import ReactModal from 'react-modal';
import { useWallet } from 'use-wallet';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'var(--grey)',
  },
};

function WalletModal() {
  const { connect, status } = useWallet();

  const loading = status === 'connecting';

  return (
    <ReactModal isOpen style={customStyles}>
      <h1>Please connect to a wallet</h1>
      <div className="flex flex-col justify-center">
        <Button disabled={loading} handleClick={() => connect('injected')}>
          Metamask
        </Button>
        <Button disabled={loading}>Wallet Connect</Button>
      </div>
      <p className="text-center text-gray-800">
        {loading ? 'Confirming your wallet...' : ''}
      </p>
    </ReactModal>
  );
}

export default WalletModal;
