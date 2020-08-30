// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract Marriage {
    address payable wife = address(0);
    address payable husband = address(1);

    function withdraw () public payable {
        uint amount = balances[msg.sender];
        balances[msg.sender] = 0;
        msg.sender.transfer(amount);
    }

    fallback() external payable {}
    receive() external payable {
        balances[wife] += msg.value / 2;
        balances[husband] += msg.value / 2;
    }
}