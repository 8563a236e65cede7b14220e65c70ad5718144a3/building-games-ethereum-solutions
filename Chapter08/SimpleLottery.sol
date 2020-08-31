// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract SimpleLottery {
    uint public constant TICKET_PRICE = 1e16;

    address[] public tickets;
    address payable public winner;
    uint public ticketingCloses;

    constructor () {
        uint duration = 3600 * 24 * 3;
        ticketingCloses = block.timestamp + duration;
    }

    function buy () public payable {
        require(msg.value == TICKET_PRICE);
        require(block.timestamp < ticketingCloses);
        tickets.push(msg.sender);
    }

    function drawWinner() public {
        require(block.timestamp > ticketingCloses + 5 minutes);
        require(winner == address(0));

        bytes32 rand =
            keccak256(abi.encode(blockhash(block.number - 1), 0xff));
        winner = payable(tickets[uint(rand) % tickets.length]);
    }

    function withdraw () public {
        require(msg.sender == winner);
        msg.sender.transfer(address(this).balance);
    }

    receive() external payable {
        buy();
    }

    fallback() external payable {}
}