
var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')
var myEnv = dotenv.config()
dotenvExpand.expand(myEnv)
const hre = require("hardhat");

const { API_URL } = process.env;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

async function main() {
  const UdemyToken = await hre.ethers.getContractFactory("UdemyToken");
  const totalSupply = '1000';
  const token = await UdemyToken.deploy("UdemyToken", "UT", web3.utils.toWei(totalSupply,"ether"));

  await token.deployed();

  console.log(
    `deployed to ${token.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

