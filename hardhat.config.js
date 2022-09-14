require("@nomicfoundation/hardhat-toolbox");
//import "@nomiclabs/hardhat-waffle";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/84a94754e27649afb916e2cbb9cc3f24",
      accounts: [
        "0x54a09fb98269d254cff5fafd40da0fdeb559091247f26eb45873152320d1923a",
      ],
    },
  },
};
