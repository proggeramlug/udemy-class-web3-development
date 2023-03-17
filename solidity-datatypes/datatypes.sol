// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataTypesDemo {
    // Basic data types
    bool public flag = true;
    bool private flat2 = false;
    uint public uintValue = 42;
    int public intValue = -42;
    address public owner = 0xC5D42fE4958B529bE1e6Bb5d9fBea1AFd980CA8e;

    // Bytes and string
    bytes32 public fixedBytes = "Fixed size bytes example";
    string public dynamicString = "Dynamic string example";

    // Array
    uint[] public uintArray = [1, 2, 3];
    bool[2] public boolArray = [true, false];

    // Enum
    enum Status {Created, Active, Completed}
    Status public currentStatus = Status.Created;

    enum PaymentStatus {Open, Closed}
    PaymentStatus public pstatus = PaymentStatus.Closed;

    // Struct
    struct Person {
        string name;
        uint age;
    }
    Person public person = Person("Alice", 30);

    // Mapping
    mapping(address => uint) public balances;

    // Constructor
    constructor() {
        owner = msg.sender;
    }

    // Function to update balances
    function updateBalance(address user, uint newBalance) public {
        balances[user] = newBalance;
    }

    // Function to change the current status
    function changeStatus(Status newStatus) public {
        currentStatus = newStatus;
    }
}

