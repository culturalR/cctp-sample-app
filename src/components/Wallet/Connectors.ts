import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

import {
  ALL_SUPPORTED_CHAIN_IDS,
  CHAIN_ID_HEXES_TO_PARAMETERS,
} from 'constants/chains'

// Get RPC URLs for each supported chain
const getRpcUrls = () => {
  const rpcUrls: { [chainId: number]: string } = {}
  ALL_SUPPORTED_CHAIN_IDS.forEach((chainId) => {
    const chainHex = `0x${chainId.toString(16)}`
    const rpcUrl = CHAIN_ID_HEXES_TO_PARAMETERS[chainHex]?.rpcUrls?.[0]
    if (rpcUrl) {
      rpcUrls[chainId] = rpcUrl
    }
  })
  return rpcUrls
}

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
})

export const walletconnect = new WalletConnectConnector({
  rpc: getRpcUrls(),
  chainId: ALL_SUPPORTED_CHAIN_IDS[0], // Default to first supported chain
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  qrcode: true,
})
