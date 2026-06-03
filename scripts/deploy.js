const hre = require("hardhat");

async function main() {
  const PerpetualsExample = await hre.ethers.getContractFactory("PerpetualsExample");
  const perpetuals = await PerpetualsExample.deploy();
  await perpetuals.deployed();
  console.log("PerpetualsExample deployed to:", perpetuals.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});