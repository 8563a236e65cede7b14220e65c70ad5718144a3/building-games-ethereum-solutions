contract AddressTypes {

    function address_transfer() payable {
        address payable user = "0x801aa94F6B13DdF90447827eb905D7591b12eC79";
        if (user.balance < 1 ether) {
            user.transfer(1 ether);
        }
    }

}