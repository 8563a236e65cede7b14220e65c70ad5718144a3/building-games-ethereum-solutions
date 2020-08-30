// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract TokenSale {
    enum State { Active, Suspended}

    address public owner;
    ERC20 public token;
    State public state;

    constructor(address tokenContractAddress) public {
        owner = msg.sender;
        token = ERC20(tokenContractAddress);
        state = State.Active;
    }

    // 1:1 exchange of ETH for token
    function buy () public payable {
        require(state == State.Active);
        token.transfer(msg.sender, msg.value);
    }

    function suspend () public {
        require(msg.sender == owner);
        state = State.Suspended;
    }

    function activate () public {
        require(msg.sender == owner);
        state = State.Active;
    }

    function withdraw() public payable {
        require(msg.sender == owner);
        owner.transfer(address(this).balance);
    }

    receive() external payable {}
    fallback() external payable {}

}