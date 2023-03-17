const hre = require("hardhat");

async function main() {
  const UdemyToken = await hre.ethers.getContractFactory("UdemyToken");
  const totalSupply = '1000';
  const token = await UdemyToken.deploy("UdemyToken", "UT", web3.utils.toWei(totalSupply,"ether"));

  await token.deployed();

  console.log(
    `deployed to ${fiatToCrypto.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

