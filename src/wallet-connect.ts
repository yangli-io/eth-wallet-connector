import WalletConnectProvider from "@walletconnect/web3-provider";
import { setWeb3 } from './web3'

export async function connectWalletConnect() {
  const walletConnect = new WalletConnectProvider({})

  await walletConnect.enable();

  setWeb3(walletConnect);
}