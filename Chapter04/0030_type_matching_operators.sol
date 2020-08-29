contract TypeMatching {
    constructor () {
        uint a = 10;
        uint b = 3;
        int c = 5;
        a * b; // 30
        b * c; // Error: type mismatch
    }
}