import Web3 from 'web3';
import { eagerlyConnectMetamask, connectMetamask } from './metamask'
import { connectWalletConnect } from './wallet-connect'
import { IRPCMap } from "@walletconnect/types";
import { Connector } from './types'

interface EthWalletConnectorType {
  rpc: IRPCMap,
  defaultRPC: string
}

export default class EthWalletConnector {
  private _web3: Web3;
  private _rpc: IRPCMap;
  private _connector: Connector | null;

  static METAMASK = Connector.METAMASK;

  constructor({ rpc, defaultRPC }: EthWalletConnectorType) {
    this._web3 = new Web3(defaultRPC);

    this._rpc = rpc;

    this._connector = null;
  }

  public async connect(connector: Connector) {
    if (connector === Connector.METAMASK) {
      connectMetamask();

      this._connector = Connector.METAMASK;
    } else if (connector === Connector.WALLETCONNECT) {
      connectWalletConnect(this._rpc);

      this._connector = Connector.WALLETCONNECT;
    }
  }

  public async eagerlyConnect() {
    if (await eagerlyConnectMetamask()) {
      this._connector = Connector.METAMASK;
      return true;
    }

    // Eagerly Connect Wallet Connect
  }

  web3() {
    return this._web3;
  }

  connector() {
    return this._connector;
  }
}