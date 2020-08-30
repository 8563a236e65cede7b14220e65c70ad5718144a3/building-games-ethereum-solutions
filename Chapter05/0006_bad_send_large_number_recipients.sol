// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract Welfare {
    address payable[] recipients;

    function register () public {
        recipients.push(msg.sender);
    }

    function disperse () public {
        uint balance = address(this).balance;
        uint amount = balance / recipients.length;
        bool check = false;
        for (uint i=0; i<recipients.length; i++){
            check = recipients[i].send(amount);
        }
    }

    function print_balance () view public returns (uint balance) {
        return address(this).balance;
    }

    receive() external payable {}
    fallback() external payable {}

}