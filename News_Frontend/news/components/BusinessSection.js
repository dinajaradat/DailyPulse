import React from "react";
import { useApi, useApi2 } from "../hooks/useApi";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Loader from "./Loader";
import CardSmall from "./CardSmall";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function Business() {
  const router = useRouter();
  const { data } = useApi("business");
  const { dataAr } = useApi2("Business", "ar"); // en or ar from cookies
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    if (data || dataAr) {
      setLoading(false);
    }
  }, [data, dataAr]);

  return (
    <div className="dark:bg-bgDark pt-10 bg-bgLight 2xl:px-40 ">
      <hr className="mb-6 border-t border-gray-300 dark:border-gray-600" />{" "}
      <h1 className="text-2xl dark:text-white text-black flex  pt-10  ">
        <span className="w-4 bg-black mx-2 title_box"> </span>
        {t("home:business_cat") === "Business" ? (
          <>
            {t("home:business_cat")}
            <span className="pt-1 pl-1">
              <FaAngleRight />{" "}
            </span>
          </>
        ) : (
          <>
            {t("home:business_cat")}
            <span className="pt-1 pl-1">
              <FaAngleLeft />{" "}
            </span>
          </>
        )}
      </h1>
      {!dataAr ? (
        <Loader />
      ) : (
        <>
          <ul className="cards  ">
            {Cookies.get("lang") ? (
              <>
                {dataAr.articles.slice(0, 4).map((item, index) => (
                  <CardSmall key={index} item={item} />
                ))}
              </>
            ) : (
              <>
                {data.articles.slice(0, 4).map((item, index) => (
                  <CardSmall key={index} item={item} />
                ))}
              </>
            )}
          </ul>
        </>
      )}
    </div>
  );
}
