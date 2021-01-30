import Web3 from 'web3';

let web3: Web3;

export function setWeb3(provider: any) {
  web3 = new Web3(provider);
}

export function getWeb3(): Web3 {
  return web3;
}