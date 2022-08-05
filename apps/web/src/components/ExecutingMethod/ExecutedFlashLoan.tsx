import Image from "next/image";
import React from "react";
import CombinedProtocolImage from "../CombinedProtocolImage/CombinedProtocolImage";

const ExecutedFlashLoan = () => {
  return (
    <div className="relative border-2 border-emerald-300 w-fit h-fit px-16 my-16">
      <div className="absolute translate-x-1/2 -translate-y-1/2 top-0 right-0">
        <Image
          height="40"
          width="40"
          src={`/icons/circle-check.png`}
          alt="check"
        />
      </div>
      <CombinedProtocolImage />
    </div>
  );
};

export default ExecutedFlashLoan;
