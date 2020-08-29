contract Structs {
    struct Bet {
        uint amount;
        int32 line;
        BetStatus status;
    }

    function place_bet() payable {
        Bet memory bet = Bet(1 ether, -1, BetStatus.Open);
        bet.line;
    }

}