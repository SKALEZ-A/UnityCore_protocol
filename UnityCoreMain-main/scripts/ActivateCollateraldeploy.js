const hre = require("hardhat");

async function main() {
  const ActivateCollateral = await hre.ethers.getContractFactory(
    "ActivateCollateral"
  );

  // Set a higher gas limit value
  const overrides = {
    gasLimit: 400000,
  };

  const deployedContract = await ActivateCollateral.deploy(
    "0x45cd22442646Ad7a5bD82738964eA138640b0c18",
    overrides // Add the overrides parameter
  );

  await deployedContract.deployed();

  console.log("ActivateCollateral Contract Address:", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
