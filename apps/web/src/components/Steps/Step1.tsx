import React from "react";
import ButtonWithIcon from "../ButtonWithIcon";
import LenderInput from "../LenderInput/LenderInput";
import ProtocolCard from "../ProtocolCard/ProtocolCard";

interface IStep1 {
  handleNext: () => void;
}

const Step1: React.FC<IStep1> = ({ handleNext }) => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-16">
        <div className="col-span-3 border-r-2 border-gray-500 pr-16">
          <div className="text-3xl font-bold ">
            <span className="bg-gradient-to-br from-teal-300 to-blue-500 bg-clip-text text-transparent">
              Step 1:&nbsp;
            </span>
            Choose Lenders
          </div>

          <div className="grid grid-cols-3 gap-6 my-16">
            <ProtocolCard
              title="AAVE"
              icon="aave"
              cornerIcon="check"
              isSelected
            />
            <ProtocolCard
              title="DYDX"
              icon="dydx"
              cornerIcon="check"
              isSelected
            />
            <ProtocolCard
              title="DODO"
              icon="dodo"
              cornerIcon="check"
              isSelected
            />
            <ProtocolCard title="Compound" icon="compound" />
            <ProtocolCard title="Request for protocol" icon="add" />
          </div>
        </div>

        <div>
          <div className="text-3xl font-bold">
            <span className="bg-gradient-to-br from-teal-300 to-blue-500 bg-clip-text text-transparent">
              Lenders
            </span>
          </div>
          <LenderInput icon="aave" />
          <LenderInput icon="dodo" />
          <LenderInput icon="dydx" />

          <div>
            <div className="my-6 opacity-40 text-3xl font-bold">
              <span className="bg-gradient-to-br from-teal-300 to-blue-500 bg-clip-text text-transparent">
                Methods
              </span>
            </div>
            <svg
              width="102"
              height="63"
              viewBox="0 0 102 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="31.5"
                cy="31.5"
                r="31.5"
                fill="#797F87"
                fillOpacity="0.3"
              />
              <circle
                cx="50.5"
                cy="31.5"
                r="31.5"
                fill="#69717B"
                fillOpacity="0.6"
              />
              <circle
                cx="70.5"
                cy="31.5"
                r="31.5"
                fill="#677281"
                fillOpacity="0.9"
              />
            </svg>
          </div>
          <br />

          <ButtonWithIcon onClick={handleNext}>Choose Methods</ButtonWithIcon>
        </div>
      </div>
    </div>
  );
};

export default Step1;
