import React from "react";
import Image from "next/image";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className="flex w-full px-16 py-6 justify-between">
      <button onClick={() => setTheme(isDark ? "light" : "dark")}>
        <Image
          src={`/icons/${theme}.${isDark ? "webp" : "png"}`}
          height="32"
          width="32"
        />
      </button>

      <ConnectButton />
    </div>
  );
};

export default Navbar;
