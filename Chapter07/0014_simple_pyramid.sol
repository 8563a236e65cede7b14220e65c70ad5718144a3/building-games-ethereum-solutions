// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract SimplePyramid {

    uint public constant MINIMUM_INVESTMENT = 1e15;
    uint public numInvestors = 0;
    uint public depth = 0;

    address payable[] public investors;
    mapping(address => uint) public balances;

    constructor () payable {
        require(msg.value >= MINIMUM_INVESTMENT);
        investors.push();
        investors[numInvestors] = msg.sender;
        numInvestors = 1;
        depth = 1;
        balances[address(this)] = msg.value;
    }

    receive() external payable {
        require(msg.value >= MINIMUM_INVESTMENT);
        balances[address(this)] += msg.value;

        numInvestors += 1;
        investors[numInvestors -1] = msg.sender;

        if(numInvestors == investors.length) {
            // pay out previous layer
            uint endIndex = numInvestors - 2 ** depth;
            uint startIndex = endIndex - 2 ** (depth - 1);
            for (uint i=startIndex; i<endIndex; i++) {
                balances[investors[i]] += MINIMUM_INVESTMENT;
            }

            // spread the remaining ether among all participants
            uint paid = MINIMUM_INVESTMENT * 2 ** (depth - 1);
            uint eachInvestorGets =
                (balances[address(this)] - paid) / numInvestors;

            for (uint i=0; i<numInvestors; i++) {
                balances[investors[i]] += eachInvestorGets;
            }

            balances[address(this)] = 0;
            depth += 1;

            for (uint i=0; i<2**depth; i++) {
                investors.push();
            }

        }
    }

    function withdraw () public payable {
        uint payout = balances[msg.sender];
        balances[msg.sender] = 0;
        msg.sender.transfer(payout);
    }
}