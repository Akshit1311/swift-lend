import React from "react";
import ButtonWithIcon from "../ButtonWithIcon";
import CombinedProtocolImage from "../CombinedProtocolImage/CombinedProtocolImage";
import MethodStrip from "../MethodStrip/MethodStrip";
import ProtocolCard from "../ProtocolCard/ProtocolCard";

interface IStep2 {
  handleNext: () => void;
}

const Step2: React.FC<IStep2> = ({ handleNext }) => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-16">
        <div className="col-span-3 border-r-2 border-gray-500 pr-16">
          <div className="text-3xl font-bold ">
            <span className="bg-gradient-to-br from-teal-300 to-blue-500 bg-clip-text text-transparent">
              Step 2:&nbsp;
            </span>
            Choose Methods
          </div>

          <div className="grid grid-cols-3 gap-6 my-16">
            <ProtocolCard title="Deposit" icon="aave" />
            <ProtocolCard title="Swap" icon="curve" />
            <ProtocolCard title="Swap" icon="uniswap" />
            <ProtocolCard title="Buy" icon="nftx" />
            <ProtocolCard title="Sell" icon="nftx" />
            <ProtocolCard title="Borrow" icon="nftx" />
          </div>
        </div>

        <div className="col-span-2">
          <div className="opacity-40">
            <div className="text-3xl font-bold">
              <span className="bg-gradient-to-br from-teal-300 to-blue-500 bg-clip-text text-transparent">
                Lenders
              </span>
            </div>
            <CombinedProtocolImage />
          </div>
          <div>
            <div className="my-6  text-3xl font-bold">
              <span className="bg-gradient-to-br from-teal-300 to-blue-500 bg-clip-text text-transparent">
                Methods
              </span>
            </div>
            <MethodStrip
              icon="uniswap"
              transactionType="Swap"
              coin1="usdt"
              coin2="btc"
            />
            <MethodStrip
              icon="curve"
              transactionType="Swap"
              coin1="btc"
              coin2="usdt"
            />
          </div>
          <br />
          <ButtonWithIcon onClick={handleNext}>Execute</ButtonWithIcon>
        </div>
      </div>
    </div>
  );
};

export default Step2;
