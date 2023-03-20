// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/*
* @title Sample ERC721 Token
* @author amlug.eth
*
*/

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract UdemyNFT is ERC721, Ownable {

    string private baseURI = "";
    uint256 private price = 0.01 ether;
    Counters.Counter private tokenId;

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {
       
    }

    function mintToken() public payable {
        require(msg.value >= price, "insufficient value");
        uint256 currentTokenId = Counters.current(tokenId);
        _mint(msg.sender, currentTokenId);
        Counters.increment(tokenId);
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "Nothing to withdraw.");
        (bool success, ) = 0x361807A8db295657f246861360F66a305337dA6c.call{ value: balance }("");
        require(success, "Failed to withdraw.");
    }

    function setBaseURI(string memory newURI) public onlyOwner {
        baseURI = newURI;
    }

    function _baseURI() internal override view virtual returns (string memory) {
        return baseURI;
    }

}