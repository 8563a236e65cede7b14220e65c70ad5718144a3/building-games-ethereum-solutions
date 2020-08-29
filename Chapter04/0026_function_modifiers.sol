contract owned {
    constructor () {
        owner = msg.sender;
    }
    address owner;

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
}

contract mortal is owned {
    function kill () onlyOwner {
        selfdestruct(owner);
    }
}