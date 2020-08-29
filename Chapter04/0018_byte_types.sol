contract ByteTypes {
    constructor () {
        byte a = byte(1);
        uint b = 0x1573593ab3;
        bytes32 c = bytes32(b);
        c.length;

        bytes d = new bytes(32);
        d.length = 64;
    }
}