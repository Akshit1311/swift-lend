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
      className={`${
        isTransparent ? "bg-blue-600" : "bg-transparent"
      } py-3 px-8 hover:opacity-75 cursor-pointer rounded-lg ${
        !isTransparent ? "text-blue-600 border-2 border-blue-600" : "text-white"
      } text-xl flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default Button;
