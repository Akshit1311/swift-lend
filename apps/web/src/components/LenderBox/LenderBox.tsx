import Image from "next/image";
import React from "react";
import Loader from "../Loader/Loader";

interface ILender {
  value: string;
  asset: string;
  icon: string;
}

interface ILenderBox {
  lenders: ILender[];
  isLoading?: boolean;
}

const LenderBox: React.FC<ILenderBox> = ({ lenders, isLoading }) => {
  return (
    <div
      className={`relative flex items-center border-2 ${
        isLoading ? "border-sky-400" : "border-emerald-300"
      } w-fit px-16 py-2 my-16`}
    >
      <div className="absolute translate-x-1/2 -translate-y-1/2 top-0 right-0">
        {isLoading ? (
          <Loader />
        ) : (
          <Image
            height="40"
            width="40"
            src={`/icons/circle-check.png`}
            alt="check"
          />
        )}
      </div>

      <div>
        <Image
          height="60"
          width="60"
          src={`/icons/solidity.png`}
          alt="solidity"
        />
      </div>
      <div>
        {lenders.map(({ value, asset, icon }) => (
          <div className="flex items-center">
            <div className="mx-8 my-6">
              <div className="text-center ">
                {value}&nbsp;{asset}
              </div>
              <div>
                <svg
                  width="148"
                  height="23"
                  viewBox="0 0 148 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.492746 10.7788C-0.0930408 11.3645 -0.0930408 12.3143 0.492746 12.9001L10.0387 22.446C10.6245 23.0318 11.5742 23.0318 12.16 22.446C12.7458 21.8602 12.7458 20.9105 12.16 20.3247L3.67473 11.8394L12.16 3.35414C12.7458 2.76835 12.7458 1.8186 12.16 1.23281C11.5742 0.647028 10.6245 0.647028 10.0387 1.23281L0.492746 10.7788ZM147.88 10.3394L1.55341 10.3394V13.3394L147.88 13.3394V10.3394Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div>
              <Image
                height="40"
                width="40"
                src={`/protocols/${icon}.png`}
                alt={icon}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LenderBox;
