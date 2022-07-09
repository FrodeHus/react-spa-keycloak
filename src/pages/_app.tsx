import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MsalProvider } from "@azure/msal-react";
import { MsalInstance } from "./auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MsalProvider instance={MsalInstance}>
      <Component {...pageProps} />
    </MsalProvider>
  );
}

export default MyApp;
