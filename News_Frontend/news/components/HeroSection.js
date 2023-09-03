import React from "react";
import { useEffect, useState } from "react";

import Card from "./Card";
import CardSmall from "./CardSmall";
import { useApi2, useApi } from "@/hooks/useApi";
import Cookies from "js-cookie";
import CarouselC from "./CarouselC";
import Loader from "./Loader";
function HeroSection() {
  const { data } = useApi("news");
  const { dataAr, loadingAr } = useApi2("new", "ar");

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data && dataAr) {
      setLoading(false);
    }
  }, [data, dataAr]);

  return (
    <>
      {!dataAr ? (
        <Loader />
      ) : (
        <div className="flex gap-10 py-10 bg-bgLight dark:bg-bgDark  2xl:px-40">
          {Cookies.get("lang") ? (
            <>
              <CarouselC data={dataAr} loading={loadingAr} />
              <div className="flex flex-col">
                {dataAr.articles.slice(5, 8).map((item) => (
                  <CardSmall item={item} key={item.title} />
                ))}
              </div>
            </>
          ) : (
            <>
              <CarouselC data={data} loading={loadingAr} />
              <div className="flex flex-col">
                {data.articles.slice(5, 8).map((item) => (
                  <CardSmall item={item} key={item.title} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default HeroSection;
