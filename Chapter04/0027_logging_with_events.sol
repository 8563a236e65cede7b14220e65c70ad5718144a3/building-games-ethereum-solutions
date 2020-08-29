contract WithdrawContract {
    event Withdrawal(
        address indexed user,
        uint amount,
        uint timestamp
    );

    function withdraw (uint amount) public {
        Withdrawal(msg.sender, amount, now);
    }
}