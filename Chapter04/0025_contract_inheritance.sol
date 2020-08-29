contract owned {
    function owned() { owner = msg.sender; }
    address owner;
}

contract mortal is owned {
    function kill() {
        if(msg.sender == owner) selfdestruct(owner);
    }
}