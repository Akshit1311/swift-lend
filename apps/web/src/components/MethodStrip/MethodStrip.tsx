import Image from "next/image";
import React from "react";

export interface IMethodStrip {
  icon: string;
  transactionType: string;
  coin1: string;
  coin2: string;
}

const MethodStrip: React.FC<IMethodStrip> = ({
  icon,
  transactionType,
  coin1,
  coin2,
}) => {
  return (
    <div className="flex items-center my-8">
      <Image height="40" width="40" src={`/protocols/${icon}.png`} alt={icon} />
      <div className="mx-8 font-semibold">{transactionType}</div>
      <div className="flex items-center ">
        <Image height="30" width="30" src={`/coins/${coin1}.png`} alt={coin1} />
        <svg
          className="mx-4"
          width="38"
          height="24"
          viewBox="0 0 38 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.0607 13.0607C37.6464 12.4749 37.6464 11.5251 37.0607 10.9393L27.5147 1.3934C26.9289 0.807612 25.9792 0.807612 25.3934 1.3934C24.8076 1.97918 24.8076 2.92893 25.3934 3.51472L33.8787 12L25.3934 20.4853C24.8076 21.0711 24.8076 22.0208 25.3934 22.6066C25.9792 23.1924 26.9289 23.1924 27.5147 22.6066L37.0607 13.0607ZM0 13.5H36V10.5H0V13.5Z"
            fill="white"
          />
        </svg>

        <Image height="30" width="30" src={`/coins/${coin2}.png`} alt={coin2} />
      </div>
    </div>
  );
};

export default MethodStrip;
