import React from "react";
import { ReactWithChildren } from "../../types";

type IButton = ReactWithChildren<
  { isTransparent?: boolean } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
>;

const Button: IButton = ({ isTransparent, children, ...rest }) => {
  return (
    <div
      {...rest}
      className={`bg-gradient-to-br from-teal-300 to-blue-500  ${
        isTransparent ? "bg-clip-text text-transparent" : ""
      } py-3 px-8 hover:opacity-75 cursor-pointer rounded-lg ${
        isTransparent ? "border-2 border-sky-500" : "text-white"
      } text-xl flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default Button;
