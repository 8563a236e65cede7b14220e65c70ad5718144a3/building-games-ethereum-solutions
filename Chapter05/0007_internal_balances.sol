// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract Roulette {
    mapping(address => uint) balances;

    function betRed () public payable {
        bool winner = (randomNumber() % 2 == 0);
        if (winner) {
            balances[msg.sender] += msg.value * 2;
        }
    }

    function randomNumber() private pure returns (uint) {
        return 0;
    }

    function withdraw() public payable {
        uint amount = balances[msg.sender];
        balances[msg.sender] = 0;
        msg.sender.transfer(amount);
    }

    function print_balance () view public returns (uint balance) {
        return address(this).balance;
    }

    function kill () public payable {
        selfdestruct(msg.sender);
    }

    receive() external payable {}
    fallback() external payable {}

}