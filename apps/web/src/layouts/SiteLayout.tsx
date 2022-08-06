// components/layout.js

import { useTheme } from "next-themes";
import { ReactWithChildren } from "../../types";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// * rainbowkit imports
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

// * rainbowkit setup
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || "";

const { chains, provider } = configureChains(
  [chain.polygon],
  [alchemyProvider({ apiKey: ALCHEMY_API_KEY }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const SiteLayout: ReactWithChildren = ({ children }) => {
  const { theme, setTheme } = useTheme();

  console.log({ theme });

  const myDarkTheme = darkTheme();
  const myLightTheme = lightTheme();

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={theme === "dark" ? myDarkTheme : myLightTheme}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 flex h-full  items-center justify-center">
            {children}
          </main>
          <Footer />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default SiteLayout;
