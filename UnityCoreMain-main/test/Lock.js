const { ethers } = require("ethers");

async function depositCORE() {
  // Replace this with the actual address of the deployed UcoreLendingContract
  const ucoreLendingContractAddress =
    "0xD6a7b835d6B0B9506263eA64a73FE68716C2b02B";

  // Fetch the deployed contract using the address and ABI
  const UcoreLendingContract = await ethers.getContractFactory(
    "UnityCoreLendingProtocol"
  );
  const ucoreLendingContract = await UcoreLendingContract.attach(
    ucoreLendingContractAddress
  );

  // Deposit CORE
  const amountToDeposit = ethers.utils.parseUnits("100");
  await ucoreLendingContract.depositCORE({ value: amountToDeposit });

  console.log("CORE deposited successfully!");
}

depositCORE()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
