// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract MarriageInvestment {
    address payable wife = address(0);
    address payable husband = address(1);
    Stock GOOG = Stock(address(2));

    function split () public {
        uint amount = GOOG.balanceOf(address(this));
        uint each = amount / 2;
        uint remainder = amount % 2;
        GOOG.transfer(husband, each + remainder);
        GOOG.transfer(wife, each);
    }
}