require("@nomiclabs/hardhat-waffle");
const { count } = require("console");
const fs = require("fs")
const privateKey = fs.readFileSync(".wallet").toString().trim() || "";
const keyProject = "35bc2aad37ec4fbcb3f3f56aa1db612f"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks:{
    hardhat:{
      chainId: 1337
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${keyProject}`,
      accounts:[privateKey]
    },
    mainnet:{
      url:`https://polygon-mainnet.infura.io/v3/${keyProject}`,
      accounts:[privateKey]
    }
  },
  solidity: "0.8.17",
};
