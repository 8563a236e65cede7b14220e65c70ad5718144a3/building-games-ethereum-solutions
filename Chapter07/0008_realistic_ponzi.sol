// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract GradualPonzi {
    address payable[] public investors;
    mapping (address => uint) public balances;
    uint public constant MINIMUM_INVESTMENT = 1e15;

    constructor () {
        investors.push(msg.sender);
    }

    function withdraw () public payable {
        uint payout = balances[msg.sender];
        balances[msg.sender] = 0;
        msg.sender.transfer(payout);
    }

    receive() external payable {
        require(msg.value >= MINIMUM_INVESTMENT);
        uint eachInvestorGets = msg.value / investors.length;

        for (uint i=0; i<investors.length; i++) {
            balances[investors[i]] += eachInvestorGets;
        }
        investors.push(msg.sender);
    }

    fallback() external payable {}

}