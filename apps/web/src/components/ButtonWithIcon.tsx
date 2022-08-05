import React from "react";
import { ReactWithChildren } from "../../types";

interface IButtonWithIcon {
  onClick: () => void;
}

const ButtonWithIcon: ReactWithChildren<IButtonWithIcon> = ({
  children,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-emerald-500 my-6 rounded-lg cursor-pointer flex border-lg px-4 py-2 w-fit"
    >
      <div className="min-w-fit mr-4  font-semibold">{children}</div>
      <svg
        width="58"
        height="24"
        viewBox="0 0 58 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M57.141 13.0607C57.7267 12.4749 57.7267 11.5251 57.141 10.9393L47.595 1.3934C47.0092 0.807612 46.0595 0.807612 45.4737 1.3934C44.8879 1.97918 44.8879 2.92893 45.4737 3.51472L53.959 12L45.4737 20.4853C44.8879 21.0711 44.8879 22.0208 45.4737 22.6066C46.0595 23.1924 47.0092 23.1924 47.595 22.6066L57.141 13.0607ZM0 13.5H56.0803V10.5H0L0 13.5Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default ButtonWithIcon;
