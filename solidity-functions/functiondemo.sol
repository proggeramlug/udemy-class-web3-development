// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FunctionDemo {
    uint256 private counter;
    address public owner;

    // Event
    event CounterUpdated(uint256 oldValue, uint256 newValue);

    // Constructor
    constructor() {
        owner = msg.sender;
    }

    // Public function to increment the counter
    function increment() public {
        uint256 oldValue = counter;
        counter += 1;
        emit CounterUpdated(oldValue, counter);
    }

    // External function to set the counter to a specific value
    function setCounter(uint256 newValue) external onlyOwner {
        uint256 oldValue = counter;
        counter = newValue;
        emit CounterUpdated(oldValue, counter);
    }

    // Internal function to double the counter
    function doubleCounter() internal {
        counter *= 2;
    }

    // Private function to reset the counter
    function resetCounter() private {
        counter = 0;
    }

    // View function to get the current counter value
    function getCounter() public view returns (uint256) {
        return counter;
    }

    // Pure function to add two numbers without accessing the contract state
    function add(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }

    // Modifier to restrict function access to the contract owner
    modifier onlyOwner {
        require(msg.sender == owner, "FunctionDemo: Only owner can call this function");
        _;
    }

    // Public function to reset and double the counter, demonstrating internal and private function usage
    function resetAndDoubleCounter() public onlyOwner {
        resetCounter();
        doubleCounter();
    }
}

contract FunctionDemo2 is FunctionDemo {
    function test1() public {
        doubleCounter();
        resetCounter();
    }
}