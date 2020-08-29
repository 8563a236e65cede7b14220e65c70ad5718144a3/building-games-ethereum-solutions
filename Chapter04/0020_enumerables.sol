enum State { Active, Refunding, Closed}

contract Enum {
    constructor(){
        State state = State.Refunding;
        uint(state);    // 1
        uint(State.Active); // 0
    }
}