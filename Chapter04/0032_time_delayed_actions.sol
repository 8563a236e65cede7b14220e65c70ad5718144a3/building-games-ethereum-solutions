contract TimedPayout {
    uint start;

    function TimedPayout () payable {
        start = now;
    }

    function claim () {
        if (now > start + 10 days) {
            msg.sender.transfer(address(this).balance);
        }
    }
}