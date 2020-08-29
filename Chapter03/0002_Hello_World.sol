//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract HelloWorld {
    address payable owner;
    string greeting = "Hello World";

    constructor () {
        owner = msg.sender;
    }

    function greet () view public returns (string memory) {
        return greeting;
    }

    function kill () public {
        require(owner == msg.sender);
        selfdestruct(owner);
    }
}