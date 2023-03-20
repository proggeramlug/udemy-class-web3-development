require("dotenv").config();

const { API_URL, PUBLIC_KEY, PRIVATE_KEY } = process.env;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contractAbi = require("../artifacts/contracts/UdemyNFT.sol/UdemyNFT.json");
const contractAddress = "0xeB614377039C4CEFE4c3d2C9BFc29C961D295c75";

const nftContract = new web3.eth.Contract(contractAbi.abi, contractAddress);

async function main() {
    let nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest");

    const tx = {
        from: PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,
        gas: 95000,
        maxPriorityFeePerGas: '559500000108',
        data: nftContract.methods.withdraw().encodeABI()
    };

    web3.eth.accounts.signTransaction(tx, PRIVATE_KEY).then(signedTx => {
        web3.eth.sendSignedTransaction(
            signedTx.rawTransaction,
            function(err, hash) {
                if (!err) {
                    console.log("the hash is: ", hash);
                }
                else {
                    console.log("error while processing: ", err);
                }
            }
        )
    }).catch(error => {
        console.log("error: ", error);
    })
}

main().catch (error => {
    console.log("error: ", error);

})