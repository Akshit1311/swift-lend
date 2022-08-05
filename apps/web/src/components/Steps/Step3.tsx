import React from "react";
import ExecutedFlashLoan from "../ExecutingMethod/ExecutedFlashLoan";
import ExecutingMethod from "../ExecutingMethod/ExecutingMethod";
import LenderBox from "../LenderBox/LenderBox";
import Loader from "../Loader/Loader";

const Step3 = () => {
  const lenders = [
    {
      value: "1000",
      asset: "USDT",
      icon: "aave",
    },
    {
      value: "1000",
      asset: "USDT",
      icon: "dodo",
    },
    {
      value: "1000",
      asset: "USDT",
      icon: "dydx",
    },
  ];

  return (
    <div>
      <div className="text-4xl font-bold text-center mx-auto block w-fit">
        <span className="bg-gradient-to-br from-teal-300 to-blue-500 bg-clip-text text-transparent flex items-center">
          <span className="mr-4">Executing Flash Loan</span>
          <Loader />
        </span>
      </div>

      <div className="grid grid-cols-2">
        <LenderBox lenders={lenders} />
        <div>
          <ExecutingMethod
            icon="uniswap"
            transactionType="Swap"
            coin1="usdt"
            coin2="btc"
          />
          <ExecutingMethod
            icon="curve"
            transactionType="Swap"
            coin1="btc"
            coin2="usdt"
          />
          <ExecutedFlashLoan />
        </div>
      </div>
    </div>
  );
};

export default Step3;
