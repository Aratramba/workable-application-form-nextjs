import "@/styles/globals.css";
import "../../workable-application-form-react/output/styles.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
