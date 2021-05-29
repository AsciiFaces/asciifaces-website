import Web3Modal from 'web3modal';

export function getWeb3Modal() {
  const providerOptions = {};

  const web3Modal = new Web3Modal({
    providerOptions,
    cacheProvider: true,
  });

  return web3Modal;
}
