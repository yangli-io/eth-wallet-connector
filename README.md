# Ethereum Wallet Connection Library

## Installation

Make sure you also have the web3 library

```bash
npm install eth-wallet-connector

yarn add eth-wallet-connector
```

## Examples

Below examples are with React, however this library does not depend on React and will work with any Javascript web Frontend

### Metamask

```tsx
import React from 'react'
import { connectMetamask, getWeb3 } from 'eth-wallet-connector'

export default function ConnectComponent() {
  const handleConnectMetamask = async () => {
    const result = await connectMetamask();

    if (result) {
      // connected

      const web3 = getWeb3(); // this retrieves the web3 instance from the wallet

      const accounts = await web3.eth.getAccounts();
    }
  }

  return (
    <button onClick={handleConnectMetamask}>Connect Metamask</button>
  )
}
```

### Eagerly connect with Metamask
Try to connect with metamask and see if a connection was done before, this is useful when user refreshes the page or visits your Dapp again

```tsx
import React, { useEffect } from 'react'
import { eagerlyConnectMetamask, getWeb3 } from 'eth-wallet-connector'

export default function ConnectComponent() {
  useEffect(() => {
    const connectEagerlyMetamask = async () => {
      const result = await eagerlyConnectMetamask();

      if (result) {
        // connected

        const web3 = getWeb3(); // this retrieves the web3 instance from the wallet

        const accounts = await web3.eth.getAccounts();
      }
    }

    connectEagerlyMetamask();
  }, [])

  return (
    <div>This is the landing page</div>
  )
}
```

### WalletConnect

```tsx
import React from 'react'
import { connectWalletConnect, getWeb3 } from 'eth-wallet-connector'

export default function ConnectComponent() {
  const handleConnectWalletConnect = async () => {
    const result = await connectWalletConnect();

    if (result) {
      // connected

      const web3 = getWeb3(); // this retrieves the web3 instance from the wallet

      const accounts = await web3.eth.getAccounts();
    }
  }

  return (
    <button onClick={handleConnectWalletConnect}>Connect Wallet Connect</button>
  )
}
```

### TODO

- [ ] Fortmatic
- [ ] Others