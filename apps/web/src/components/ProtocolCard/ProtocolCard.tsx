import Image from "next/image";
import React from "react";

interface IProtocolCard {
  title: string;
  icon: string;
  cornerIcon?: string;
  isSelected?: boolean;
}

const ProtocolCard: React.FC<IProtocolCard> = ({
  title,
  icon,
  cornerIcon,
  isSelected,
}) => {
  return (
    <div
      className={`relative bg-slate-500/50 w-full flex flex-col py-6 rounded-lg cursor-pointer ${
        isSelected ? "border-2 border-green-300" : ""
      }`}
    >
      {cornerIcon && (
        <div className="absolute top-3 right-3">
          <Image
            height="25"
            width="25"
            src={`/icons/${cornerIcon}.png`}
            alt={title}
          />
        </div>
      )}
      <div className="w-fit mx-auto">
        <Image
          height="60"
          width="60"
          src={`/protocols/${icon}.png`}
          alt={title}
        />
      </div>
      <div className="mt-2 text-lg text-center font-semibold">{title}</div>
    </div>
  );
};

export default ProtocolCard;
