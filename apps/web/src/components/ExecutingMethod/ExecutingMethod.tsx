import Image from "next/image";
import React from "react";
import Loader from "../Loader/Loader";
import MethodStrip, { IMethodStrip } from "../MethodStrip/MethodStrip";

const ExecutingMethod: React.FC<IMethodStrip & { isLoading?: boolean }> = ({
  icon,
  transactionType,
  coin1,
  coin2,
  isLoading,
}) => {
  return (
    <div
      className={`relative border-2 ${
        isLoading ? "border-sky-400" : "border-emerald-300"
      } w-fit h-fit px-16 my-16`}
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
      <MethodStrip
        icon={icon}
        transactionType={transactionType}
        coin1={coin1}
        coin2={coin2}
      />
    </div>
  );
};

export default ExecutingMethod;
