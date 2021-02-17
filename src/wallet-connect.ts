import WalletConnectProvider from "@walletconnect/web3-provider";
import { setWeb3 } from './web3'
import { IRPCMap } from "@walletconnect/types";

export async function connectWalletConnect(rpc: IRPCMap) {
  const walletConnect = new WalletConnectProvider({
    rpc,
  })

  await walletConnect.enable();

  setWeb3(walletConnect);
}