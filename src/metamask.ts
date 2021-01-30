import { setWeb3 } from './web3'

declare global {
  interface Window {
    ethereum: any
    web3: any
  }
}

export async function eagerlyConnectMetamask() {
  try {
    const trySend = await window.ethereum.send('eth_accounts');

    if (trySend.result && trySend.result.length) {
      await window.ethereum.enable()

      setWeb3(window.ethereum);

      return true
    }
  } catch {
    return false;
  }
}

export function connectMetamask() {
  try {
    if (window.ethereum) {
      setWeb3(window.ethereum);
      window.ethereum.enable();
      return true;
    }
    return false;
  } catch (e) {
    // User prevented
  }

  return false;
}