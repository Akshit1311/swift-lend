import Image from "next/image";
import React from "react";

interface ILenderInput {
  icon: string;
}

const LenderInput: React.FC<ILenderInput> = ({ icon }) => {
  return (
    <div className="grid grid-cols-3 gap-1 my-6 items-center">
      <div className="col-span-1 my-auto flex items-center">
        <Image
          className="h-full"
          height="55"
          width="55"
          src={`/protocols/${icon}.png`}
          alt={icon}
        />
      </div>
      <div>
        <div className="text-sm font-medium">Amount</div>
        <input
          type="text"
          className="bg-slate-500/50 outline-none px-3 text-sm py-2 rounded-lg"
          placeholder="$1000"
          defaultValue="$1000"
        />
      </div>
    </div>
  );
};

export default LenderInput;
