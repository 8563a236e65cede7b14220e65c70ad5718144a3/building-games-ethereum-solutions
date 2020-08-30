// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract Welfare {
    address payable[] private recipients;
    uint private totalFunding = 0;
    mapping(address => uint) private withdrawn;

    function register () public {
        recipients.push(msg.sender);
    }

    function print_balance () public view returns (uint balance) {
        return address(this).balance;
    }

    function withdraw () public payable {
        uint withdrawnSoFar = withdrawn[msg.sender];
        uint allocation = totalFunding / recipients.length;
        require(allocation > withdrawnSoFar);

        uint amount = allocation - withdrawnSoFar;
        withdrawn[msg.sender] = allocation;
        msg.sender.transfer(amount);
    }

    receive() external payable {
        totalFunding += msg.value;
    }

    fallback() external payable {}
}