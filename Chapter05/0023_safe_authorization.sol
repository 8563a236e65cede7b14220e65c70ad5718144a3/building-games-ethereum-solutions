contract BadAuth {
    function transferTo(address dest) {
        require(msg.sender == owner);
        dest.transfer(address(this).balance);
    }
}