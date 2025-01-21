import { useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'

import { walletconnect } from 'components/Wallet/Connectors'

import type { ExternalProvider } from '@ethersproject/providers'

const Web3Handler: FC<{ children: ReactNode }> = ({ children }) => {
  const { error } = useWeb3React()

  useEffect(() => {
    // Handle WalletConnect errors and disconnections
    if (error) {
      console.error('Web3 Error:', error)
      // If WalletConnect error occurs, reset the connector
      if (walletconnect.walletConnectProvider) {
        walletconnect.walletConnectProvider = undefined
      }
    }
  }, [error])

  return <>{children}</>
}

export const WalletContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const getLibrary = (provider: ExternalProvider) => {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3Handler>{children}</Web3Handler>
    </Web3ReactProvider>
  )
}

export default WalletContextProvider
