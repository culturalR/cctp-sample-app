import { ethers } from 'ethers';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Base mainnet configurations
const BASE_RPC_URL = 'https://mainnet.base.org';
const TOKEN_MESSENGER_ADDRESS = '0x1682ae6375c4e4a97e4b583bc394c861a46d8962';

// From the logs, this is the actual MessageTransmitter address
const MESSAGE_TRANSMITTER_ADDRESS = '0xAD09780d193884d503182aD4588450C416D6F9D4';

const TOKEN_MESSENGER_ABI = [
  'event DepositForBurn(uint64 indexed nonce, address indexed burnToken, uint256 amount, address depositor, bytes32 mintRecipient, uint32 destinationDomain, bytes32 destinationTokenMessenger, bytes32 destinationCaller)'
];

const MESSAGE_TRANSMITTER_ABI = [
  'event MessageSent(bytes message)'
];

async function getMessageDetails(txHash) {
  // Setup provider for Base network
  const provider = new ethers.providers.JsonRpcProvider(BASE_RPC_URL);

  // Get contract instances
  const messageTransmitter = new ethers.Contract(MESSAGE_TRANSMITTER_ADDRESS, MESSAGE_TRANSMITTER_ABI, provider);

  try {
    console.log('Fetching transaction receipt...');
    const receipt = await provider.getTransactionReceipt(txHash);
    if (!receipt) {
      throw new Error('Transaction not found');
    }

    console.log('Looking for MessageSent event...');
    const messageSentLog = receipt.logs
      .find(log => {
        try {
          if (log.address.toLowerCase() === MESSAGE_TRANSMITTER_ADDRESS.toLowerCase()) {
            const parsed = messageTransmitter.interface.parseLog(log);
            return parsed.name === 'MessageSent';
          }
          return false;
        } catch (e) {
          return false;
        }
      });

    if (!messageSentLog) {
      console.log('Transaction logs:', receipt.logs);
      throw new Error('MessageSent event not found in transaction');
    }

    const parsedLog = messageTransmitter.interface.parseLog(messageSentLog);
    const messageBytes = parsedLog.args.message;
    const messageHash = ethers.utils.keccak256(messageBytes);

    console.log('\nMessage Details:');
    console.log('-----------------');
    console.log('Message Bytes:', messageBytes);
    console.log('Message Hash:', messageHash);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Prompt for transaction hash
rl.question('Enter the transaction hash: ', async (txHash) => {
  await getMessageDetails(txHash);
  rl.close();
});
