pragma solidity ^0.7.0;

contract NotSoPrivateData {
    uint public money = 16;
    uint private constant lives = 100;
    string private password = "twiddledee";
}