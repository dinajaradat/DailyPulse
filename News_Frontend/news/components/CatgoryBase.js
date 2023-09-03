import React from "react";
import Carouselcat from "./Carouselcat";
import { useApi, useApi2 } from "@/hooks/useApi";
import Cookies from "js-cookie";

import Catgorysection from "./Catgorysection";
import Loader from "./Loader";
import { useState, useEffect } from "react";

export default function CatgoryBase({ catgory }) {
  const { data } = useApi(catgory);
  const { dataAr } = useApi2(catgory, "ar");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data || dataAr) {
      setLoading(false);
    }
  }, [data, dataAr]);
  return (
    <>
      {!dataAr ? (
        <div
          style={{
            minHeight: "70vh",
          }}
          className="bg-bgLight dark:bg-bgDark"
        >
          <Loader />
        </div>
      ) : (
        <div className="dark:bg-bgDark pt-10 bg-bgLight 2xl:px-40">
          {Cookies.get("lang") ? (
            <>
              <Carouselcat data={dataAr} loading={loading} />
              <Catgorysection data={dataAr} loading={loading} />
            </>
          ) : (
            <>
              <Carouselcat data={data} loading={loading} />
              <Catgorysection data={data} loading={loading} />
            </>
          )}
        </div>
      )}
    </>
  );
}
