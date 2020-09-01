// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract RNGLottery {

    uint constant public TICKET_PRICE = 1e16;

    address[] public tickets;
    address payable public winner;
    bytes32 public seed;
    mapping(address => bytes32) public commitments;

    uint public ticketDeadline;
    uint public revealDeadline;
    uint public drawBlock;

    constructor(uint duration, uint revealDuration){
        ticketDeadline = block.number + duration;
        revealDeadline = ticketDeadline + revealDuration;
        drawBlock = revealDeadline + 5;
    }

    function createCommitment(address user, uint N)
    public pure returns (bytes32 commitment) {
        return keccak256(abi.encode(user, N));
    }

    function buy (bytes32 commitment) payable public {
        require(msg.value == TICKET_PRICE);
        require(block.number <= ticketDeadline);

        commitments[msg.sender] = commitment;
    }

    function reveal (uint N) public {
        require(block.number > ticketDeadline);
        require(block.number <= revealDeadline);

        bytes32 hash = createCommitment(msg.sender, N);
        require(hash == commitments[msg.sender]);

        seed = keccak256(abi.encode(seed, N));
        tickets.push(msg.sender);
    }

    function drawWinner () public {
        require(block.number > drawBlock);
        require(winner == address(0));
        uint randIndex = uint(seed) % tickets.length;
        winner = payable(tickets[randIndex]);
    }

    function withdraw () public {
        require(msg.sender == winner);
        msg.sender.transfer(address(this).balance);
    }

}