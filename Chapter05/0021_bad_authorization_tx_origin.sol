contract BadAuth {
    function transferTo(address dest) {
        require(tx.origin == owner);
        dest.transfer(address(this).balance);
    }
}