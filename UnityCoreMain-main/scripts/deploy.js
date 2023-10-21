const { ethers } = require("hardhat");

async function main() {
  const ucoreaddress = "0x81bE8C9e92D2054DA8FE674F9cd669843A2E8C49";
  const icetokenaddress = "0x5a05403a441939C70B0A9708FDAfE4d276C7c2aB";

  const LendingPoolToken = await ethers.getContractFactory("LendingPoolToken");
  const lendingPoolToken = await LendingPoolToken.deploy("LCORE", "LLC");
  await lendingPoolToken.deployed();
  console.log("LendingPoolToken Contract Address:", lendingPoolToken.address);

  const LoanProtocol = await ethers.getContractFactory(
    "UnityCoreLendingProtocol"
  );
  const loanProtocol = await LoanProtocol.deploy(
    lendingPoolToken.address,
    "0x3786495f5d8a83b7bacd78e2a0c61ca20722cce3",
    "0x3786495f5d8a83b7bacd78e2a0c61ca20722cce3",
    "0x3D5b6eBb86e4623Ce743B1887054AeC368DeDb36",
    "0xAA6FAa6958Ed517fC5255c7963382c73a6EBa37b"
  );
  await loanProtocol.deployed();
  console.log("LoanProtocol Contract Address:", loanProtocol.address);

  // Deploy RewardsContract
  // const RewardsContract = await hre.ethers.getContractFactory(
  //   "RewardsContract"
  // );
  // const deployedContract3 = await RewardsContract.deploy(
  //   "0xf94C6e9E7AAEdF5a5B08F3C9bbddAadb8eB53F0D"
  // );
  // await deployedContract3.deployed();
  // console.log("RewardsContract Contract Address:", deployedContract3.address);

  // // Deploy WithdrawContract
  // const WithdrawContract = await hre.ethers.getContractFactory(
  //   "WithdrawContract"
  // );
  // const deployedContract4 = await WithdrawContract.deploy(
  //   "0xC7fD296B7F873De625a36F96acF486A3b4826f0e",
  //   "0xAA6FAa6958Ed517fC5255c7963382c73a6EBa37b",
  //   "0xD6a7b835d6B0B9506263eA64a73FE68716C2b02B",
  //   "0x3786495f5d8a83b7bacd78e2a0c61ca20722cce3",
  //   "0x3786495f5d8a83b7bacd78e2a0c61ca20722cce3"
  // );
  // await deployedContract3.deployed();
  // console.log("WithdrawContract Contract Address:", deployedContract4.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
