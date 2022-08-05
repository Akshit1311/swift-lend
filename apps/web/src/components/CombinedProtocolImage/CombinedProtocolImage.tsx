import Image from "next/image";
import React from "react";

const CombinedProtocolImage = () => {
  return (
    <div className="my-4 flex items-center w-full">
      <div className="w-max">
        <Image
          height="40"
          width="40"
          src={"/protocols/aave.png"}
          alt={"aave"}
        />
        <Image
          height="40"
          width="40"
          src={"/protocols/dodo.png"}
          alt={"dodo"}
        />
        <Image
          height="40"
          width="40"
          src={"/protocols/dydx.png"}
          alt={"dydx"}
        />
      </div>
      <div className="text-2xl w-fit ml-16">3000 USDT</div>
    </div>
  );
};

export default CombinedProtocolImage;
