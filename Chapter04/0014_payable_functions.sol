contract Payable {
    function buyLottoTicket() payable {
        require(msg.value == TICKET_PRICE);
        players.push(msg.sender);
    }
}
