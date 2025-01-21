/**
 * List of all mainnet chains/networks supported
 */
export enum MainnetChain {
  ETH = 'ETH',
  BASE = 'BASE',
}

/**
 * List of all testnet chains/networks supported
 */
export enum TestnetChain {
  ETH = 'ETH',
  AVAX = 'AVAX',
  ARB = 'ARB',
}

/**
 * List of all the chain/network IDs supported
 */
export enum SupportedChainId {
  // Mainnets
  ETH_MAINNET = 1,
  BASE_MAINNET = 8453,
  // Testnets
  ETH_SEPOLIA = 11155111,
  AVAX_FUJI = 43113,
  ARB_SEPOLIA = 421614,
}

// Legacy Chain enum for backward compatibility
export enum Chain {
  ETH = 'ETH',
  AVAX = 'AVAX',
  ARB = 'ARB',
  BASE = 'BASE',
}

/**
 * List of all the chain/network IDs supported in hexadecimals
 * TODO: Infer from SupportedChainId
 */
export const SupportedChainIdHex = {
  ETH_MAINNET: '0x1',
  ETH_SEPOLIA: '0xaa36a7',
  AVAX_FUJI: '0xa869',
  ARB_SEPOLIA: '0x66eee',
  BASE_MAINNET: '0x2105',
}

export interface ChainToChainIdMap {
  [key: string]: number
}

/**
 * Maps mainnet chains to their chain IDs
 */
export const MAINNET_CHAIN_TO_ID: ChainToChainIdMap = {
  [MainnetChain.ETH]: SupportedChainId.ETH_MAINNET,
  [MainnetChain.BASE]: SupportedChainId.BASE_MAINNET,
}

/**
 * Maps testnet chains to their chain IDs
 */
export const TESTNET_CHAIN_TO_ID: ChainToChainIdMap = {
  [TestnetChain.ETH]: SupportedChainId.ETH_SEPOLIA,
  [TestnetChain.AVAX]: SupportedChainId.AVAX_FUJI,
  [TestnetChain.ARB]: SupportedChainId.ARB_SEPOLIA,
}

/**
 * Legacy chain to chain ID mapping
 */
export const CHAIN_TO_CHAIN_ID: ChainToChainIdMap = {
  [Chain.ETH]: SupportedChainId.ETH_MAINNET,
  [Chain.AVAX]: SupportedChainId.AVAX_FUJI,
  [Chain.ARB]: SupportedChainId.ARB_SEPOLIA,
  [Chain.BASE]: SupportedChainId.BASE_MAINNET,
}

interface ChainToChainNameMap {
  [key: string]: string
}

/**
 * Maps mainnet chains to their readable names
 */
export const MAINNET_CHAIN_TO_NAME: ChainToChainNameMap = {
  [MainnetChain.ETH]: 'Ethereum Mainnet',
  [MainnetChain.BASE]: 'Base Mainnet',
}

/**
 * Maps testnet chains to their readable names
 */
export const TESTNET_CHAIN_TO_NAME: ChainToChainNameMap = {
  [TestnetChain.ETH]: 'Ethereum Sepolia',
  [TestnetChain.AVAX]: 'Avalanche Fuji',
  [TestnetChain.ARB]: 'Arbitrum Sepolia',
}

/**
 * Legacy chain to name mapping
 */
export const CHAIN_TO_CHAIN_NAME: ChainToChainNameMap = {
  ETH: 'Ethereum Mainnet',
  AVAX: 'Avalanche Testnet',
  ARB: 'Arbitrum Testnet',
  BASE: 'BASE Mainnet',
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === 'number') as SupportedChainId[]

/**
 * List of Circle-defined IDs referring to specific domains
 */
export enum DestinationDomain {
  ETH = 0,
  AVAX = 1,
  ARB = 3,
  BASE = 6,
}

// https://eips.ethereum.org/EIPS/eip-3085
interface AddEthereumChainParameter {
  chainId: string
  blockExplorerUrls?: string[]
  chainName?: string
  iconUrls?: string[]
  nativeCurrency?: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls?: string[]
}

const ETH_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.ETH_MAINNET,
  blockExplorerUrls: ['https://etherscan.io'],
  chainName: 'Ethereum Mainnet',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://ethereum-rpc.publicnode.com'],
}

const BASE_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.BASE_MAINNET,
  blockExplorerUrls: ['https://basescan.org'],
  chainName: 'Base Mainnet',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://mainnet.base.org'],
}

const ETH_SEPOLIA: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.ETH_SEPOLIA,
  blockExplorerUrls: ['https://sepolia.etherscan.io'],
  chainName: 'Sepolia Test Network',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://sepolia.infura.io/v3/'],
}

const AVAX_FUJI: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.AVAX_FUJI,
  blockExplorerUrls: ['https://testnet.snowtrace.io/'],
  chainName: 'Avalanche FUJI C-Chain',
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18,
  },
  rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
}

const ARB_SEPOLIA: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.ARB_SEPOLIA,
  blockExplorerUrls: ['https://sepolia.arbiscan.io/'],
  chainName: 'Arbitrum Sepolia Testnet',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://arb-sepolia.g.alchemy.com/v2/demo'],
}

interface ChainIdToChainParameters {
  [key: string]: AddEthereumChainParameter
}

export const CHAIN_ID_HEXES_TO_PARAMETERS: ChainIdToChainParameters = {
  [SupportedChainIdHex.ETH_MAINNET]: ETH_MAINNET,
  [SupportedChainIdHex.ETH_SEPOLIA]: ETH_SEPOLIA,
  [SupportedChainIdHex.AVAX_FUJI]: AVAX_FUJI,
  [SupportedChainIdHex.ARB_SEPOLIA]: ARB_SEPOLIA,
  [SupportedChainIdHex.BASE_MAINNET]: BASE_MAINNET,
}
