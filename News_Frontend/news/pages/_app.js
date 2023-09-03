import "@/styles/globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { appWithTranslation } from "next-i18next";

import { AuthProvider } from "../context/auth";
import { Suspense } from "react";
import Loader from "@/components/Loader";

const loading = <Loader />;

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Suspense fallback={loading}>
        <Component {...pageProps} />
      </Suspense>
    </AuthProvider>
  );
}

export default appWithTranslation(App);
