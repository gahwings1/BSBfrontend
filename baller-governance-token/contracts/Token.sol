// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Token {
    string public name = "Baller Governance Token";
    string public symbol = "BGT";
    uint256 public decimals = 18;
    uint256 public totalSupply = 1000000*(10**decimals);

    constructor() {

    }
}
