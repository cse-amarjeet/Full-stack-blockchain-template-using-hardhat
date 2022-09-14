//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AJToken is ERC20 {
    constructor() ERC20("Amarjeet Token", "AJT") {
        _mint(msg.sender, 100000 * (10 ** 18));
    }
}