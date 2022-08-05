import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import dotenv from "dotenv";
dotenv.config();

const ALCHEMY_POLYGON_RPC_URL = process.env.ALCHEMY_POLYGON_RPC_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      forking: {
        // polygon
        url: ALCHEMY_POLYGON_RPC_URL,
        blockNumber: 28583600,

        // bsc
        // url: process.env.BSC_RPC_URL,
        // blockNumber: 17988430,
      },
    },
    polygon: {
      url: ALCHEMY_POLYGON_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
