// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract TrustFund {
    address payable[3] children;

    constructor (address payable[3] memory _children) {
        children = _children;
    }

    function updateAddress(uint child, address payable newAddress) public {
        require(msg.sender == children[child]);
        children[child] = newAddress;
    }

    function disperse () public {
        uint balance = address(this).balance;
        children[0].transfer(balance / 2);
        children[1].transfer(balance / 4);
        children[2].transfer(balance / 4);
    }

    function print_balance () view public returns (uint balance) {
        return address(this).balance;
    }

    event Received(address, uint);
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
    fallback() external payable {}

}