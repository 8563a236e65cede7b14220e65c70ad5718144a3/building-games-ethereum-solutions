// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract RecurringLottery {
    struct Round {
        uint endBlock;
        uint drawBlock;
        Entry[] entries;
        uint totalQuantity;
        address payable winner;
    }

    struct Entry {
        address buyer;
        uint quantity;
    }

    uint constant public TICKET_PRICE = 1e15;
    mapping(uint => Round) public rounds;
    uint public round;
    uint public duration;
    mapping(address => uint) public balances;

    constructor (uint _duration) {
        duration = _duration;
        round = 1;
        rounds[round].endBlock = block.number + duration;
        rounds[round].drawBlock = block.number + duration + 5;
    }

    function buy () public payable {
        require(msg.value % TICKET_PRICE == 0);

        if (block.number > rounds[round].endBlock) {
            round += 1;
            rounds[round].endBlock = block.number + duration;
            rounds[round].drawBlock = block.number + duration + 5;
        }

        uint quantity = msg.value / TICKET_PRICE;
        Entry memory entry = Entry(msg.sender, quantity);
        rounds[round].entries.push(entry);
        rounds[round].totalQuantity += quantity;

    }

    function drawWinner (uint roundNumber) public {
        Round storage drawing = rounds[roundNumber];
        require(drawing.winner == address(0));
        require(block.number > drawing.drawBlock);
        require(drawing.entries.length > 0);

        bytes32 rand = keccak256(
            abi.encode(blockhash(drawing.drawBlock))
        );
        uint counter = uint(rand) % drawing.totalQuantity;
        for (uint i=0; i < drawing.entries.length; i++) {
            uint quantity = drawing.entries[i].quantity;
            if (quantity > counter) {
                drawing.winner = payable(drawing.entries[i].buyer);
                break;
            } else {
                counter -= quantity;
            }
        }

        balances[drawing.winner] += TICKET_PRICE * drawing.totalQuantity;
    }

    function withdraw () public {
        uint amount = balances[msg.sender];
        balances[msg.sender] = 0;
        msg.sender.transfer(amount);
    }

    function deleteRound (uint _round) public {
        require(block.number > rounds[_round].drawBlock + 100);
        require(rounds[_round].winner != address(0));
        delete rounds[_round];
    }

    receive() external payable {
        buy();
    }
}