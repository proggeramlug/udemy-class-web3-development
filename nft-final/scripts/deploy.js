
var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')
var myEnv = dotenv.config()
dotenvExpand.expand(myEnv)
const hre = require("hardhat");


async function main() {
  const UdemyNFT = await hre.ethers.getContractFactory("UdemyNFT");
  const token = await UdemyNFT.deploy("UdemyNFT", "UNFT");

  await token.deployed();

  console.log(
    `deployed to ${token.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

