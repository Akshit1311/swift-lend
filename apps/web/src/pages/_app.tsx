import "../../styles/globals.css";
import type { AppProps } from "next/app";

// * dark/light theme
import { ThemeProvider, useTheme } from "next-themes";
import SiteLayout from "../layouts/SiteLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();

  console.log({ theme });

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </ThemeProvider>
  );
}

export default MyApp;
