contract Bear {
    string public name = "gummy";
    uint internal id = 1;

    function touchMe (uint times) public pure returns (bool) {
        bool touched = false;
        if (times > 0) {
            touched = true;
            return touched;
        }
    }
}