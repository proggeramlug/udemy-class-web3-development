// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ISample {
    event ValueSet(uint256 value);

    function setValue(uint256 _value) external;
    function getValue() external view returns (uint256);
}

contract Sample is ISample {
    function setValue(uint256 _value) external {

    }
    function getValue() external view returns (uint256) {
        return 0;
    }
}

contract NFT is ERC721 {
    
}