import React from "react";

const Loader = () => {
  return (
    <span className="relative flex h-5 w-5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
    </span>
  );
};

export default Loader;
