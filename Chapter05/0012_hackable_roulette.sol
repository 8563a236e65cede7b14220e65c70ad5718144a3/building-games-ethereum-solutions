// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract HackableRoulette {
    mapping(address => uint) public balances;

    function betRed () public payable {
        bool winner = (randomNumber() % 2 == 0);
        if (winner) {
            balances[msg.sender] += msg.value * 2;
        }
    }

    function randomNumber() public pure returns (uint) {
        return 0;
    }

    function withdraw () public payable {
        uint amount = balances[msg.sender];
        msg.sender.call{value: amount}("");
        balances[msg.sender] = 0;
    }

    fallback() external payable {}
    receive() external payable {}

}