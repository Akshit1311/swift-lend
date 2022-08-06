import React from "react";
import Image from "next/image";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useTheme } from "next-themes";

import { useRouter } from "next/router";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const router = useRouter();

  return (
    <div className="flex w-full px-16 py-6 justify-between relative">
      <button onClick={() => setTheme(isDark ? "light" : "dark")}>
        <Image
          src={`/icons/${theme}.${isDark ? "webp" : "png"}`}
          height="32"
          width="32"
          alt="theme"
        />
      </button>

      <div className="absolute left-1/2 -translate-x-1/2">
        <Image
          src="/icons/logo.png"
          height="80"
          width="80"
          alt="swift-lend"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>
      <ConnectButton />
    </div>
  );
};

export default Navbar;
