// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract Random {
    function random(uint seed) public view returns (uint) {
        return uint (
            keccak256(abi.encode(blockhash(block.number - 1), seed))
        );
    }

    function rand_between (uint start, uint end)
    public view returns (uint) {
        return start + random(0x7543def) % (end - start);
    }

}