contract BugSquash {
    enum State { Alive, Squashed}
    State state;
    address owner;

    constructor () {
        state = State.Alive;
        owner = msg.sender;
    }

    function squash () {
        // this should never throw an error
        assert(owner != address(0));

        if (state == State.Alive) {
            state = State.Squashed;
        } else if (state == State.Squashed) {
            revert();
        }
    }

    function kill () {
        // any nonowner trying to kill the contract
        // likely has malicious intent
        require(msg.sender == owner);
        selfdestruct(owner);
    }

}