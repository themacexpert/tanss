// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat');
require('@nomicfoundation/hardhat-ethers');

async function main() {
  // Get ERC-20 Contract
  const MyTok = await hre.ethers.getContractFactory('MyTok');

  // Define custom gas price and gas limit
  // Gas price is typically specified in 'wei' and gas limit is just a number
  // You can use ethers.js utility functions to convert from gwei or ether if needed
  const customGasPrice = 50000000000; // example for 50 gwei
  const customGasLimit = 5000000; // example gas limit

  // Deploy the contract providing a gas price and gas limit
  const myTok = await MyTok.deploy({
  gasPrice: customGasPrice,
  gasLimit: customGasLimit,
} );

  // Wait for the Deployment
  await myTok.waitForDeployment();

  console.log(`Contract deployed to ${myTok.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
