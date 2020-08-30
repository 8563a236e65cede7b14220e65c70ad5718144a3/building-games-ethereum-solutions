pragma solidity ^0.7.0;

contract TransferBalance {
    address payable owner;

    constructor () {
        owner = msg.sender;
    }

    function payout () public {
        uint balance = address(this).balance;
        owner.transfer(balance);
    }

    function print_balance () view public returns (uint balance) {
        return address(this).balance;
    }

}

