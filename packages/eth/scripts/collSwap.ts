import { ethers } from "hardhat";
import LendingPoolV2Artifact from "@aave/protocol-v2/artifacts/contracts/protocol/lendingpool/LendingPool.sol/LendingPool.json";
import { Contract } from "ethers";

const AAVE_MATIC_MAINNET = "0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf";
const AAVE_WETH = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";

const ALCHEMY_POLYGON_RPC_URL = process.env.ALCHEMY_POLYGON_RPC_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

const provider = ethers.getDefaultProvider(ALCHEMY_POLYGON_RPC_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

async function main() {
  const contract = new Contract(
    AAVE_MATIC_MAINNET,
    LendingPoolV2Artifact.abi,
    signer
  );

  const accData = await contract.getUserAccountData(
    "0x15900c698ee356E6976e5645394F027F0704c8Eb"
  );
  console.log({
    totalCollateralETH: accData.totalCollateralETH,
    0: accData[0],
  });

  const deposited = await contract.deposit(
    AAVE_WETH,
    ethers.utils.parseEther(".001"),
    "0xb69cf8f29A01c0DC43f56F96458368DfC020eB27",
    0
  );

  console.log({ deposited });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
