require("@nomicfoundation/hardhat-toolbox");

require('@nomiclabs/hardhat-ethers');
// require("@nomiclabs/hardhat-waffle");

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = "9c4d37d7dd984bb2b652d085e142ddf5";

const SEPOLIA_PRIVATE_KEY = "0febd531724d95ed9e8a95434eff1574cdcdec9ff896c7189caba809d7fbebd6";

module.exports = {
  solidity: {
   version: "0.8.9",
   settings: {
     optimizer: {
       enabled: true,
       runs: 500, // Adjust the number of runs as needed
     },
   },
 },
  networks: {
    hardhat: {
    },
    testnet: {
       url: 'https://rpc.test.btcs.network',
       accounts: [SEPOLIA_PRIVATE_KEY],
       chainId: 1115,
    }
 },
 contractSizer: {
   alphaSort: true,
   runOnCompile: true,
   disambiguatePaths: false,
 },
};
