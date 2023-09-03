import Card from "@/components/Card";
import { useApi, useApi2 } from "../hooks/useApi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

import Cookies from "js-cookie";
import Loader from "./Loader";

export default function TechSection() {
  const { t } = useTranslation();
  const { data } = useApi("technology");
  const { dataAr } = useApi2("tech", "ar");

  return (
    <div className="dark:bg-bgDark pt-10 bg-bgLight 2xl:px-40 ">
      <hr className="mb-6 border-t border-gray-300 dark:border-gray-600" />{" "}
      <h1 className="text-2xl dark:text-white text-black flex  pt-10  ">
        <span className="w-4 bg-black mx-2 title_box"> </span>
        {t("home:tech_cat") === "Technology" ? (
          <>
            {t("home:tech_cat")}
            <span className="pt-1 pl-1">
              <FaAngleRight />{" "}
            </span>
          </>
        ) : (
          <>
            {t("home:tech_cat")}
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
          {/* {t('home:tech_cat')}
            <span className="pt-1 pl-1">
              {" "}
              <FaAngleRight />{" "}
            </span>{" "} */}
          <ul className="cards  ">
            {Cookies.get("lang") ? (
              <>
                {dataAr.articles.slice(0, 4).map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </>
            ) : (
              <>
                {data.articles.slice(0, 4).map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </>
            )}
          </ul>
        </>
      )}
    </div>
  );
}
