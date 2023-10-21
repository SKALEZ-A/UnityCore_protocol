const hre = require("hardhat");

async function main() {
  const UnityCoreLendingProtocolProxy = await hre.ethers.getContractFactory(
    "UnityCoreLendingProtocolProxy"
  );
  const deployedContract = await UnityCoreLendingProtocolProxy.deploy(
    "0x3D5b6eBb86e4623Ce743B1887054AeC368DeDb36"
  );

  await deployedContract.deployed();

  console.log(
    "UnityCoreLendingProtocolProxy Contract Address:",
    deployedContract.address
  );

  // Deploy Mytokenn
  const Mytokenn = await hre.ethers.getContractFactory("Mytokenn");
  const deployedContract4 = await Mytokenn.deploy();
  await deployedContract4.deployed();
  console.log("Ucore Contract Address:", deployedContract4.address);

  // Deploy ActivateCollateral
  const ActivateCollateral = await hre.ethers.getContractFactory(
    "ActivateCollateral"
  );
  const deployedContract2 = await ActivateCollateral.deploy(
    "0x282bdbAB5608B508ddC45657564dbf19522CC80d"
  );
  await deployedContract2.deployed();
  console.log(
    "ActivateCollateral Contract Address:",
    deployedContract2.address
  );
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
