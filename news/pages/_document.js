import { Html, Head, Main, NextScript } from "next/document";
import { AuthProvider } from "../context/auth";

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
