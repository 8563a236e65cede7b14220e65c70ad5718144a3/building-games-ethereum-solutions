// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract SimplePonzi {
    address payable public currentInvestor;
    uint public currentInvestment = 0;

    receive () external payable {
        // new investments must be 10% greater than current
        uint minimumInvestment = currentInvestment * 11 / 10;
        require(msg.value > minimumInvestment);

        // document new investor
        address payable previousInvestor = currentInvestor;
        currentInvestor = msg.sender;
        currentInvestment = msg.value;

        // payout previous investor
        bool check = previousInvestor.send(msg.value);
        if (check == false) {
            revert("Payment Failed");
        }

    }

    fallback () external payable {}

}