// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract Marriage {
    address payable wife = address(0);
    address payable husband = address(1);

    function withdraw () public payable {
        uint amount = balances[msg.sender];
        balances[msg.sender] = 0;
        bool success = msg.sender.call.value(amount)();
        require(success);
    }

    fallback() external payable {}
    receive() external payable {
        balances[wife] += msg.value / 2;
        balances[husband] += msg.value / 2;
    }
}