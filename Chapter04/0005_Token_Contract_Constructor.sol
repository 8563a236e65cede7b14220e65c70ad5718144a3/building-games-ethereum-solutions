/*
 * Deploy with deployer.deploy(Token, "UnicornToken", 1e15)
*/

pragma solidity ^0.7.0;

contract Token {
    constructor(string _name, uint _totalSupply) public {
        name = _name;
        totalSupply = _totalSupply;
    }
}
