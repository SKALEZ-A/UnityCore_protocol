const { ethers } = require('ethers');
// import { LoanProtocolAddress, LoanProtocolABI, MytokenAddress, MytokenABI, IceTokenAddress, IceTokenABI } from "@context/constant";
// Specify the Ethereum network provider URL
const providerUrl = 'https://rpc.test.btcs.network';

// Specify the contract and its address
const contractAddress = '0x7A214D6b5e41f2d763a09fA7158167b85b5eAEaF';

// Specify the interval between price updates in milliseconds
const updateInterval = 3000; // 3 secs

// Create a new instance of the ethers provider
const provider = new ethers.providers.JsonRpcProvider(providerUrl);

// Create an instance of the contract ABI
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_switchboard",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_aggregatorAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "latest",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "latestTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "latestValue",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
// Create a new ethers contract instance
const priceContract = new ethers.Contract(contractAddress, contractABI, provider);

// Function to fetch and update the price
async function updatePrice() {
  try {
    // Connect to an Ethereum wallet using a private key
    const privateKey = '0febd531724d95ed9e8a95434eff1574cdcdec9ff896c7189caba809d7fbebd6';
    const wallet = new ethers.Wallet(privateKey, provider);

    // Create a contract instance connected to the wallet
    const connectedContract = priceContract.connect(wallet);

    // Get the current gas price from the network
    const gasPrice = await provider.getGasPrice();

    // Increase the gas price by a certain factor (e.g., 1.5)
    const adjustedGasPrice = gasPrice.mul(ethers.BigNumber.from(150)).div(ethers.BigNumber.from(100));

    // Call the getPrice function on the contract with the adjusted gas price
    await connectedContract.getPrice({ gasLimit: 4000000, gasPrice: adjustedGasPrice });
    console.log('Price updated successfully');
  } catch (error) {
    console.error('Failed to update price:', error);
  }
}

// Function to periodically update the price
async function runPriceBot() {
  while (true) {
    await updatePrice();
    await sleep(updateInterval);
  }
}

// Helper function to pause execution for a specified duration
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Start the price bot
runPriceBot();
